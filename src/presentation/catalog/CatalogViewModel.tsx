import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { Dispatch, SetStateAction, useState } from "react";
import { IPrecioProductosDto } from "../../domain/models/Dto/IPrecioProductosDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { IPreciosService } from "@/domain/services/PreciosService";
import useLocalStorage from "@/domain/hooks/useLocalStorage";
import useAppStore from "@/domain/store/useStore";
import { constantes } from "@/domain/constants";
import { TipoProductoDto } from "@/domain/models/Dto/TipoProductoDto";
import { removeAccents, setProductPrices } from "@/domain/helpers/utils";
import { CartItem } from "@/domain/models/store/CarItem";
import { useRouter } from "next/navigation";

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
  handleClickShoppingCar: (cartItem: CartItem) => void;
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
  buyProduct: (producto: IProductoWithPricesDto) => void;
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
  const { initializeCart, setSelectedProduct } = useAppStore();
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
  const router = useRouter();

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
        const converProductos = setProductPrices(prods, prices);
        console.log("respuesta de productos con precios -> ", converProductos);
        settipoProducto(converProductos.tipos);
        setProductos(converProductos.productosConPrecios);
        setLoadingProds(false);
        setProductosFiltrados(converProductos.productosConPrecios);
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

  const handleClickShoppingCar = (cartItem: CartItem) => {
    const dataSaved = saveDataShoppingCart(cartItem);
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
    setProductosFiltrados(newProds);
  };

  const buyProduct = (producto: IProductoWithPricesDto) => {
    setSelectedProduct(producto);
    router.push("/detalle");
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
    buyProduct,
  };
};

export default CatalogViewModel;
