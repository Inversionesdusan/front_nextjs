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
}
