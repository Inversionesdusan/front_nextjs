import { constantes } from "@/domain/constants";
import { ISaveDataOrder } from "@/domain/models/requests/ISAveDataOrder";
import { ICreateOrderResponse } from "@/domain/models/responses/ICreateOrderResponse";
import { IOrderQueryResponse } from "@/domain/models/responses/IOrderQueryResponse";
import axios, { AxiosRequestConfig } from "axios";

export const saveOrder = async (orderData: ISaveDataOrder) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: constantes.endpoints.pedidos,
    data: { data: { ...orderData } },
  };

  try {
    const { data } = await axios.request<ICreateOrderResponse>(request);
    if (data.data.id && data.data.id > 0) return data.data.id;
    return -1;
  } catch (error) {}
};

export const getOrders = async (
  page: number = 1,
  pageSize: number = 1000
): Promise<IOrderQueryResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: `${constantes.endpoints.pedidos}?sort[0]id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
  };

  try {
    const { data } = await axios.request<IOrderQueryResponse>(request);
    return data;
  } catch (error) {
    throw new Error("Error al consultar los pedidos");
  }
};

export const getOrdersByEmail = async (
  email: string,
  page: number = 1,
  pageSize: number = 1000
): Promise<IOrderQueryResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    url: `${constantes.endpoints.pedidos}?filters[emailCliente]$eq=${email}&sort[0]id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
  };

  try {
    const { data } = await axios.request<IOrderQueryResponse>(request);
    return data;
  } catch (error) {
    throw new Error("Error al consultar los pedidos");
  }
};
