import { constantes } from "@/domain/constants";
import { ILoginRequest } from "@/domain/models/requests/ILoginRequest";
import { IClientRegisterResponse } from "@/domain/models/responses/IClientRegisterResponse";
import axios, { AxiosRequestConfig } from "axios";
import { IChangePasswordRequest } from "../../domain/models/requests/IChangePasswordRequest";
import { IResetPasswordResponse } from "@/domain/models/responses/IResetPasswordResponse";
import { IResetPasswordRequest } from "@/domain/models/requests/IResetPasswordRequest";

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

export const resetPassword = async (email: string) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.resetPassword,
    data: {
      email,
    },
  };

  try {
    const { data } = await axios.request<IResetPasswordResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (resetData: IResetPasswordRequest) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.updatePassword,
    data: {
      ...resetData,
    },
  };

  try {
    const { data } = await axios.request<IClientRegisterResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};
