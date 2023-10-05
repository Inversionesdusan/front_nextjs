import { constantes } from "@/domain/constants";
import { ILoginRequest } from "@/domain/models/requests/ILoginRequest";
import { IClientRegisterResponse } from "@/domain/models/responses/IClientRegisterResponse";
import axios, { AxiosRequestConfig } from "axios";
import { IChangePasswordRequest } from "../../domain/models/requests/IChangePasswordRequest";

export const login = async (
  loginData: ILoginRequest
): Promise<IClientRegisterResponse> => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
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

export const changePassword = async (
  token: string,
  data: IChangePasswordRequest
) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.changePassword,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { ...data },
  };

  try {
    const { data } = await axios.request<IClientRegisterResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};
