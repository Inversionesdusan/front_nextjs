import { constantes } from "@/domain/constants";
import { ISeccionInformacionResponse } from "@/domain/models/responses/ISeccionInformacionResponse";
import { AxiosRequestConfig } from "axios";
import axios from "axios";

export const getDataSeccionInformacion =
  async (): Promise<ISeccionInformacionResponse> => {
    const request: AxiosRequestConfig = {
      method: "GET",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
      url: `${constantes.endpoints.seccionInfo}`,
    };
    try {
      const response = await axios.request<ISeccionInformacionResponse>(
        request
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener la información de la empresa");
    }
  };
