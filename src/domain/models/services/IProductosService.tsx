import { IProductoDto } from "../Dto/IProductoDto";

export interface IProductoService {
  getProductos: () => Promise<IProductoDto[]>;
}
