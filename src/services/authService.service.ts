import axiosClient from "@config/axiosClient";

import {
  Auth,
  CreateAccountData,
  LoginData,
  ServerResponse,
  User,
  UserAuth,
} from "@interfaces/data";

import { handleError } from "@helpers/index";

export default class AuthService {
  constructor() {}

  public login = async (
    userCredentials: LoginData
  ): Promise<ServerResponse<UserAuth>> => {
    let authResponse: ServerResponse<UserAuth>;
    try {
      const { data } = await axiosClient.post<ServerResponse<UserAuth>>(
        "/auth/login",
        userCredentials
      );
      authResponse = data;
      return authResponse;
    } catch (e: unknown) {
      return handleError(e);
    }
  };

  public createAccount = async (
    accountData: CreateAccountData
  ): Promise<ServerResponse<User>> => {
    let newUserRes: ServerResponse<User>;
    const { email, password, name } = accountData;

    try {
      const { data } = await axiosClient.post<ServerResponse<User>>(
        "/auth/register",
        { name, email, password }
      );
      newUserRes = data;
      return newUserRes;
    } catch (e: unknown) {
      return handleError(e);
    }
  };

  public verifyUserAuth = async (
    token: string
  ): Promise<ServerResponse<Auth>> => {
    let verificationRes: ServerResponse<Auth>;
    try {
      const { data } = await axiosClient.post<ServerResponse<Auth>>(
        "/auth/verifySession",
        { token }
      );
      verificationRes = data;
      return verificationRes;
    } catch (e: unknown) {
      return handleError(e);
    }
  };

  public getUserProfile = async (
    userEmail: string,
    token: string
  ): Promise<ServerResponse<User>> => {
    let userRes: ServerResponse<User>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ServerResponse<User>>(
        `/auth/${userEmail}`,
        config
      );
      userRes = data;
      return userRes;
    } catch (e: unknown) {
      return handleError(e);
    }
  };
}
