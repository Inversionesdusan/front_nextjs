import queryClient from "@/domain/configuations/reactQueryConfig";
import { constantes } from "@/domain/constants";
import { ISeccionInformacionResponse } from "@/domain/models/responses/ISeccionInformacionResponse";
import { AxiosRequestConfig } from "axios";
import axios from "axios";

export const GetDataSeccionInformacion =
  async (): Promise<ISeccionInformacionResponse> => {
    const fetchDataInformacion = async () => {
      const request: AxiosRequestConfig = {
        method: "GET",
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
        url: `${constantes.endpoints.seccionInfo}`,
      };

      const response = await axios.request<ISeccionInformacionResponse>(
        request
      );
      return response.data;
    };

    try {
      const resp = await queryClient.fetchQuery(
        "getDataSeccionInformacion",
        fetchDataInformacion,
        { staleTime: 86400000, retry: 3 }
      );
      return resp;
    } catch (error) {
      throw new Error("Error al obtener la información de la empresa");
    }
  };
