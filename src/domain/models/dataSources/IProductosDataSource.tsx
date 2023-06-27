import { IProductosResponse } from "../responses/IProductosResponse";

export interface IProductosDataSource {
  ProductosDataSource: {
    getProductos: () => Promise<IProductosResponse>;
  };
}
