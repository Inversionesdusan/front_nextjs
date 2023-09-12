export interface IUserDto {
  jwt: string;
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  tipoDocumento?: string;
  numeroDocumento?: string;
  digitoVerificacion?: string;
  blocked: boolean;
  confirmed: boolean;
}
