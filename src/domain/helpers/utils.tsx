import { IPrecioProductosDto } from "../models/Dto/IPrecioProductosDto";
import { IPresentacionDto } from "../models/Dto/IPresentacionDto";
import {
  IPrecioProd,
  IProductoDto,
  IProductoWithPricesDto,
  ProductoPedidos,
} from "../models/Dto/IProductoDto";
import { TipoProductoDto } from "../models/Dto/TipoProductoDto";
import { CartItem } from "../models/store/CarItem";

export const removeAccents = (text: string): string => {
  const accentsMap: { [key: string]: string } = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    ñ: "n",
    Ñ: "N",
    // Puedes agregar más pares de acentos aquí si es necesario
  };

  return text.replace(/[áéíóúÁÉÍÓÚñÑ]/g, (match) => accentsMap[match]);
};

export const setProductPrices = (
  productosSinPrecios: IProductoDto[],
  precios: IPrecioProductosDto[]
): {
  productosConPrecios: IProductoWithPricesDto[];
  tipos: TipoProductoDto[];
} => {
  const tipos: TipoProductoDto[] = [];
  const productosConPrecios = productosSinPrecios.map((producto) => {
    if (tipos.findIndex((tp) => tp.tipoProductoId === producto.tipo.id) < 0) {
      tipos.push({
        tipoProductoId: producto.tipo.id,
        descripcion: producto.tipo.descripcion,
      });
    }
    const preciosProducto: IPrecioProd[] = [];
    precios.forEach((precio) => {
      if (precio.idProducto === producto.id) {
        preciosProducto.push({
          idPresentacion: precio.idPresentacion,
          descripcionPres: precio.descripcionPres,
          valor: precio.valor,
          disponible: precio.disponible,
        });
      }
    });
    const newProd: IProductoWithPricesDto = {
      ...producto,
      precios: preciosProducto,
    };
    return newProd;
  });

  return { productosConPrecios, tipos };
};

export const setOrderProducts = (
  productos: IProductoDto[],
  precios: IPrecioProductosDto[],
  presentaciones: IPresentacionDto[]
): { productos: ProductoPedidos[]; tipos: TipoProductoDto[] } => {
  const productosConPrecios = setProductPrices(productos, precios);
  const productosOrden: ProductoPedidos[] = [];

  productosConPrecios.productosConPrecios.forEach((producto) => {
    const presentacionesProducto: IPresentacionDto[] = [];
    producto.precios.forEach((precio) => {
      const index = presentaciones.findIndex(
        (presentacion) => presentacion.id === precio.idPresentacion
      );
      if (index >= 0) {
        presentacionesProducto.push(presentaciones[index]);
      }
    });
    const productoPedido: ProductoPedidos = {
      ...producto,
      presentaciones: presentacionesProducto,
    };
    productosOrden.push(productoPedido);
  });

  return { productos: productosOrden, tipos: productosConPrecios.tipos };
};

export const setOrderQuantity = (
  productos: ProductoPedidos[],
  items: CartItem[]
): ProductoPedidos[] => {
  const productosPedidosFinal: ProductoPedidos[] = [];
  items.forEach((item) => {
    const index = productos.findIndex((prod) => prod.id === item.productId);
    if (index >= 0) {
      const newProducto: ProductoPedidos = {
        ...JSON.parse(JSON.stringify(productos[index])),
        quantity: { ...item },
      };
      productosPedidosFinal.push(newProducto);
    }
  });
  return productosPedidosFinal;
};
