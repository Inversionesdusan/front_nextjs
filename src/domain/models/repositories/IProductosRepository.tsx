import { IProductoDto } from "../Dto/IProductoDto";

export interface IProductosRepository {
  getProductos: () => Promise<IProductoDto[]>;
}
