import { IPedidosRepositoryReturn } from "@/data/repository/PedidosRepository";
import { ISaveDataOrder } from "../models/requests/ISAveDataOrder";
import { IOrderDto, IOrderQueryDto } from "../models/Dto/IOrderDto";

interface IPedidosServiceProps {
  PedidosRepository: IPedidosRepositoryReturn;
}

export interface IPedidosService {
  saveOrder: (orderData: ISaveDataOrder) => Promise<IOrderDto>;
  getOrders: (page: number, pageSize: number) => Promise<IOrderQueryDto>;
  getOrdersByEmail: (
    email: string,
    page: number,
    pageSize: number
  ) => Promise<IOrderQueryDto>;
}

export const PedidosService = ({ PedidosRepository }: IPedidosServiceProps) => {
  const saveOrder = async (orderData: ISaveDataOrder): Promise<IOrderDto> => {
    return await PedidosRepository.saveOrder(orderData);
  };

  const getOrders = async (
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    return await PedidosRepository.getOrders(page, pageSize);
  };

  const getOrdersByEmail = async (
    email: string,
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    return await PedidosRepository.getOrdersByEmail(email, page, pageSize);
  };

  return {
    saveOrder,
    getOrders,
    getOrdersByEmail,
  };
};
