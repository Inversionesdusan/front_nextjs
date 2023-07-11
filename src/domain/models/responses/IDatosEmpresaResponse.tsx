import { IImagenResponse } from "../commons/IImagenResponse";
import { Meta } from "../commons/MetaResponse";

export interface IDatosEmpresaResponse {
  data: IDatosEmpresaResponseData;
  meta: Meta;
}

export interface IDatosEmpresaResponseData {
  id: number;
  attributes: DatosEmpresaResponseAttributes;
}

export interface DatosEmpresaResponseAttributes {
  nombre_empresa: string;
  direccion_contacto: string;
  telefono_fijo: string;
  telefono_celular: string;
  email: string;
  ciudad: string;
  departamento: string;
  nombre_contacto: string;
  imagen_contactenos?: IImagenResponse;
  createdAt: string;
  updatedAt: string;
}
