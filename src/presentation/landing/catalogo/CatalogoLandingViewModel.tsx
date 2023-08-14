import { IProductoDto } from "@/domain/models/Dto/IProductoDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { useState } from "react";

const CatalogoLandingViewModel = ({
  ProductosService,
}: {
  ProductosService: IProductoService;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productos, setProductos] = useState<IProductoDto[]>([]);

  const getProductos = async () => {
    setLoading(true);
    const productos = await ProductosService.getProductosLanding();
    setProductos(productos);
    setLoading(false);
  };

  const getPosition = (
    index: number,
    downXl: boolean
  ): "center" | "topLeft" | "topRigth" | "bottomLeft" | "bottomRigth" => {
    if (downXl) return "center";
    if (index === 0) return "topLeft";
    if (index === 1 || index === 4) return "center";
    if (index === 2) return "topRigth";
    if (index === 3) return "bottomLeft";
    if (index === 5) return "bottomRigth";
    return "center";
  };

  return {
    loading,
    getProductos,
    productos,
    getPosition,
  };
};

export default CatalogoLandingViewModel;
