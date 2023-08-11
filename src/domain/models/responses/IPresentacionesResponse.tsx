import { Meta } from "../commons/MetaResponse";

export interface IPresentacionesResponse {
  data: IPresentacionesResponseData[];
  meta: Meta;
}

export interface IPresentacionesResponseData {
  id: number;
  attributes: IPresentacionesAttributes;
}

export interface IPresentacionesAttributes {
  descripcion: string;
  createdAt: string;
  updatedAt: string;
  maneja_inventario: string;
}
