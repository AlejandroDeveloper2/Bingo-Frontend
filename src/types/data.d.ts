type FieldErrorType = {
  message: string;
  error: boolean;
};
type KeyList<T> = keyof T;
type WrongInput<T> = Record<KeyList<T>, FieldErrorType>;
type SessionStatusType = "online" | "offline";

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

export type {
  FieldErrorType,
  WrongInput,
  KeyList,
  SessionStatusType,
  LoginData,
  CreateAccountData,
  Loading,
  ServerResponse,
  ErrorResponse,
  User,
  UserAuth,
  Auth,
};
