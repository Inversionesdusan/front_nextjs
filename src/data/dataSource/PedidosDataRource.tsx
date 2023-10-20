import { constantes } from "@/domain/constants";
import { IOrderQueryParams } from "@/domain/models/forms/IOrderQueryParams";
import { IOrderUpdateRequest } from "@/domain/models/requests/IOrderUpdateRequest";
import { ISaveDataOrder } from "@/domain/models/requests/ISAveDataOrder";
import { ICreateOrderResponse } from "@/domain/models/responses/ICreateOrderResponse";
import { IOrderQueryResponse } from "@/domain/models/responses/IOrderQueryResponse";
import { IOrderUpdateResponse } from "@/domain/models/responses/IOrderUpdateResponse";
import axios, { AxiosRequestConfig } from "axios";

export const saveOrder = async (
  token: string,
  orderData: ISaveDataOrder,
  emailEmpresa: string
) => {
  console.log("pedidos data source ->", token, orderData);
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.pedidos,
    data: { data: { ...orderData }, emailEmpresa },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.request<ICreateOrderResponse>(request);
    if (data.data.id && data.data.id > 0) return data.data.id;
    return -1;
  } catch (error) {}
};

export const getOrders = async (
  token: string,
  page: number = 1,
  pageSize: number = 1000
): Promise<IOrderQueryResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: constantes.paths.BASE_URL_API,
    url: `${constantes.endpoints.pedidos}?sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.request<IOrderQueryResponse>(request);
    return data;
  } catch (error) {
    throw new Error("Error al consultar los pedidos");
  }
};

export const getOrdersByEmail = async (
  token: string,
  email: string,
  page: number = 1,
  pageSize: number = 1000
): Promise<IOrderQueryResponse> => {
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: constantes.paths.BASE_URL_API,
    url: `${constantes.endpoints.pedidos}?filters[emailCliente][$eq]=${email}&sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.request<IOrderQueryResponse>(request);
    return data;
  } catch (error) {
    throw new Error("Error al consultar los pedidos");
  }
};

export const getOrdersByQuery = async (
  queryParams: IOrderQueryParams,
  token: string,
  page: number = 1,
  pageSize: number = 1000
) => {
  console.log("getOrdersByQuery -> ", queryParams);
  let query =
    queryParams.numeroPedido && queryParams.numeroPedido > 0
      ? `filters[id][$eq]=${queryParams.numeroPedido}`
      : "";
  if (queryParams.numeroDocumento && queryParams.numeroDocumento > 0) {
    query.length > 0 && (query += "&");
    query += `filters[numeroDocumento][$eq]=${queryParams.numeroDocumento}`;
  }

  if (queryParams.fechaInicial) {
    query.length > 0 && (query += "&");
    query += `filters[fechaGrabacion][$gte]=${queryParams.fechaInicial.format(
      "YYYY-MM-DD"
    )}`;
  }

  if (queryParams.fechaFinal) {
    query.length > 0 && (query += "&");
    query += `filters[fechaGrabacion][$lt]=${queryParams.fechaFinal
      .add(1, "day")
      .format("YYYY-MM-DD")}`;
  }
  query.length > 0 && (query += "&");
  console.log("query -> ", query);
  const request: AxiosRequestConfig = {
    method: "GET",
    baseURL: constantes.paths.BASE_URL_API,
    url: `${constantes.endpoints.pedidos}?${query}sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.request<IOrderQueryResponse>(request);
    return data;
  } catch (error) {
    throw new Error("Error al consultar los pedidos");
  }
};

export const updateOrderData = async (
  token: string,
  orderId: number,
  orderData: IOrderUpdateRequest
) => {
  const request: AxiosRequestConfig = {
    method: "PUT",
    baseURL: constantes.paths.BASE_URL_API,
    url: `${constantes.endpoints.pedidos}/${orderId}`,
    data: { ...orderData },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.request<IOrderUpdateResponse>(request);
    return data;
  } catch (error) {
    throw new Error("Error al actualizar el pedido");
  }
};
