import { constantes } from "@/domain/constants";
import { IDatosEmpresaResponse } from "@/domain/models/responses/IDatosEmpresaResponse";
import axios, { AxiosRequestConfig } from "axios";

export const getDatosEmpresa = async (): Promise<IDatosEmpresaResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: constantes.endpoints.empresa,
  };

  try {
    const response = await axios.request<IDatosEmpresaResponse>(request);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener datos de la empresa");
  }
};
