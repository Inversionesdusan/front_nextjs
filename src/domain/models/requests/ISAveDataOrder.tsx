export interface ISaveDataOrder {
  uid: string;
  emailCliente: string;
  numeroDocumento: string;
  fechaGrabacion: string;
  valorTotal: number;
  detallePedido: IDetallePedido[];
  direccion: IDireccion;
  direccionEnvio: IDireccion;
  datosCliente: IOrderClientData;
}

export interface IDetallePedido {
  nombreProducto: string;
  tipo: string;
  urlImagen: string;
  precio: number;
  presentacion: string;
  cantidad: number;
}

export interface IDireccion {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
  barrio?: string;
}

export interface IOrderClientData {
  nombres?: string;
  apellidos?: string;
  tipoDocumento?: string;
}
