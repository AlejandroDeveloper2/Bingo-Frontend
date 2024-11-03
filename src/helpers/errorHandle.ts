import { AxiosError } from "axios";

import { ErrorResponse } from "@interfaces/data";

const handleError = (e: unknown): never => {
  const error: AxiosError<ErrorResponse> = e as AxiosError<ErrorResponse>;
  if (error.response) throw new Error(error.response.data.message);
  throw new Error("¡No se obtubo respuesta del servidor!");
};

export default handleError;
