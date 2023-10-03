import { Meta } from "../commons/MetaResponse";
import { IOrderClientData } from "../requests/ISAveDataOrder";

export interface ICreateOrderResponse {
  data: IDataOrderResponse;
  meta: Meta;
}

export interface IDataOrderResponse {
  id: number;
  attributes: IDataAttributesOrderResponse;
}

export interface IDataAttributesOrderResponse {
  uid: string;
  fechaGrabacion: Date;
  fechaEstimadaDespacho?: Date;
  fechaRealDespacho?: Date;
  fechaEstimadaEntrega?: Date;
  fechaRealEntrega?: Date;
  valorTotal: number;
  estado: string;
  pagado: string;
  fechaPago?: Date;
  transaccionPago?: string;
  direccion: IDireccionResponse;
  createdAt: string;
  updatedAt: string;
  emailCliente: string;
  detallePedido: IDetallePedidoResponse[];
  numeroDocumento: string;
  datosCliente: IOrderClientData;
}

export interface IDireccionResponse {
  direccion: string;
  complemento?: string;
  ciudad: string;
  departamento: string;
  barrio?: string;
}

export interface IDetallePedidoResponse {
  tipo: string;
  precio: number;
  cantidad: string;
  urlImagen: string;
  nombreProducto: string;
}
