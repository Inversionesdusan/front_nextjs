import { IPedidosRepositoryReturn } from "@/data/repository/PedidosRepository";
import { ISaveDataOrder } from "../models/requests/ISAveDataOrder";
import { IOrderDto, IOrderQueryDto } from "../models/Dto/IOrderDto";
import { IOrderUpdateRequest } from "../models/requests/IOrderUpdateRequest";
import { IOrderQueryParams } from "../models/forms/IOrderQueryParams";

interface IPedidosServiceProps {
  PedidosRepository: IPedidosRepositoryReturn;
}

export interface IPedidosService {
  saveOrder: (
    token: string,
    orderData: ISaveDataOrder,
    emailEmpresa: string
  ) => Promise<IOrderDto>;
  getOrders: (
    token: string,
    page: number,
    pageSize: number
  ) => Promise<IOrderQueryDto>;
  getOrdersByEmail: (
    token: string,
    email: string,
    page: number,
    pageSize: number
  ) => Promise<IOrderQueryDto>;
  updateOrderData: (
    token: string,
    orderId: number,
    orderData: IOrderUpdateRequest
  ) => Promise<IOrderDto>;
  getOrdersByQuery: (
    queryParams: IOrderQueryParams,
    token: string,
    page: number,
    pageSize: number
  ) => Promise<IOrderQueryDto>;
}

export const PedidosService = ({ PedidosRepository }: IPedidosServiceProps) => {
  const saveOrder = async (
    token: string,
    orderData: ISaveDataOrder,
    emailEmpresa: string
  ): Promise<IOrderDto> => {
    console.log("pedidos service -> ", token, orderData);
    return await PedidosRepository.saveOrder(token, orderData, emailEmpresa);
  };

  const getOrders = async (
    token: string,
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    return await PedidosRepository.getOrders(token, page, pageSize);
  };

  const getOrdersByEmail = async (
    token: string,
    email: string,
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    return await PedidosRepository.getOrdersByEmail(
      token,
      email,
      page,
      pageSize
    );
  };

  const getOrdersByQuery = async (
    queryParams: IOrderQueryParams,
    token: string,
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    return await PedidosRepository.getOrdersByQuery(
      queryParams,
      token,
      page,
      pageSize
    );
  };

  const updateOrderData = async (
    token: string,
    orderId: number,
    orderData: IOrderUpdateRequest
  ) => {
    return await PedidosRepository.updateOrderData(token, orderId, orderData);
  };

  return {
    saveOrder,
    getOrders,
    getOrdersByEmail,
    updateOrderData,
    getOrdersByQuery,
  };
};
