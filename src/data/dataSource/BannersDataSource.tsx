import axios, { AxiosRequestConfig } from "axios";
import { IBannersResponse } from "../../domain/models/responses/IBannersResponse";
import { constantes } from "@/domain/constants";
import queryClient from "@/domain/configuations/reactQueryConfig";

export const GetAllBanners = async (): Promise<IBannersResponse> => {
  const fetchDataBanners = async () => {
    const request: AxiosRequestConfig = {
      method: "GET",
      baseURL: constantes.paths.BASE_URL_API,
      url: `${constantes.endpoints.banners}?populate=*`,
    };

    const response = await axios.request<IBannersResponse>(request);
    return response.data;
  };

  try {
    const data = await queryClient.fetchQuery(
      "getAllBanners",
      fetchDataBanners,
      { staleTime: 86400000, retry: 3 }
    );
    return data;
  } catch (error) {
    throw new Error("Error al obtener los banners");
  }
};
