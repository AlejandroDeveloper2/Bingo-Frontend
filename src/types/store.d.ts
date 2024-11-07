import { Socket } from "socket.io-client";
import {
  LoginData,
  Loading,
  CreateAccountData,
  Auth,
  User,
  Game,
  BingoCard,
  GameStatusType,
  Player,
  GameModeType,
  PlayerSelection,
  WinnerPayload,
  BingoBall,
} from "./data";
import { NavigateFunction } from "react-router-dom";

interface AuthStore {
  loggedUser: User | null;
  authData: Auth | null;
  authenticated: boolean;
  checking: boolean;

  login: (
    userCredentials: LoginData,
    toggleLoading: (loadingStatus: Loading) => void
  ) => Promise<void>;
  createAccount: (
    accountData: CreateAccountData,
    toggleLoading: (loadingStatus: Loading) => void
  ) => Promise<void>;
  verifyUserAuth: () => Promise<void>;
  logout: () => void;
  getUserProfile: (
    toggleLoading: (loadingStatus: Loading) => void
  ) => Promise<void>;
}

interface BingoStore {
  socket: Socket;
  bingoMessageLog: {
    message: string;
    error: boolean;
  };
  games: Game[];
  bingo: Game;
  player: Player;
  launchedBall: BingoBall | null;
  bingoBoard: BingoCard;
  updateStoreState: <T>(updatedData: T, key: string) => void;
  createBingoGame: (newGame: Game) => void;
  getBingoGames: () => Promise<void>;
  getGame: (gameId: string, userEmail: string) => Promise<void>;
  updateGameStatus: (
    gameId: string,
    gameStatus: GameStatusType
  ) => Promise<void>;
  joinToBingoGame: (
    gameId: string,
    player: Omit<Player, "_id">,
    toggleLoading: (loadingStatus: Loading) => void
  ) => Promise<void>;
  deletePlayerFromBingo: (
    gameId: string,
    playerId: string,
    cardCode: string
  ) => Promise<void>;
  generateBingoCard: (
    gameId: string,
    userId: string,
    gameMode: GameModeType,
    toggleLoading: (loadingStatus: Loading) => void
  ) => Promise<void>;

  selectBingoBall: (
    gameId: string,
    ballId: string,
    playerSelection: PlayerSelection,
    toggleLoading: (loadingStatus: Loading) => void
  ) => Promise<void>;
  singBingo: (
    gameId: string,
    winnerPayload: WinnerPayload,
    navigate: NavigateFunction,
    toggleLoading: (loadingStatus: Loading) => void
  ) => Promise<void>;
  resetBingoGame: (gameId: string) => Promise<void>;
}

export type { AuthStore, BingoStore };
