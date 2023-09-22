import { Meta } from "../commons/MetaResponse";

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
  fechaEstimadaDespacho: any;
  fechaRealDespacho: any;
  fechaEstimadaEntrega: any;
  fechaRealEntrega: any;
  valorTotal: number;
  estado: string;
  pagado: string;
  fechaPago: any;
  transaccionPago: any;
  direccion: Direccion;
  direccionEnvio: Direccion;
  createdAt: string;
  updatedAt: string;
  emailCliente: string;
  detallePedido: DetallePedido[];
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
