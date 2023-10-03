import { Meta } from "../commons/MetaResponse";
import { IOrderClientData } from "../requests/ISAveDataOrder";

export interface IOrderQueryResponse {
  data: IOrderQueryResponseData[];
  meta: Meta;
}

export interface IOrderQueryResponseData {
  id: number;
  attributes: IOrderQueryResponseAttributes;
}

export interface IOrderQueryResponseAttributes {
  uid: string;
  fechaGrabacion: string;
  fechaEstimadaDespacho?: string;
  fechaRealDespacho?: string;
  fechaEstimadaEntrega?: string;
  fechaRealEntrega?: string;
  valorTotal: number;
  estado: string;
  pagado: string;
  fechaPago?: string;
  transaccionPago?: string;
  direccion: Direccion;
  direccionEnvio: Direccion;
  createdAt: string;
  updatedAt: string;
  emailCliente: string;
  detallePedido: DetallePedido[];
  valorFlete?: number;
  transportadora?: string;
  numeroDocumento: string;
  datosCliente: IOrderClientData;
}

export interface Direccion {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
  barrio?: string;
}

export interface DetallePedido {
  tipo: string;
  precio: number;
  cantidad: number;
  urlImagen: string;
  presentacion: string;
  nombreProducto: string;
}
