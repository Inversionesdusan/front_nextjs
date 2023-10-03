import { IOrderClientData } from "../requests/ISAveDataOrder";

export interface IOrderDto {
  id: number;
  UID: string;
  emailCliente: string;
  fechaGrabacion: string;
  valorTotal: number;
  estado: string;
  detallePedido: IDetallePedidoDto[];
  direccion: IDireccionPedidoDto;
  direccionEnvio: IDireccionPedidoDto;
  pagado?: string;
  fechaPago?: string;
  transaccionPago?: string;
  fechaRealDespacho?: string;
  fechaRealEntrega?: string;
  valorFlete?: number;
  transportadora?: string;
  numeroDocumento: string;
  datosCliente: IOrderClientData;
}

export interface IDetallePedidoDto {
  nombreProducto: string;
  tipo: string;
  urlImagen: string;
  precio: number;
  presentacion: string;
  cantidad: number;
}

export interface IDireccionPedidoDto {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
  barrio?: string;
}

export interface IOrderQueryDto {
  data: IOrderDto[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
