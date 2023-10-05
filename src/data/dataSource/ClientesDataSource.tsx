import { constantes } from "@/domain/constants";
import { IClientRegisterRequest } from "@/domain/models/requests/IClientRegisterRequest";
import { IClientUpdateRequest } from "@/domain/models/requests/IClientUpdateRequest";
import { ISaveDataNotRegisteredClient } from "@/domain/models/requests/ISaveDataNotRegisteredClient";
import { IClientDataQueryResponse } from "@/domain/models/responses/IClientDataQueryResponse";
import { IClientRegisterResponse } from "@/domain/models/responses/IClientRegisterResponse";
import { IGetClientByEmailResponse } from "@/domain/models/responses/IGetClientByEmailResponse";
import { NotRegisteredClientResponse } from "@/domain/models/responses/NotRegisteredClientResponse";
import axios, { AxiosRequestConfig } from "axios";

export const registerClient = async (
  clientData: IClientRegisterRequest
): Promise<IClientRegisterResponse> => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.registro,
    data: clientData,
  };

  try {
    const { data } = await axios.request<IClientRegisterResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};

export const saveNotRegisteredClient = async (
  clientData: ISaveDataNotRegisteredClient
): Promise<number> => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.clientesNoRegistrados,
    data: { data: { ...clientData } },
  };

  try {
    const { data } = await axios.request<NotRegisteredClientResponse>(request);
    if (data.data.id && data.data.id > 0) return data.data.id;
    return -1;
  } catch (error) {
    return -1;
  }
};

export const getClienteByEmail = async (email: string) => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: constantes.paths.BASE_URL_API,
    url: `${constantes.endpoints.clientesNoRegistrados}?filters[email]$eq=${email}`,
  };

  try {
    const { data } = await axios.request<IGetClientByEmailResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};

export const loadClientData = async (
  token: string
): Promise<IClientDataQueryResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.user,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.request<IClientDataQueryResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateClientData = async (
  token: string,
  clientID: number,
  clientData: IClientUpdateRequest,
  direccionEnvio: string
): Promise<IClientDataQueryResponse> => {
  if (direccionEnvio === "S") {
    clientData.direccion_envio = null;
  }
  const request: AxiosRequestConfig = {
    method: "PUT",
    baseURL: constantes.paths.BASE_URL_API,
    url: `${constantes.endpoints.updateUser}/${clientID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { ...clientData },
  };

  try {
    const { data } = await axios.request<IClientDataQueryResponse>(request);
    return data;
  } catch (error) {
    throw error;
  }
};
