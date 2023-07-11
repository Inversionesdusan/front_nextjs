export interface ISaveDataContactRequest {
  data: {
    nombre_cliente: string;
    email_cliente: string;
    nro_telefono: string;
    asunto: string;
    mensaje: string;
  };
}
