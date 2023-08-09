import { IPrecioProductosDto } from "@/domain/models/Dto/IPrecioProductosDto";
import { IPrecioProductoResponse } from "@/domain/models/responses/IPrecioProductoResponse";

interface IPreciosRepositoryProps {
  PreciosDataSource: {
    GetPrecioProductos: () => Promise<IPrecioProductoResponse>;
  };
}

export interface IPreciosRepositoryReturn {
  getPreciosProductos: () => Promise<IPrecioProductosDto[]>;
}

export const PreciosRepository = ({
  PreciosDataSource,
}: IPreciosRepositoryProps): IPreciosRepositoryReturn => {
  const getPreciosProductos = async (): Promise<IPrecioProductosDto[]> => {
    const response = await PreciosDataSource.GetPrecioProductos();
    let precios: IPrecioProductosDto[] = [];
    response.data.map((precio) => {
      const newPrecio: IPrecioProductosDto = {
        idProducto: precio.attributes.producto.data.id,
        nombreProducto:
          precio.attributes.producto.data.attributes.nombreProducto,
        manejaInventario:
          precio.attributes.producto.data.attributes.manejaInventario,
        cantidadInventario:
          precio.attributes.producto.data.attributes.cantidadInventario || 0,
        idPresentacion: precio.attributes.presentacion.data.id,
        descripcionPres:
          precio.attributes.presentacion.data.attributes.descripcion,
        valor: precio.attributes.valor,
      };

      precios.push(newPrecio);
    });

    return precios;
  };

  return {
    getPreciosProductos,
  };
};
