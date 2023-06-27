import { IProductosRepository } from "../models/repositories/IProductosRepository";

export function ProductosService({
  ProductosRepository,
}: {
  ProductosRepository: IProductosRepository;
}) {
  const getProductos = async () => {
    return await ProductosRepository.getProductos();
  };

  return {
    getProductos,
  };
}
