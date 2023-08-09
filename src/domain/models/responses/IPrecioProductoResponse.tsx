import { Meta } from "../commons/MetaResponse";

export interface IPrecioProductoResponse {
  data: IPrecioProductoResponseData[];
  meta: Meta;
}

export interface IPrecioProductoResponseData {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  valor: number;
  createdAt: string;
  updatedAt: string;
  producto: Producto;
  presentacion: Presentacion;
}

export interface Producto {
  data: ProductoData;
}

export interface ProductoData {
  id: number;
  attributes: ProductoDataAttributes;
}

export interface ProductoDataAttributes {
  nombreProducto: string;
  descripcion: string;
  composicion: string;
  urlVideo: any;
  manejaInventario: string;
  cantidadInventario?: number;
  estado: string;
  mostrarLanding: string;
  orden: number;
  createdAt: string;
  updatedAt: string;
}

export interface Presentacion {
  data: PresentacionData;
}

export interface PresentacionData {
  id: number;
  attributes: PresentacionDataAtributes;
}

export interface PresentacionDataAtributes {
  descripcion: string;
  createdAt: string;
  updatedAt: string;
}
