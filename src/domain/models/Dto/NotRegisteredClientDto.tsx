export interface NotRegisteredClientDto {
  id: number;
  email: string;
  nombresCliente?: string;
  apellidosCliente?: string;
  telefonoCliente?: string;
  direccion: string;
  complementoDireccion?: string;
  departamento: string;
  ciudad: string;
}
