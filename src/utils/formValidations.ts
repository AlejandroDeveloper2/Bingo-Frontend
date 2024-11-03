import { FieldErrorType, KeyList } from "@interfaces/data";

class FormValidations {
  constructor() {}

  private markWrongInput = <T>(
    formRef: React.RefObject<HTMLFormElement>,
    inputKey: KeyList<T>,
    error: boolean
  ): void => {
    const $fieldset = formRef.current?.querySelector("fieldset");
    const $input = $fieldset?.querySelector(`#${inputKey as string}`);
    if (error) $input?.setAttribute("style", "border-color: var(--red)");
    else $input?.setAttribute("style", "border-color: var(--black)");
  };

  public validateEmptyFields<T>(
    field: string | number,
    key: KeyList<T>,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    if (field === "") {
      error = {
        message: "El campo es obligatorio!",
        error: true,
      };
      this.markWrongInput<T>(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      this.markWrongInput<T>(formRef, key, false);
      return Promise.resolve(error);
    }
  }

  public validateUsername<T>(
    field: string,
    key: KeyList<T>,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    if (field.length < 3) {
      error = {
        message: "El nombre de usuario debe tener de al menos 3 caracteres!",
        error: true,
      };
      this.markWrongInput<T>(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      this.markWrongInput<T>(formRef, key, false);
      return Promise.resolve(error);
    }
  }

  public validateEmail<T>(
    email: string,
    key: KeyList<T>,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    const emailRegex: RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      error = {
        message: "El email ingresado es invalido!",
        error: true,
      };
      this.markWrongInput<T>(formRef, key, true);
      return Promise.reject(error);
    }
    error = {
      message: "",
      error: false,
    };
    this.markWrongInput<T>(formRef, key, false);
    return Promise.resolve(error);
  }

  public comparePasswords<T>(
    passwords: string[],
    key: KeyList<T>,
    formRef: React.RefObject<HTMLFormElement>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;

    if (passwords.length !== 2) {
      error = {
        message: "¡Esta función resive solo un par de contraseñas!",
        error: true,
      };
      this.markWrongInput<T>(formRef, key, true);
      return Promise.reject(error);
    }

    if (passwords[0] !== passwords[1]) {
      error = {
        message: "¡Las contraseñas no coinciden!",
        error: true,
      };
      this.markWrongInput<T>(formRef, key, true);
      return Promise.reject(error);
    }
    error = {
      message: "",
      error: false,
    };
    this.markWrongInput<T>(formRef, key, false);
    return Promise.resolve(error);
  }
}

export default FormValidations;
