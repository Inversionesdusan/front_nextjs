import { IImagenResponse } from "../commons/IImagenResponse";
import { Meta } from "../commons/MetaResponse";

export interface IProductosResponse {
  data: IProductosReponseData[];
  meta: Meta;
}

export interface IProductosReponseData {
  id: number;
  attributes: AttributesProductosResponse;
}

export interface AttributesProductosResponse {
  nombreProducto: string;
  descripcion?: string;
  composicion: string;
  createdAt: string;
  updatedAt: string;
  urlVideo: any;
  manejaInventario: string;
  cantidadInventario?: number;
  estado: string;
  mostrarLanding: string;
  orden: number;
  tipos_fertilizante: ITiposFertilizantesResponse;
  imagen: IImagenResponse;
  ventajas: string;
}

export interface ITiposFertilizantesResponse {
  data: TiposFertilizantesResponseData;
}

export interface TiposFertilizantesResponseData {
  id: number;
  attributes: ITiposFertiizantesReponseAttributes;
}

export interface ITiposFertiizantesReponseAttributes {
  descripcion: string;
  estado: string;
  createdAt: string;
  updatedAt: string;
}
