import { IProductoDto } from "../Dto/IProductoDto";

export interface IProductoService {
  getProductos: () => Promise<IProductoDto[]>;
  getProductosLanding: () => Promise<IProductoDto[]>;
}
