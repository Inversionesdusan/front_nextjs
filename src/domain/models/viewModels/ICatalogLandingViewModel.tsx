import { IProductoDto } from "../Dto/IProductoDto";

export interface ICatalogoLandingViewModel {
  loading: boolean;
  getProductos: () => Promise<void>;
  productos: IProductoDto[];
}
