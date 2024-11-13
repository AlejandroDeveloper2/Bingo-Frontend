import { create } from "zustand";
import { toast } from "react-toastify";
import io from "socket.io-client";

import { BingoStore } from "@interfaces/store";
import {
  ErrorResponse,
  Game,
  Player,
  ServerResponse,
  UpdatedGameBallSelection,
  UpdatedGameBingoCards,
  UpdatedGamePlayers,
  UpdatedGameStatus,
  UpdatedGameWinner,
} from "@interfaces/data";

import {
  bingoDefaultValues,
  defaultBingoBoard,
  playerDefaultValues,
} from "@constants/index";

import { BingoService } from "@services/index";

const bingoService = new BingoService();

const bingoStore = create<BingoStore>((set, get) => ({
  socket: io("/"),
  bingoMessageLog: {
    message: "",
    error: false,
  },
  games: [],
  bingo: bingoDefaultValues,
  player: playerDefaultValues,
  launchedBall: null,
  bingoBoard: defaultBingoBoard,

  updateStoreState: <T>(updatedData: T, key: string): void => {
    set({ [key]: updatedData });
  },

  createBingoGame: async (newGame): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      const { data, message }: ServerResponse<Game> =
        await bingoService.createBingoGame(token, newGame);
      const games: Game[] = [...get().games, data];
      set({ games });
      toast.success(message);
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    }
  },
  getBingoGames: async (): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      const { message, data }: ServerResponse<Game[]> =
        await bingoService.getBingoGames(token);

      set({
        games: data,
      });
      toast.success(message);
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    }
  },
  getGame: async (gameId, userEmail): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      const { data }: ServerResponse<Game> = await bingoService.getGame(
        token,
        gameId
      );

      /**Obtenemos los datos jugador logeado */
      const player = data.players.filter(
        (player) => player.email === userEmail
      )[0];

      set({ bingo: data, player });
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    }
  },
  updateGameStatus: async (gameId, gameStatus): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      const { data, message }: ServerResponse<UpdatedGameStatus> =
        await bingoService.updateGameStatus(token, gameId, gameStatus);
      /*Socket io */
      get().socket.emit("update_bingo_status", data);
      set({ bingoMessageLog: { message, error: false } });
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    }
  },

  joinToBingoGame: async (gameId, player, toggleLoading): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    toggleLoading({ isLoading: true, message: "Uniendose a la partida..." });
    try {
      const { data, message }: ServerResponse<UpdatedGamePlayers> =
        await bingoService.joinToBingoGame(token, gameId, player);
      /*Socket io */
      get().socket.emit("join_to_bingo", data);
      toast.success(message);
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading({ isLoading: false, message: "" });
    }
  },

  deletePlayerFromBingo: async (gameId, playerId, cardCode): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      const { data, message }: ServerResponse<UpdatedGamePlayers> =
        await bingoService.deletePlayerFromBingo(
          token,
          gameId,
          playerId,
          cardCode
        );
      set({ bingoBoard: defaultBingoBoard, player: playerDefaultValues });
      /*Socket io */
      get().socket.emit("exit_from_bingo", data);
      toast.success(message);
      set({ bingoMessageLog: { message, error: true } });
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    }
  },

  generateBingoCard: async (
    gameId,
    userId,
    gameMode,
    toggleLoading
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    toggleLoading({ isLoading: true, message: "Generando tarjetón..." });
    try {
      const { data, message }: ServerResponse<UpdatedGameBingoCards> =
        await bingoService.generateBingoCard(token, gameId, userId, gameMode);

      /**Obtenemos el tarjeton de bingo generado por el usuario*/
      const playerBingoCard = data.bingoCards.filter(
        (bingoCard) => bingoCard.user._id === userId
      )[0];

      /**Socket */
      get().socket.emit("generate_card_bingo", data);

      set({ bingoBoard: playerBingoCard });
      toast.success(message);
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading({ isLoading: false, message: "" });
    }
  },
  selectBingoBall: async (
    gameId,
    ballId,
    playerSelection,
    toggleLoading
  ): Promise<void> => {
    toggleLoading({ isLoading: true, message: "..." });
    const token: string = window.localStorage.getItem("token") ?? "";

    try {
      const { data, message }: ServerResponse<UpdatedGameBallSelection> =
        await bingoService.selectBingoBall(
          token,
          gameId,
          ballId,
          playerSelection
        );

      const bingoBoard = data.bingoCards.filter(
        (board) => board.code === playerSelection.cardCode
      )[0];

      const player: Player = data.players.filter(
        (player) => player.email === playerSelection.playerEmail
      )[0];

      set({ bingoBoard, player });
      /*Socket io */
      get().socket.emit("select_ball", data);
      set({ bingoMessageLog: { message, error: false } });
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      set({ bingoMessageLog: { message: parsedError.message, error: true } });
    } finally {
      toggleLoading({ isLoading: false, message: "" });
    }
  },
  singBingo: async (
    gameId,
    winnerPayload,
    navigate,
    toggleLoading
  ): Promise<void> => {
    toggleLoading({ isLoading: true, message: "..." });

    const token: string = window.localStorage.getItem("token") ?? "";
    const playerId: string = get().player._id;
    const bingoBoardCode: string = get().bingoBoard.code;

    try {
      const { data, message }: ServerResponse<UpdatedGameWinner> =
        await bingoService.singBingo(token, gameId, winnerPayload);

      /*Socket io */
      get().socket.emit("win_game", data);

      set({ bingoMessageLog: { message, error: false } });
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      /* Valida si un usuario a Cantado bingo sin ganar y lo descalifica y elimina del juego */
      get()
        .deletePlayerFromBingo(gameId, playerId, bingoBoardCode)
        .then(() => {
          navigate("/home");
        });
      set({ bingoMessageLog: { message: parsedError.message, error: true } });
    } finally {
      get().socket.emit("leave_game_room", {
        room: "bingo_room",
        players: get().bingo.players.length,
      });
      toggleLoading({ isLoading: false, message: "" });
    }
  },
  resetBingoGame: async (gameId): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      const { data, message }: ServerResponse<Game> =
        await bingoService.resetBingoGame(token, gameId);
      /**Socket Io */
      get().socket.emit("reset_bingo", data);
      set({
        bingoBoard: defaultBingoBoard,
        player: playerDefaultValues,
        launchedBall: null,
      });
      toast.success(message);
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    }
  },
}));

export default bingoStore;
