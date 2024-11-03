import { LoginData, WrongInput } from "@interfaces/data";

export const initialLoginValues: LoginData = {
  email: "",
  password: "",
};

export const initialLoginErrors: WrongInput<LoginData> = {
  email: {
    message: "",
    error: false,
  },
  password: {
    message: "",
    error: false,
  },
};
