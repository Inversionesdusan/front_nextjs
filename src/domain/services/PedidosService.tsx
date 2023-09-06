import { IPedidosRepositoryReturn } from "@/data/repository/PedidosRepository";
import { ISaveDataOrder } from "../models/requests/ISAveDataOrder";
import { IOrderDto } from "../models/Dto/IOrderDto";

interface IPedidosServiceProps {
  PedidosRepository: IPedidosRepositoryReturn;
}

export interface IPedidosService {
  saveOrder: (orderData: ISaveDataOrder) => Promise<IOrderDto>;
}

export const PedidosService = ({ PedidosRepository }: IPedidosServiceProps) => {
  const saveOrder = async (orderData: ISaveDataOrder): Promise<IOrderDto> => {
    return await PedidosRepository.saveOrder(orderData);
  };

  return {
    saveOrder,
  };
};
