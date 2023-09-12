import { IOrderDto } from "@/domain/models/Dto/IOrderDto";
import { Pagination } from "@/domain/models/commons/MetaResponse";
import { IPedidosService } from "@/domain/services/PedidosService";
import useAuthStore from "@/domain/store/useAuthStore";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface OrderListViewModelProps {
  PedidosService: IPedidosService;
}

export interface IOrderListViewModel {
  getPedidos: (
    email: string,
    page?: number,
    pageSize?: number
  ) => Promise<void>;
  loadingPedidos: boolean;
  pedidos: IOrderDto[];
  paginationData: Pagination;
  handleChangeSelect: (event: SelectChangeEvent) => void;
  handlePaginationChange: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void;
}

const OrderListViewModel = ({ PedidosService }: OrderListViewModelProps) => {
  const [loadingPedidos, setLoadingPedidos] = useState<boolean>(true);
  const [pedidos, setPedidos] = useState<IOrderDto[]>([]);
  const [paginationData, setPaginationData] = useState<Pagination>({
    page: 1,
    pageSize: 5,
    pageCount: 0,
    total: 0,
  });
  const { authData } = useAuthStore();

  const getPedidos = async (
    email: string,
    page?: number,
    pageSize?: number
  ): Promise<void> => {
    setLoadingPedidos(true);
    try {
      const response = await PedidosService.getOrdersByEmail(
        email,
        page ? page : paginationData.page,
        pageSize ? pageSize : paginationData.pageSize
      );
      setPedidos(response.data);
      setPaginationData({ ...response.meta });
    } catch (error) {
      setPedidos([]);
    } finally {
      setLoadingPedidos(false);
    }
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    const pageSize = parseInt(event.target.value);
    setPaginationData({ ...paginationData, page: 1, pageSize });
    getPedidos(authData.user.email, 1, pageSize);
  };

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPaginationData({ ...paginationData, page: value });
    getPedidos(authData.user.email, value, paginationData.pageSize);
  };

  return {
    getPedidos,
    loadingPedidos,
    pedidos,
    paginationData,
    handleChangeSelect,
    handlePaginationChange,
  };
};

export default OrderListViewModel;
