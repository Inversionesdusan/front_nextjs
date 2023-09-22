export interface IClientDataQueryResponse {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  nombres: string;
  apellidos: string;
  tipo_documento?: string;
  numero_documento?: string;
  digito_verificacion?: string;
  telefono: string;
  createdAt: string;
  updatedAt: string;
  tipo_usuario?: string;
  direccion?: IClientDataAddressResponse;
  direccion_envio?: IClientDataAddressResponse | null;
}

export interface IClientDataAddressResponse {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
  barrio?: string;
}

export interface IClientDataShippingAddressResponse
  extends IClientDataAddressResponse {
  descripcion?: string;
  favorita: boolean;
}
