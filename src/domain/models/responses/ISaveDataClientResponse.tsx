export interface ISaveDataClientResponse {
  data: {
    id: number;
    attributes: {
      email_cliente: string;
      nro_telefono?: string;
      asunto: string;
      mensaje: string;
      createdAt: string;
      updatedAt: string;
      nombre_cliente: string;
    };
  };
  meta?: any;
}
