import { IOrderDto, IOrderQueryDto } from "@/domain/models/Dto/IOrderDto";
import { Pagination } from "@/domain/models/commons/MetaResponse";
import { IPedidosService } from "@/domain/services/PedidosService";
import useAuthStore from "@/domain/store/useAuthStore";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { initialOrdenParms } from "../../domain/models/forms/IOrderQueryParams";
import { IOrderQueryParams } from "../../domain/models/forms/IOrderQueryParams";

interface OrderListViewModelProps {
  PedidosService: IPedidosService;
}

export interface IOrderListViewModel {
  getPedidos: (
    tipoUsuario: string,
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
  formQueryParams: UseFormReturn<IOrderQueryParams, any, undefined>;
  resetForm: () => void;
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
    tipoUsuario: string,
    email?: string,
    page?: number,
    pageSize?: number
  ): Promise<void> => {
    console.log(tipoUsuario, email, page, pageSize);
    setLoadingPedidos(true);
    try {
      let response: IOrderQueryDto;
      if (tipoUsuario === "Cliente") {
        console.log("consulta cliente");
        response = await PedidosService.getOrdersByEmail(
          authData.token,
          email!,
          page ? page : paginationData.page,
          pageSize ? pageSize : paginationData.pageSize
        );
        console.log("respuesta cliente -> ", response);
      } else {
        console.log("consulta Admin");
        const values = formQueryParams.getValues();
        console.log("valores formulario -> ", values);
        response = await PedidosService.getOrdersByQuery(
          {
            numeroPedido: values.numeroPedido,
            numeroDocumento: values.numeroDocumento,
            fechaInicial: values.fechaInicial,
            fechaFinal: values.fechaFinal,
          },
          authData.token,
          page ? page : paginationData.page,
          pageSize ? pageSize : paginationData.pageSize
        );
        console.log("respuesta admin -> ", response);
      }
      setPedidos(response.data);
      setPaginationData({ ...response.meta });
    } catch (error) {
      console.log("errores -> ", error);
      setPedidos([]);
    } finally {
      setLoadingPedidos(false);
    }
  };

  const formQueryParams = useForm<IOrderQueryParams>({
    defaultValues: { ...initialOrdenParms },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });

  const handleChangeSelect = (event: SelectChangeEvent) => {
    const pageSize = parseInt(event.target.value);
    setPaginationData({ ...paginationData, page: 1, pageSize });
    getPedidos(authData.user.tipoUsuario, authData.user.email, 1, pageSize);
  };

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPaginationData({ ...paginationData, page: value });
    getPedidos(
      authData.user.tipoUsuario,
      authData.user.email,
      value,
      paginationData.pageSize
    );
  };

  const resetForm = () => {
    console.log("reset form -> ", initialOrdenParms);
    formQueryParams.reset({
      ...initialOrdenParms,
    });
    getPedidos(authData.user.tipoUsuario, authData.user.email);
  };

  return {
    getPedidos,
    loadingPedidos,
    pedidos,
    paginationData,
    handleChangeSelect,
    handlePaginationChange,
    formQueryParams,
    resetForm,
  };
};

export default OrderListViewModel;
