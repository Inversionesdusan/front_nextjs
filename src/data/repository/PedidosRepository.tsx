import {
  IDetallePedidoDto,
  IOrderDto,
  IOrderQueryDto,
} from "@/domain/models/Dto/IOrderDto";
import { IOrderUpdateRequest } from "@/domain/models/requests/IOrderUpdateRequest";
import { ISaveDataOrder } from "@/domain/models/requests/ISAveDataOrder";
import {
  IOrderQueryResponse,
  IOrderQueryResponseData,
} from "@/domain/models/responses/IOrderQueryResponse";
import { IOrderUpdateResponse } from "@/domain/models/responses/IOrderUpdateResponse";

interface IPedidosRepositoryProps {
  PedidosDataSource: {
    saveOrder: (orderData: ISaveDataOrder) => Promise<number>;
    getOrders: (page: number, pageSize: number) => Promise<IOrderQueryResponse>;
    getOrdersByEmail: (
      email: string,
      page: number,
      pageSize: number
    ) => Promise<IOrderQueryResponse>;
    updateOrderData: (
      token: string,
      orderId: number,
      orderData: IOrderUpdateRequest
    ) => Promise<IOrderUpdateResponse>;
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
  updateOrderData: (
    token: string,
    orderId: number,
    orderData: IOrderUpdateRequest
  ) => Promise<IOrderDto>;
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

  const updateOrderData = async (
    token: string,
    orderId: number,
    orderData: IOrderUpdateRequest
  ): Promise<IOrderDto> => {
    const response = await PedidosDataSource.updateOrderData(
      token,
      orderId,
      orderData
    );
    const orders: IOrderQueryResponseData[] = [];
    orders.push(response.data);
    const order = convertDataToDto(orders);
    return order[0];
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
          complemento: order.attributes.direccion.complemento,
          departamento: order.attributes.direccion.departamento,
          ciudad: order.attributes.direccion.ciudad,
          barrio: order.attributes.direccion.barrio,
        },
        direccionEnvio: {
          direccion: order.attributes.direccionEnvio.direccion,
          complemento: order.attributes.direccionEnvio.complemento,
          departamento: order.attributes.direccionEnvio.departamento,
          ciudad: order.attributes.direccionEnvio.ciudad,
          barrio: order.attributes.direccionEnvio.barrio,
        },
        fechaPago: order.attributes.fechaPago,
        fechaRealDespacho: order.attributes.fechaRealDespacho,
        fechaRealEntrega: order.attributes.fechaRealEntrega,
        pagado: order.attributes.pagado,
        transaccionPago: order.attributes.transaccionPago,
        transportadora: order.attributes.transportadora,
        valorFlete: order.attributes.valorFlete,
      };
      orders.push(newOrderDto);
    });

    return orders;
  };

  return { saveOrder, getOrders, getOrdersByEmail, updateOrderData };
};
