import { CartItem } from "../store/CarItem";
import { IPresentacionDto } from "./IPresentacionDto";

export interface IProductoDto {
  id: number;
  nombreProducto: string;
  descripcion: string;
  composicion?: string;
  urlVideo?: string;
  manejaInventario: string;
  cantidadInventario: number;
  estado: string;
  mostrarLanding: string;
  orden: number;
  imagen: {
    url?: string;
    urlSmall?: string;
    urlMedium?: string;
    urlThumbnail?: string;
  };
  tipo: {
    id: number;
    descripcion: string;
  };
  ventajas: string;
}

export interface IProductoWithPricesDto extends IProductoDto {
  precios: IPrecioProd[];
}

export interface IPrecioProd {
  idPresentacion: number;
  descripcionPres: string;
  valor: number;
  disponible: number;
}

export interface CartProduct extends IProductoWithPricesDto {
  quantity?: CartItem;
}

export interface ProductoPedidos extends IProductoWithPricesDto {
  quantity?: CartItem;
  presentaciones: IPresentacionDto[];
}
