export interface IClientUpdateRequest {
  nombres?: string;
  apellidos?: string;
  tipo_documento?: string;
  numero_documento?: string;
  digito_verificacion?: string;
  telefono?: string;
  tipo_usuario?: string;
  direccion?: IClientUpdateAddress;
  direccion_envio?: IClientUpdateAddress | null;
}

interface IClientUpdateAddress {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
  barrio?: string;
}
