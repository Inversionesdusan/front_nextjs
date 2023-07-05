import { IProductosRepository } from "../models/repositories/IProductosRepository";

export function ProductosService({
  ProductosRepository,
}: {
  ProductosRepository: IProductosRepository;
}) {
  const getProductos = async () => {
    return (await ProductosRepository.getProductos()).sort((a, b) => {
      return a.orden - b.orden;
    });
  };

  const getProductosLanding = async () => {
    const productos = await ProductosRepository.getProductos();
    const prodLanding = productos
      .filter((prod) => prod.estado === "Activo" && prod.mostrarLanding === "S")
      .sort((a, b) => {
        return a.orden - b.orden;
      });
    console.log("productos landing -> ", prodLanding);
    return prodLanding;
  };

  return {
    getProductos,
    getProductosLanding,
  };
}
