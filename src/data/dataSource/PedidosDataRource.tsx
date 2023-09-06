import { constantes } from "@/domain/constants";
import { ISaveDataOrder } from "@/domain/models/requests/ISAveDataOrder";
import { ICreateOrderResponse } from "@/domain/models/responses/ICreateOrderResponse";
import axios, { AxiosRequestConfig } from "axios";

export const saveOrder = async (orderData: ISaveDataOrder) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: constantes.endpoints.pedidos,
    data: { data: { ...orderData } },
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
  };

  try {
    const { data } = await axios.request<ICreateOrderResponse>(request);
    if (data.data.id && data.data.id > 0) return data.data.id;
    return -1;
  } catch (error) {
    console.log("Ha ocurrido un error al grabar la información del pedido");
  }
};
