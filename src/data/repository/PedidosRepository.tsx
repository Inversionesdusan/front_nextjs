import {
  IDetallePedidoDto,
  IOrderDto,
  IOrderQueryDto,
} from "@/domain/models/Dto/IOrderDto";
import { IOrderQueryParams } from "@/domain/models/forms/IOrderQueryParams";
import { IOrderUpdateRequest } from "@/domain/models/requests/IOrderUpdateRequest";
import { ISaveDataOrder } from "@/domain/models/requests/ISAveDataOrder";
import {
  IOrderQueryResponse,
  IOrderQueryResponseData,
} from "@/domain/models/responses/IOrderQueryResponse";
import { IOrderUpdateResponse } from "@/domain/models/responses/IOrderUpdateResponse";

interface IPedidosRepositoryProps {
  PedidosDataSource: {
    saveOrder: (token: string, orderData: ISaveDataOrder) => Promise<number>;
    getOrders: (
      token: string,
      page: number,
      pageSize: number
    ) => Promise<IOrderQueryResponse>;
    getOrdersByEmail: (
      token: string,
      email: string,
      page: number,
      pageSize: number
    ) => Promise<IOrderQueryResponse>;
    updateOrderData: (
      token: string,
      orderId: number,
      orderData: IOrderUpdateRequest
    ) => Promise<IOrderUpdateResponse>;
    getOrdersByQuery: (
      queryParams: IOrderQueryParams,
      token: string,
      page: number,
      pageSize: number
    ) => Promise<IOrderQueryResponse>;
  };
}

export interface IPedidosRepositoryReturn {
  saveOrder: (token: string, orderData: ISaveDataOrder) => Promise<IOrderDto>;
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

export const PedidosRepository = ({
  PedidosDataSource,
}: IPedidosRepositoryProps) => {
  const saveOrder = async (
    token: string,
    orderData: ISaveDataOrder
  ): Promise<IOrderDto> => {
    console.log("pedidos repository -> ", token, orderData);
    const response = await PedidosDataSource.saveOrder(token, orderData);
    return {
      ...JSON.parse(JSON.stringify(orderData)),
      id: response,
    };
  };

  const getOrders = async (
    token: string,
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    const data = await PedidosDataSource.getOrders(token, page, pageSize);
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
    token: string,
    email: string,
    page: number,
    pageSize: number
  ): Promise<IOrderQueryDto> => {
    const data = await PedidosDataSource.getOrdersByEmail(
      token,
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

  const getOrdersByQuery = async (
    queryParams: IOrderQueryParams,
    token: string,
    page: number = 1,
    pageSize: number = 1000
  ): Promise<IOrderQueryDto> => {
    const data = await PedidosDataSource.getOrdersByQuery(
      queryParams,
      token,
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
        numeroDocumento: order.attributes.numeroDocumento || "0",
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
        datosCliente: {
          nombres: order.attributes.datosCliente.nombres,
          apellidos: order.attributes.datosCliente.apellidos,
          tipoDocumento: order.attributes.datosCliente.tipoDocumento,
          digitoVerificacion: order.attributes.datosCliente.digitoVerificacion,
          telefono: order.attributes.datosCliente.telefono,
        },
      };
      orders.push(newOrderDto);
    });

    return orders;
  };

  return {
    saveOrder,
    getOrders,
    getOrdersByEmail,
    updateOrderData,
    getOrdersByQuery,
  };
};
