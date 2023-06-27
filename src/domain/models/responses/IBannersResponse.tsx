import { Meta } from "../commons/MetaResponse";
import { IImagenResponse } from "../commons/IImagenResponse";

export interface IBannersResponse {
  data: IBannersResponseData[];
  meta: Meta;
}

export interface IBannersResponseData {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  titulo: string;
  descripcion: string;
  orden: number;
  tipo: string;
  estado: string;
  createdAt: string;
  updatedAt: string;
  imagen: IImagenResponse;
}
