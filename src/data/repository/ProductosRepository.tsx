import { IProductoDto } from "@/domain/models/Dto/IProductoDto";
import { IProductosDataSource } from "@/domain/models/dataSources/IProductosDataSource";

export function ProductosRepository({
  ProductosDataSource,
}: IProductosDataSource) {
  const getProductos = async (): Promise<IProductoDto[]> => {
    const response = await ProductosDataSource.GetProductos();
    let productos: IProductoDto[] = [];
    if (response.meta.pagination.total === 0) return productos;
    productos = response.data.map((producto) => {
      const finalUlr =
        producto.attributes.imagen.data?.attributes.formats.thumbnail.url ||
        producto.attributes.imagen.data?.attributes.url;
      const newProducto: IProductoDto = {
        id: producto.id,
        nombreProducto: producto.attributes.nombreProducto,
        descripcion: producto.attributes.descripcion,
        composicion: producto.attributes.composicion,
        urlVideo: producto.attributes.urlVideo,
        manejaInventario: producto.attributes.manejaInventario,
        cantidadInventario: producto.attributes?.cantidadInventario || 0,
        estado: producto.attributes.estado,
        mostrarLanding: producto.attributes.mostrarLanding,
        orden: producto.attributes.orden || 0,
        imagen: {
          url: producto.attributes.imagen.data?.attributes.url || finalUlr,
          urlSmall:
            producto.attributes.imagen.data?.attributes.formats?.small?.url ||
            finalUlr,
          urlMedium:
            producto.attributes.imagen.data?.attributes.formats?.medium?.url ||
            finalUlr,
          urlThumbnail:
            producto.attributes.imagen.data?.attributes.formats?.thumbnail
              ?.url || finalUlr,
        },
        tipo: {
          id: producto.attributes.tipos_fertilizante.data.id,
          descripcion:
            producto.attributes.tipos_fertilizante.data.attributes.descripcion,
        },
      };
      return newProducto;
    });

    return productos;
  };

  return {
    getProductos,
  };
}
