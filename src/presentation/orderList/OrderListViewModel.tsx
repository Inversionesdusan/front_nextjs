import { IOrderDto } from "@/domain/models/Dto/IOrderDto";
import { Pagination } from "@/domain/models/commons/MetaResponse";
import { IPedidosService } from "@/domain/services/PedidosService";
import { useState } from "react";

interface OrderListViewModelProps {
  PedidosService: IPedidosService;
}

export interface IOrderListViewModel {
  getPedidos: () => Promise<void>;
}

const OrderListViewModel = ({ PedidosService }: OrderListViewModelProps) => {
  const [loadingPedidos, setLoadingPedidos] = useState<boolean>(true);
  const [pedidos, setPedidos] = useState<IOrderDto[]>([]);
  const [paginationData, setPaginationData] = useState<Pagination>({
    page: 1,
    pageSize: 10,
    pageCount: 0,
    total: 0,
  });

  const getPedidos = async (): Promise<void> => {
    setLoadingPedidos(true);
    try {
      const response = await PedidosService.getOrders(
        paginationData.page,
        paginationData.pageSize
      );
      setPedidos(response.data);
      setPaginationData({ ...response.meta });
    } catch (error) {
      setPedidos([]);
    } finally {
      setLoadingPedidos(false);
    }
  };

  return { getPedidos };
};

export default OrderListViewModel;
