import {
  IPrecioProd,
  IProductoWithPricesDto,
} from "@/domain/models/Dto/IProductoDto";
import { Dispatch, SetStateAction, useState } from "react";
import { IPrecioProductosDto } from "../../domain/models/Dto/IPrecioProductosDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { IPreciosService } from "@/domain/services/PreciosService";
import useLocalStorage from "@/domain/hooks/useLocalStorage";

interface CatalogoViewModelProps {
  ProductosService: IProductoService;
  PreciosService: IPreciosService;
}

export interface ICatalogoViewModel {
  loadingPrices: boolean;
  precios: IPrecioProductosDto[];
  loadingProds: boolean;
  productos: IProductoWithPricesDto[];
  getProductos: () => Promise<void>;
  openModalCar: boolean;
  handleOpenModalCar: () => void;
  productoSeleccionado: IProductoWithPricesDto | undefined;
  setProductoSeleccionado: Dispatch<
    SetStateAction<IProductoWithPricesDto | undefined>
  >;
  handleClickShoppingCar: (
    productId: number,
    presentationId: number,
    quantity: number
  ) => void;
  handleClickCarDetail: (productoSeleccionado: IProductoWithPricesDto) => void;
}

const CatalogViewModel = ({
  ProductosService,
  PreciosService,
}: CatalogoViewModelProps) => {
  const [loadingProds, setLoadingProds] = useState<boolean>(false);
  const [loadingPrices, setLoadingPrices] = useState<boolean>(false);
  const [productos, setProductos] = useState<IProductoWithPricesDto[]>([]);
  const [precios, setPrecios] = useState<IPrecioProductosDto[]>([]);
  const [openModalCar, setOpenModalCar] = useState<boolean>(false);
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<IProductoWithPricesDto>();
  const { saveDataShoppingCar } = useLocalStorage();

  const getProductos = async () => {
    setLoadingProds(true);
    try {
      Promise.all([
        ProductosService.getProductos(),
        PreciosService.getPrecioProductos(),
      ]).then((resp) => {
        const prods = resp[0];
        const prices = resp[1];
        setPrecios(prices);
        const prodsWithPrices = prods.map((producto) => {
          const precios: IPrecioProd[] = [];
          prices.forEach((precio) => {
            if (precio.idProducto === producto.id) {
              precios.push({
                idPresentacion: precio.idPresentacion,
                descripcionPres: precio.descripcionPres,
                valor: precio.valor,
                disponible: precio.disponible,
              });
            }
          });
          const newProd: IProductoWithPricesDto = { ...producto, precios };
          return newProd;
        });
        console.log("productos con precios -> ", prodsWithPrices);
        setProductos(prodsWithPrices);
        setLoadingProds(false);
      });
    } catch (error) {
      setProductos([]);
      setPrecios([]);
      setLoadingProds(true);
    }
  };

  const handleOpenModalCar = () => {
    setOpenModalCar(!openModalCar);
  };

  const handleClickShoppingCar = (
    productId: number,
    presentationId: number,
    quantity: number
  ) => {
    saveDataShoppingCar(productId, presentationId, quantity);
  };

  const handleClickCarDetail = (
    productoSeleccionado: IProductoWithPricesDto
  ) => {
    setProductoSeleccionado(productoSeleccionado);
    handleOpenModalCar();
  };

  return {
    loadingPrices,
    precios,
    loadingProds,
    productos,
    getProductos,
    openModalCar,
    handleOpenModalCar,
    productoSeleccionado,
    setProductoSeleccionado,
    handleClickShoppingCar,
    handleClickCarDetail,
  };
};

export default CatalogViewModel;
