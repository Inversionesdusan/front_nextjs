import { constantes } from "@/domain/constants";
import { ILoginRequest } from "@/domain/models/requests/ILoginRequest";
import { IClientRegisterResponse } from "@/domain/models/responses/IClientRegisterResponse";
import axios, { AxiosRequestConfig } from "axios";

export const login = async (
  loginData: ILoginRequest
): Promise<IClientRegisterResponse> => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: constantes.endpoints.login,
    data: loginData,
  };

  try {
    const { data } = await axios.request<IClientRegisterResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};
