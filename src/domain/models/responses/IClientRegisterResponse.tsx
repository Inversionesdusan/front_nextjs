import { IClientDataAddressResponse } from "./IClientDataQueryResponse";

export interface IClientRegisterResponse {
  jwt: string;
  user: {
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
    createdAt: Date;
    updatedAt: Date;
    tipo_usuario?: string;
    direccion: IClientDataAddressResponse;
    direccion_envio?: IClientDataAddressResponse;
  };
}
