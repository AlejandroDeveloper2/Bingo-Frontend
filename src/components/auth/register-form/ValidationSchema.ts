import {
  CreateAccountData,
  FieldErrorType,
  WrongInput,
} from "@interfaces/data";

import { FormValidations } from "@utils/index";

const validations = new FormValidations();

export const validationSchema = async (
  formData: CreateAccountData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput<CreateAccountData>> => ({
  name: await validations
    .validateEmptyFields<CreateAccountData>(formData.name, "name", formRef)
    .then(() =>
      validations.validateUsername<CreateAccountData>(
        formData.name,
        "name",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  email: await validations
    .validateEmptyFields<CreateAccountData>(formData.email, "email", formRef)
    .then(() =>
      validations.validateEmail<CreateAccountData>(
        formData.email,
        "email",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
  password: await validations
    .validateEmptyFields<CreateAccountData>(
      formData.password,
      "password",
      formRef
    )
    .catch((error: FieldErrorType) => error),
  confirmPassword: await validations
    .validateEmptyFields<CreateAccountData>(
      formData.confirmPassword,
      "confirmPassword",
      formRef
    )
    .then(() =>
      validations.comparePasswords<CreateAccountData>(
        [formData.password, formData.confirmPassword],
        "confirmPassword",
        formRef
      )
    )
    .catch((error: FieldErrorType) => error),
});
