export interface IClientForm {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  tipoDocumento: string;
  numeroDocumento: string;
  digitoVerificacion: string;
  direccion: string;
  complemento: string;
  departamento: string;
  ciudad: string;
  barrio: string;
}

export const initialClientData: IClientForm = {
  nombres: "",
  apellidos: "",
  email: "",
  telefono: "",
  tipoDocumento: "",
  numeroDocumento: "",
  digitoVerificacion: "",
  direccion: "",
  complemento: "",
  departamento: "",
  ciudad: "",
  barrio: "",
};
