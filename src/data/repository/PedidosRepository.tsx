import {
  IDetallePedidoDto,
  IOrderDto,
  IOrderQueryDto,
} from "@/domain/models/Dto/IOrderDto";
import { ISaveDataOrder } from "@/domain/models/requests/ISAveDataOrder";
import {
  IOrderQueryResponse,
  IOrderQueryResponseData,
} from "@/domain/models/responses/IOrderQueryResponse";

interface IPedidosRepositoryProps {
  PedidosDataSource: {
    saveOrder: (orderData: ISaveDataOrder) => Promise<number>;
    getOrders: (page: number, pageSize: number) => Promise<IOrderQueryResponse>;
    getOrdersByEmail: (
      email: string,
      page: number,
      pageSize: number
    ) => Promise<IOrderQueryResponse>;
  };
}

export interface IPedidosRepositoryReturn {
  saveOrder: (orderData: ISaveDataOrder) => Promise<IOrderDto>;
  getOrders: (page: number, pageSize: number) => Promise<IOrderQueryDto>;
  getOrdersByEmail: (
    email: string,
    page: number,
    pageSize: number
  ) => Promise<IOrderQueryDto>;
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

  const getOrders = async (
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    const data = await PedidosDataSource.getOrders(page, pageSize);
    const newIOrderQueryDto: IOrderQueryDto = {
      data: convertDataToDto(data.data),
      meta: {
        page: data.meta.pagination.page,
        pageSize: data.meta.pagination.pageSize,
        pageCount: data.meta.pagination.pageCount,
        total: data.meta.pagination.total,
      },
    };
    return newIOrderQueryDto;
  };

  const getOrdersByEmail = async (
    email: string,
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    const data = await PedidosDataSource.getOrdersByEmail(
      email,
      page,
      pageSize
    );
    const newIOrderQueryDto: IOrderQueryDto = {
      data: convertDataToDto(data.data),
      meta: {
        page: data.meta.pagination.page,
        pageSize: data.meta.pagination.pageSize,
        pageCount: data.meta.pagination.pageCount,
        total: data.meta.pagination.total,
      },
    };
    return newIOrderQueryDto;
  };

  const convertDataToDto = (data: IOrderQueryResponseData[]): IOrderDto[] => {
    const orders: IOrderDto[] = [];
    data.forEach((order) => {
      const registros: IDetallePedidoDto[] = [];
      order.attributes.detallePedido.forEach((registro) => {
        const newDetallePedido: IDetallePedidoDto = {
          nombreProducto: registro.nombreProducto,
          tipo: registro.tipo,
          urlImagen: registro.urlImagen,
          precio: registro.precio,
          presentacion: registro.presentacion,
          cantidad: registro.cantidad,
        };
        registros.push(newDetallePedido);
      });

      const newOrderDto: IOrderDto = {
        id: order.id,
        UID: order.attributes.uid,
        emailCliente: order.attributes.emailCliente,
        fechaGrabacion: order.attributes.fechaGrabacion,
        valorTotal: order.attributes.valorTotal,
        estado: order.attributes.estado,
        detallePedido: [...registros],
        direccion: {
          direccion: order.attributes.direccion.direccion,
          departamento: order.attributes.direccion.departamento,
          ciudad: order.attributes.direccion.ciudad,
          complemento: "",
        },
      };
      orders.push(newOrderDto);
    });

    return orders;
  };

  return { saveOrder, getOrders, getOrdersByEmail };
};
