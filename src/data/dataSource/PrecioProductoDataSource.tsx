import queryClient from "@/domain/configuations/reactQueryConfig";
import { constantes } from "@/domain/constants";
import { IPrecioProductoResponse } from "@/domain/models/responses/IPrecioProductoResponse";
import axios, { AxiosRequestConfig } from "axios";

export const GetPrecioProductos =
  async (): Promise<IPrecioProductoResponse> => {
    const fetchPrecioProducto = async () => {
      const request: AxiosRequestConfig = {
        method: "GET",
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
        url: `${constantes.endpoints.precios}?populate=*`,
      };

      const response = await axios.request<IPrecioProductoResponse>(request);
      return response.data;
    };

    try {
      const data = await queryClient.fetchQuery(
        "getPrecioProductos",
        fetchPrecioProducto,
        { staleTime: 86400000, retry: 2 }
      );

      return data;
    } catch (error) {
      throw new Error("Error al obtener datos de los precios");
    }
  };
