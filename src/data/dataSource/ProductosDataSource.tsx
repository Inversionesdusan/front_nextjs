import { constantes } from "@/domain/constants";
import { IProductosResponse } from "@/domain/models/responses/IProductosResponse";
import axios, { AxiosRequestConfig } from "axios";

export const getProductos = async (): Promise<IProductosResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: `${constantes.endpoints.productos}?populate=*`,
  };

  try {
    const response = await axios.request<IProductosResponse>(request);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener la informacion de los productos");
  }
};
