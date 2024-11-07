import axiosClient from "@config/axiosClient";

import {
  Game,
  GameModeType,
  GameStatusType,
  Player,
  PlayerSelection,
  ServerResponse,
  UpdatedGameBallSelection,
  UpdatedGameBingoCards,
  UpdatedGamePlayers,
  UpdatedGameStatus,
  UpdatedGameWinner,
  WinnerPayload,
} from "@interfaces/data";

import { handleError } from "@helpers/index";

class BingoService {
  constructor() {}

  public createBingoGame = async (
    token: string,
    newGame: Omit<Game, "_id">
  ): Promise<ServerResponse<Game>> => {
    let newGameResponse: ServerResponse<Game>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.post<ServerResponse<Game>>(
        "/bingo",
        newGame,
        config
      );
      newGameResponse = data;
      return newGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
  public getBingoGames = async (
    token: string
  ): Promise<ServerResponse<Game[]>> => {
    let bingoGamesResponse: ServerResponse<Game[]>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ServerResponse<Game[]>>(
        "/bingo",
        config
      );
      bingoGamesResponse = data;
      return bingoGamesResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };

  public getGame = async (
    token: string,
    gameId: string
  ): Promise<ServerResponse<Game>> => {
    let bingoGameResponse: ServerResponse<Game>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ServerResponse<Game>>(
        "/bingo/" + gameId,
        config
      );
      bingoGameResponse = data;
      return bingoGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
  public updateGameStatus = async (
    token: string,
    gameId: string,
    gameStatus: GameStatusType
  ): Promise<ServerResponse<UpdatedGameStatus>> => {
    let updatedGameResponse: ServerResponse<UpdatedGameStatus>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<
        ServerResponse<UpdatedGameStatus>
      >("/bingo/status/" + gameId, { gameStatus }, config);
      updatedGameResponse = data;
      return updatedGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };

  public joinToBingoGame = async (
    token: string,
    gameId: string,
    player: Omit<Player, "_id">
  ): Promise<ServerResponse<UpdatedGamePlayers>> => {
    let updatedGameResponse: ServerResponse<UpdatedGamePlayers>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<
        ServerResponse<UpdatedGamePlayers>
      >("/bingo/join/" + gameId, player, config);
      updatedGameResponse = data;
      return updatedGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
  public deletePlayerFromBingo = async (
    token: string,
    gameId: string,
    playerId: string,
    cardCode: string
  ): Promise<ServerResponse<UpdatedGamePlayers>> => {
    let updatedGameResponse: ServerResponse<UpdatedGamePlayers>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<
        ServerResponse<UpdatedGamePlayers>
      >(
        `/bingo/deletePlayer/${gameId}/${playerId}`,
        { code: cardCode },
        config
      );
      updatedGameResponse = data;
      return updatedGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
  public generateBingoCard = async (
    token: string,
    gameId: string,
    userId: string,
    gameMode: GameModeType
  ): Promise<ServerResponse<UpdatedGameBingoCards>> => {
    let updatedGameResponse: ServerResponse<UpdatedGameBingoCards>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<
        ServerResponse<UpdatedGameBingoCards>
      >(`/bingo/newCard/${gameId}/${userId}`, { gameMode }, config);
      updatedGameResponse = data;
      return updatedGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
  public selectBingoBall = async (
    token: string,
    gameId: string,
    ballId: string,
    playerSelection: PlayerSelection
  ): Promise<ServerResponse<UpdatedGameBallSelection>> => {
    let updatedGameResponse: ServerResponse<UpdatedGameBallSelection>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<
        ServerResponse<UpdatedGameBallSelection>
      >(`/bingo/selectBall/${gameId}/${ballId}`, playerSelection, config);
      updatedGameResponse = data;
      return updatedGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };

  public singBingo = async (
    token: string,
    gameId: string,
    winnerPayload: WinnerPayload
  ): Promise<ServerResponse<UpdatedGameWinner>> => {
    let updatedGameResponse: ServerResponse<UpdatedGameWinner>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<
        ServerResponse<UpdatedGameWinner>
      >(`/bingo/winner/${gameId}`, winnerPayload, config);
      updatedGameResponse = data;
      return updatedGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
  public resetBingoGame = async (
    token: string,
    gameId: string
  ): Promise<ServerResponse<Game>> => {
    let updatedGameResponse: ServerResponse<Game>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ServerResponse<Game>>(
        `/bingo/reset/${gameId}`,
        config
      );
      updatedGameResponse = data;
      return updatedGameResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
}

export default BingoService;
