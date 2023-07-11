import { IProductosResponse } from "../responses/IProductosResponse";

export interface IProductosDataSource {
  ProductosDataSource: {
    GetProductos: () => Promise<IProductosResponse>;
  };
}
