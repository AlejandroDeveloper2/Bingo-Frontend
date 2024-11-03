import { LoginData, Loading, CreateAccountData, Auth, User } from "./data";

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

export type { AuthStore };
