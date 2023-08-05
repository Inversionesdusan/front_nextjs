import { Meta } from "../commons/MetaResponse";

export interface ISeccionInformacionResponse {
  data: ISeccionInformacionResponseData[];
  meta: Meta;
}

export interface ISeccionInformacionResponseData {
  id: number;
  attributes: IAttributesSeccionInformacion;
}

export interface IAttributesSeccionInformacion {
  titulo: string;
  subtitulo?: string;
  informacion: string;
  estado: string;
  createdAt: string;
  updatedAt: string;
}
