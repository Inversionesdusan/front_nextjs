import { IOrderDto } from "@/domain/models/Dto/IOrderDto";
import { ISaveDataOrder } from "@/domain/models/requests/ISAveDataOrder";

interface IPedidosRepositoryProps {
  PedidosDataSource: {
    saveOrder: (orderData: ISaveDataOrder) => Promise<number>;
  };
}

export interface IPedidosRepositoryReturn {
  saveOrder: (orderData: ISaveDataOrder) => Promise<IOrderDto>;
}

export const PedidosRepository = ({
  PedidosDataSource,
}: IPedidosRepositoryProps) => {
  const saveOrder = async (orderData: ISaveDataOrder): Promise<IOrderDto> => {
    const response = await PedidosDataSource.saveOrder(orderData);
    return {
      ...JSON.parse(JSON.stringify(orderData)),
      id: response,
    };
  };

  return { saveOrder };
};
