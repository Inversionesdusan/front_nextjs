import queryClient from "@/domain/configuations/reactQueryConfig";
import { constantes } from "@/domain/constants";
import { IProductosResponse } from "@/domain/models/responses/IProductosResponse";
import axios, { AxiosRequestConfig } from "axios";

export const GetProductos = async (): Promise<IProductosResponse> => {
  const fetchProductos = async () => {
    const request: AxiosRequestConfig = {
      method: "GET",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
      url: `${constantes.endpoints.productos}?populate=*`,
    };
    const response = await axios.request<IProductosResponse>(request);
    return response.data;
  };

  try {
    const data = await queryClient.fetchQuery("getProductos", fetchProductos, {
      staleTime: 7200000,
      retry: 3,
    });

    return data;
  } catch (error) {
    throw new Error("Error al obtener la informacion de los productos");
  }
};
