import { CreateAccountData, WrongInput } from "@interfaces/data";

export const initialRegisterValues: CreateAccountData = {
  email: "",
  password: "",
  name: "",
  confirmPassword: "",
};

export const initialRegisterErrors: WrongInput<CreateAccountData> = {
  email: {
    message: "",
    error: false,
  },
  password: {
    message: "",
    error: false,
  },
  name: {
    message: "",
    error: false,
  },
  confirmPassword: {
    message: "",
    error: false,
  },
};
