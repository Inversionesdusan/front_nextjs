export interface OrderFormValues {
  nombresCliente: string;
  apellidosCliente: string;
  email: string;
  nroTelefono: string;
  tipoDocumento: string;
  numeroDocumento: string;
  digitoVerificacion?: string;
  direccionCliente: string;
  complementoCliente?: string;
  departamentoCliente: string;
  ciudadCliente: string;
  barrioCliente?: string;
  usarEnvio: string;
  direccionEnvio: string;
  complementoEnvio?: string;
  departamentoEnvio: string;
  ciudadEnvio: string;
  barrioEnvio?: string;
}

export const initialFormData: OrderFormValues = {
  nombresCliente: "",
  apellidosCliente: "",
  email: "",
  nroTelefono: "",
  tipoDocumento: "",
  numeroDocumento: "",
  digitoVerificacion: "",
  direccionCliente: "",
  complementoCliente: "",
  departamentoCliente: "",
  ciudadCliente: "",
  barrioCliente: "",
  usarEnvio: "S",
  direccionEnvio: "",
  complementoEnvio: "",
  departamentoEnvio: "",
  ciudadEnvio: "",
  barrioEnvio: "",
};
