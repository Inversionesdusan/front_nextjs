import { constantes } from "@/domain/constants";
import { ISaveDataNotRegisteredClient } from "@/domain/models/requests/ISaveDataNotRegisteredClient";
import { IGetClientByEmailResponse } from "@/domain/models/responses/IGetClientByEmailResponse";
import { NotRegisteredClientResponse } from "@/domain/models/responses/NotRegisteredClientResponse";
import axios, { AxiosRequestConfig } from "axios";

export const saveNotRegisteredClient = async (
  clientData: ISaveDataNotRegisteredClient
): Promise<number> => {
  console.log("entrada al datasource -> ", clientData);
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: constantes.endpoints.clientesNoRegistrados,
    data: { data: { ...clientData } },
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  };

  try {
    const { data } = await axios.request<NotRegisteredClientResponse>(request);
    if (data.data.id && data.data.id > 0) return data.data.id;
    return -1;
  } catch (error) {
    console.log("Ha ocurrido un error al grabar la información");
    return -1;
  }
};

export const getClienteByEmail = async (email: string) => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: `${constantes.endpoints.clientesNoRegistrados}?filters[email]$eq=${email}`,
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  };

  try {
    const { data } = await axios.request<IGetClientByEmailResponse>(request);
    return data;
  } catch (error) {
    throw new Error("Error al consultar cliente por email");
  }
};
