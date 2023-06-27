import { IProductoDto } from "@/domain/models/Dto/IProductoDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import React, { useEffect, useState } from "react";

const CatalogoLandingViewModel = ({
  ProductosService,
}: {
  ProductosService: IProductoService;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productos, setProductos] = useState<IProductoDto[]>([]);

  const getProductos = async () => {
    setLoading(true);
    const productos = await ProductosService.getProductos();
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
