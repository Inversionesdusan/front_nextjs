import { AxiosError } from "axios";
import { constantes } from "../constants";

export const getErrorMessage = (error: any): string => {
  if (error instanceof AxiosError) {
    const response = error.response?.data?.error?.message;
    if (response) {
      if (response instanceof Array) {
        const message = response[0]?.message;
        return transformMessage(message);
      } else {
        return transformMessage(response);
      }
    }
  }

  return "Ha ocurrido un error al procesar la solicitud";
};

const transformMessage = (message: string): string => {
  if (message.toLocaleLowerCase().includes("taken"))
    return constantes.errores.taken;
  if (message.toLocaleLowerCase().includes("attempt"))
    return constantes.errores.attempts;
  if (message.toLocaleLowerCase().includes("invalid identifier"))
    return constantes.errores.credentials;
  if (
    message.toLocaleLowerCase().includes("password") &&
    message.toLocaleLowerCase().includes("invalid")
  )
    return constantes.errores.password.invalid;

  if (
    message.toLocaleLowerCase().includes("password") &&
    message.toLocaleLowerCase().includes("current")
  )
    return constantes.errores.current;

  return "Ha ocurrido un error al procesar la solicitud";
};
