import axios, { AxiosRequestConfig } from "axios";
import { IBannersResponse } from "../../domain/models/responses/IBannersResponse";
import { constantes } from "@/domain/constants";

export const getAllBanners = async (): Promise<IBannersResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: `${constantes.endpoints.banners}?populate=*`,
  };

  try {
    const response = await axios.request<IBannersResponse>(request);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los banners");
  }
};
