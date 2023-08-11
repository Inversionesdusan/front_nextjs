import queryClient from "@/domain/configuations/reactQueryConfig";
import { constantes } from "@/domain/constants";
import { IPresentacionesResponse } from "@/domain/models/responses/IPresentacionesResponse";
import axios, { AxiosRequestConfig } from "axios";

export const GetPresentaciones = async () => {
  const fecthPresentaciones = async () => {
    const request: AxiosRequestConfig = {
      method: "GET",
      baseURL: process.env.NEXT_PUBLIC_URL_API,
      url: constantes.endpoints.presentaciones,
    };

    const response = await axios.request<IPresentacionesResponse>(request);
    return response.data;
  };

  try {
    const data = await queryClient.fetchQuery(
      "getPresentaciones",
      fecthPresentaciones,
      { staleTime: 86400000, retry: 2 }
    );
    return data;
  } catch (error) {
    throw new Error("Error al obtener los tipos de presentación");
  }
};
