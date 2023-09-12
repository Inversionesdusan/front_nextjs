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
}
