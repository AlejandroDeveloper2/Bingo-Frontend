type FieldErrorType = {
  message: string;
  error: boolean;
};
type KeyList<T> = keyof T;
type WrongInput<T> = Record<KeyList<T>, FieldErrorType>;
type SessionStatusType = "online" | "offline";
type GameModeType = "full" | "diagonal" | "vertical" | "horizontal" | "corners";
type BingoBallNameType = "B" | "I" | "N" | "G" | "O";
type GameStatusType = "ended" | "in-progress" | "waiting" | "unstart";

interface LoginData {
  email: string;
  password: string;
}

interface CreateAccountData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Loading {
  isLoading: boolean;
  message: string;
}

interface ServerResponse<T> {
  data: T;
  code: number;
  message: string;
}

interface ErrorResponse extends ServerResponse<null> {
  super();
}

interface User {
  _id: string;
  name: string;
  email: string;
  sessionStatus: SessionStatusType;
}

interface UserAuth {
  sessionToken: string;
}

interface Auth {
  id: string;
  exp: number;
  iat: number;
}
/**Bingo Types */

interface Player {
  _id: string;
  email: string;
  name: string;
  correctBallSelections: number;
}

interface BingoBall {
  _id: string;
  name: BingoBallNameType;
  number: number;
  selected: boolean;
  enabled: boolean;
}

interface BingoCard {
  _id: string;
  balls: BingoBall[];
  user: User;
  code: string;
}

interface Game {
  _id: string;
  players: Player[];
  bingoCards: BingoCard[];
  randomBingoBalls: BingoBall[];
  gameMode: GameModeType;
  gameStatus: GameStatusType;
  winner: User | null;
}

export type {
  FieldErrorType,
  WrongInput,
  KeyList,
  SessionStatusType,
  GameModeType,
  BingoBallNameType,
  GameStatusType,
  LoginData,
  CreateAccountData,
  Loading,
  ServerResponse,
  ErrorResponse,
  User,
  UserAuth,
  Auth,
  Player,
  BingoBall,
  BingoCard,
  Game,
};
