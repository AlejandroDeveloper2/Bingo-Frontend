import { create } from "zustand";
import { toast } from "react-toastify";
import { decodeToken } from "react-jwt";

import {
  Auth,
  ErrorResponse,
  ServerResponse,
  User,
  UserAuth,
} from "@interfaces/data";
import { AuthStore } from "@interfaces/store";

import { AuthService } from "@services/.";

const authService = new AuthService();

const authStore = create<AuthStore>((set, get) => ({
  loggedUser: null,
  authData: decodeToken<Auth>(localStorage.getItem("token") ?? ""),
  authenticated: false,
  checking: false,

  login: async (userCredentials, toggleLoading): Promise<void> => {
    toggleLoading({ isLoading: true, message: "Validando usuario..." });
    try {
      const { data, message }: ServerResponse<UserAuth> =
        await authService.login(userCredentials);
      window.localStorage.setItem("token", data.sessionToken);
      const decodedToken: Auth | null = decodeToken<Auth>(data.sessionToken);
      set({ authData: decodedToken, authenticated: true });
      toast.success(message);
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading({ isLoading: false, message: "" });
    }
  },
  createAccount: async (accountData, toggleLoading): Promise<void> => {
    toggleLoading({ isLoading: true, message: "Creando cuenta..." });
    try {
      const { message }: ServerResponse<User> = await authService.createAccount(
        accountData
      );
      toast.success(message);
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading({ isLoading: false, message: "" });
    }
  },
  verifyUserAuth: async (): Promise<void> => {
    const token: string | null = window.localStorage.getItem("token");
    try {
      set({ checking: true });
      if (token) {
        const { data }: ServerResponse<Auth> = await authService.verifyUserAuth(
          token
        );
        set({ authData: data, authenticated: true });
        return;
      }
      get().logout();
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
      get().logout();
    } finally {
      set({ checking: false });
    }
  },
  logout: (): void => {
    window.localStorage.removeItem("token");
    set({
      authData: null,
      authenticated: false,
    });
  },
  getUserProfile: async (toggleLoading): Promise<void> => {
    toggleLoading({ isLoading: true, message: "Obteniendo perfil..." });
    try {
      const token: string = window.localStorage.getItem("token") ?? "";
      const decodedToken: Auth | null = decodeToken<Auth>(token);
      if (token && decodedToken) {
        const { data, message }: ServerResponse<User> =
          await authService.getUserProfile(decodedToken.id, token);
        set({ loggedUser: data });
        toast.success(message);
        return;
      }
      toast.warning("No hay ningun token!");
    } catch (e: unknown) {
      const parsedError = e as ErrorResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading({ isLoading: false, message: "" });
    }
  },
}));

export default authStore;
