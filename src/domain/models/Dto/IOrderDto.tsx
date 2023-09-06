export interface IOrderDto {
  id: number;
  UID: string;
  emailCliente: string;
  fechaGrabacion: string;
  valorTotal: number;
  estado: string;
  detallePedido: IDetallePedidoDto;
  direccion: IDireccionPedidoDto[];
}

interface IDetallePedidoDto {
  nombreProducto: string;
  tipo: string;
  urlImagen: string;
  precio: number;
  presentacion: string;
  cantidad: number;
}

interface IDireccionPedidoDto {
  direccion: string;
  complemento?: string;
  departamento: string;
  ciudad: string;
}
