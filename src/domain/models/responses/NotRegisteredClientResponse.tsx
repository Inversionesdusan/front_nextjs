import { Meta } from "../commons/MetaResponse";

export interface NotRegisteredClientResponse {
  data: NotRegisteredClientResponseData;
  meta: Meta;
}

export interface NotRegisteredClientResponseData {
  id: number;
  attributes: NotRegisteredClientResponseAttributes;
}

export interface NotRegisteredClientResponseAttributes {
  email: string;
  nombresCliente?: string;
  apellidosCliente?: string;
  telefonoCliente?: string;
  direccion: string;
  departamento: string;
  ciudad: string;
  complementoDireccion?: string;
  createdAt: string;
  updatedAt: string;
}
