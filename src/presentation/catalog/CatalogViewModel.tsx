import {
  IPrecioProd,
  IProductoWithPricesDto,
} from "@/domain/models/Dto/IProductoDto";
import { Dispatch, SetStateAction, useState } from "react";
import { IPrecioProductosDto } from "../../domain/models/Dto/IPrecioProductosDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { IPreciosService } from "@/domain/services/PreciosService";
import useLocalStorage from "@/domain/hooks/useLocalStorage";
import useAppStore from "@/domain/store/useStore";
import { constantes } from "@/domain/constants";
import { TipoProductoDto } from "@/domain/models/Dto/TipoProductoDto";
import { removeAccents } from "@/domain/helpers/utils";

interface CatalogoViewModelProps {
  ProductosService: IProductoService;
  PreciosService: IPreciosService;
}

export interface ICatalogoViewModel {
  loadingPrices: boolean;
  precios: IPrecioProductosDto[];
  loadingProds: boolean;
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
  openModalMessage: boolean;
  handleOpenModalMessage: () => void;
  dataModalMessage: {
    title: string;
    message: string;
  };
  tipoProducto: TipoProductoDto[];
  tipoSeleccionado: string;
  handleFilterChange: (tipoProducto: string) => void;
  productosFiltrados: IProductoWithPricesDto[];
  textFilter: string;
  handleChangetextFilter: (text: string) => void;
}

const CatalogViewModel = ({
  ProductosService,
  PreciosService,
}: CatalogoViewModelProps) => {
  const [loadingProds, setLoadingProds] = useState<boolean>(true);
  const [loadingPrices, setLoadingPrices] = useState<boolean>(false);
  const [productos, setProductos] = useState<IProductoWithPricesDto[]>([]);
  const [precios, setPrecios] = useState<IPrecioProductosDto[]>([]);
  const [openModalCar, setOpenModalCar] = useState<boolean>(false);
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<IProductoWithPricesDto>();
  const { saveDataShoppingCart } = useLocalStorage();
  const { initializeCart } = useAppStore();
  const [openModalMessage, setOpenModalMessage] = useState(false);
  const [dataModalMessage, setdataModalMessage] = useState<{
    title: string;
    message: string;
  }>({ title: "", message: "" });
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string>("");
  const [productosFiltrados, setProductosFiltrados] = useState<
    IProductoWithPricesDto[]
  >([]);
  const [tipoProducto, settipoProducto] = useState<TipoProductoDto[]>([]);
  const [textFilter, setTextFilter] = useState<string>("");

  const getProductos = async () => {
    setLoadingProds(true);
    try {
      Promise.all([
        ProductosService.getProductos(),
        PreciosService.getPrecioProductos(),
      ]).then((resp) => {
        const tipos: TipoProductoDto[] = [];
        const prods = resp[0];
        const prices = resp[1];
        setPrecios(prices);
        const prodsWithPrices = prods.map((producto) => {
          if (
            tipos.findIndex((tp) => tp.tipoProductoId === producto.tipo.id) < 0
          ) {
            tipos.push({
              tipoProductoId: producto.tipo.id,
              descripcion: producto.tipo.descripcion,
            });
          }
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
        settipoProducto(tipos);
        setProductos(prodsWithPrices);
        setLoadingProds(false);
        setProductosFiltrados(prodsWithPrices);
        setTextFilter("");
        setTipoSeleccionado("");
      });
    } catch (error) {
      setProductos([]);
      setPrecios([]);
      settipoProducto([]);
      setLoadingProds(false);
      setProductosFiltrados([]);
      setTextFilter("");
      setTipoSeleccionado("");
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
    const dataSaved = saveDataShoppingCart(productId, presentationId, quantity);
    initializeCart(dataSaved);
    handleOpenModalCar();
    setdataModalMessage({
      title: constantes.shoppingCar.infoModal.title,
      message: constantes.shoppingCar.infoModal.message,
    });
    handleOpenModalMessage();
  };

  const handleClickCarDetail = (
    productoSeleccionado: IProductoWithPricesDto
  ) => {
    setProductoSeleccionado(productoSeleccionado);
    handleOpenModalCar();
  };

  const handleOpenModalMessage = () => {
    setOpenModalMessage(!openModalMessage);
  };

  const handleFilterChange = (tipoProducto: string) => {
    setTipoSeleccionado(tipoProducto);
    setProductosFiltrados([]);
    if (tipoProducto)
      return setProductosFiltrados(
        productos.filter((prod) => prod.tipo.id.toString() === tipoProducto)
      );

    setProductosFiltrados(productos);
  };

  const handleChangetextFilter = (text: string) => {
    console.log(" *** handleChangetextFilter ");
    setProductosFiltrados([]);
    setTextFilter(text || "");
    if (!text) return setProductosFiltrados(productos);
    const prods =
      productos
        .map((producto) => ({
          id: producto.id,
          value: removeAccents(JSON.stringify(producto).toLowerCase()),
        }))
        .filter((prd) => prd.value.includes(text.toLowerCase()))
        .map((prdRes) => JSON.parse(prdRes.value)) || [];
    const newProds: IProductoWithPricesDto[] = [];
    prods.forEach((prodFinal) => {
      const idx = productos.findIndex((prdOrig) => prdOrig.id === prodFinal.id);
      if (idx >= 0) newProds.push(productos[idx]);
    });
    console.log("prods filtrados -> ", newProds);
    setProductosFiltrados(newProds);
  };

  return {
    loadingPrices,
    precios,
    loadingProds,
    getProductos,
    openModalCar,
    handleOpenModalCar,
    productoSeleccionado,
    setProductoSeleccionado,
    handleClickShoppingCar,
    handleClickCarDetail,
    handleOpenModalMessage,
    openModalMessage,
    dataModalMessage,
    tipoProducto,
    tipoSeleccionado,
    handleFilterChange,
    productosFiltrados,
    textFilter,
    handleChangetextFilter,
  };
};

export default CatalogViewModel;
