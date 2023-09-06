export interface IOrderDto {
  id: number;
  UID: string;
  emailCliente: string;
  fechaGrabacion: string;
  valorTotal: number;
  estado: string;
  detallePedido: IDetallePedidoDto[];
  direccion: IDireccionPedidoDto;
}

export interface IDetallePedidoDto {
  nombreProducto: string;
  tipo: string;
  urlImagen: string;
  precio: number;
  presentacion: string;
  cantidad: number;
}

export interface IDireccionPedidoDto {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
}

export interface IOrderQueryDto {
  data: IOrderDto[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
