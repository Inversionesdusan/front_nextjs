import { IProductoDto } from "../Dto/IProductoDto";

export interface ICatalogoLandingViewModel {
  loading: boolean;
  getProductos: () => Promise<void>;
  productos: IProductoDto[];
  getPosition: (
    index: number,
    downXl: boolean
  ) => "center" | "topLeft" | "topRigth" | "bottomLeft" | "bottomRigth";
}
