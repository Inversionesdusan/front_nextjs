export interface OrderFormValues {
  nombresCliente: string;
  apellidosCliente: string;
  email: string;
  nroTelefono: string;
  direccionEnvio: string;
  departamento: string;
  ciudad: string;
}

export const initialFormData: OrderFormValues = {
  nombresCliente: "",
  apellidosCliente: "",
  email: "",
  nroTelefono: "",
  direccionEnvio: "",
  departamento: "",
  ciudad: "",
};
