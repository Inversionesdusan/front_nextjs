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

  return {
    loading,
    getProductos,
    productos,
  };
};

export default CatalogoLandingViewModel;
