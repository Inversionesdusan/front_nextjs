import { setProductPrices } from "@/domain/helpers/utils";
import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { IPreciosService } from "@/domain/services/PreciosService";
import { useState } from "react";

interface LandingViewModelProps {
  ProductosService: IProductoService;
  PreciosService: IPreciosService;
}

export interface LandingViewModelReturn {
  loadingProductos: boolean;
  productos: IProductoWithPricesDto[];
  getProductos: () => Promise<void>;
  handleOpenModalRegistro: () => void;
  handleOpenModalLogin: () => void;
  openModalRegistro: boolean;
  openModalLogin: boolean;
}

const LandingViewModel = ({
  ProductosService,
  PreciosService,
}: LandingViewModelProps) => {
  const [loadingProductos, setLoadingProductos] = useState<boolean>(true);
  const [productos, setProductos] = useState<IProductoWithPricesDto[]>([]);
  const [openModalRegistro, setOpenModalRegistro] = useState<boolean>(false);
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);

  const getProductos = async () => {
    try {
      setLoadingProductos(true);
      Promise.all([
        ProductosService.getProductos(),
        PreciosService.getPrecioProductos(),
      ]).then((response) => {
        const converProductos = setProductPrices(response[0], response[1]);
        setProductos(converProductos.productosConPrecios);
        setLoadingProductos(false);
      });
    } catch (error) {
      throw new Error("Error al cargar los productos");
    } finally {
      setLoadingProductos(false);
    }
  };

  const handleOpenModalRegistro = () => {
    setOpenModalRegistro(!openModalRegistro);
  };

  const handleOpenModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };

  return {
    loadingProductos,
    getProductos,
    productos,
    openModalRegistro,
    handleOpenModalRegistro,
    openModalLogin,
    handleOpenModalLogin,
  };
};

export default LandingViewModel;
