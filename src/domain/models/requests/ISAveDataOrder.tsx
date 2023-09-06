export interface ISaveDataOrder {
  uid: string;
  emailCliente: string;
  fechaGrabacion: string;
  valorTotal: number;
  detallePedido: IDetallePedido[];
  direccion: IDireccion;
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
}
