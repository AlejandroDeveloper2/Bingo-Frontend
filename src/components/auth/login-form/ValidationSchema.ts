import { LoginData, FieldErrorType, WrongInput } from "@interfaces/data";

import { FormValidations } from "@utils/index";

const validations = new FormValidations();

export const validationSchema = async (
  formData: LoginData,
  formRef: React.RefObject<HTMLFormElement>
): Promise<WrongInput<LoginData>> => ({
  email: await validations
    .validateEmptyFields<LoginData>(formData.email, "email", formRef)
    .then(() =>
      validations.validateEmail<LoginData>(formData.email, "email", formRef)
    )
    .catch((error: FieldErrorType) => error),
  password: await validations
    .validateEmptyFields<LoginData>(formData.password, "password", formRef)
    .catch((error: FieldErrorType) => error),
});
