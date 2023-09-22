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
  tipoUsuario: string;
  direccion?: IUserAddressDto;
  direccion_envio?: IUserAddressDto | null;
}

interface IUserAddressDto {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
  barrio?: string;
}

interface IUserShippingAddress extends IUserAddressDto {
  descripcion?: string;
  favorita: boolean;
}
