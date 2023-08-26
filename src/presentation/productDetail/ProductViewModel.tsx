import { constantes } from "@/domain/constants";
import { setProductPrices } from "@/domain/helpers/utils";
import useLocalStorage from "@/domain/hooks/useLocalStorage";
import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { IPreciosService } from "@/domain/services/PreciosService";
import useAppStore from "@/domain/store/useStore";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface ProductViewModelProps {
  ProductosService: IProductoService;
  PreciosService: IPreciosService;
}

export interface ProductViewModelReturn {
  loadingProductos: boolean;
  getProductos: () => void;
  productos: IProductoWithPricesDto[];
  selectedProduct: IProductoWithPricesDto;

  productoSeleccionado: IProductoWithPricesDto;
  openModalCart: boolean;
  handleClickCartButton: (producto: IProductoWithPricesDto) => void;
  handleClickOpenModal: () => void;
  handleClickBuyButton: (producto: IProductoWithPricesDto) => void;
  openModalMessage: boolean;
  dataModalMessage: {
    title: string;
    message: string;
  };
  handleOpenModalMessage: () => void;
  handleClickShoppingCar: (
    productId: number,
    presentationId: number,
    quantity: number
  ) => void;
  precioSeleccionado: string;
  setPrecioSeleccionado: Dispatch<SetStateAction<string>>;
  precio: number;
  setPrecio: Dispatch<SetStateAction<number>>;
  handleSelectPriceSelect: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  cantidad: number;
  addItem: () => void;
  removeItem: () => void;
}

const ProductViewModel = ({
  ProductosService,
  PreciosService,
}: ProductViewModelProps) => {
  const [loadingProductos, setLoadingProductos] = useState<boolean>(true);
  const [productos, setProductos] = useState<IProductoWithPricesDto[]>([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState<
    IProductoWithPricesDto | undefined
  >(undefined);
  const [openModalCart, setOpenModalCart] = useState<boolean>(false);
  const [openModalMessage, setOpenModalMessage] = useState(false);
  const [dataModalMessage, setdataModalMessage] = useState<{
    title: string;
    message: string;
  }>({ title: "", message: "" });

  const { saveDataShoppingCart } = useLocalStorage();
  const { setSelectedProduct, initializeCart, selectedProduct } = useAppStore();
  const [precioSeleccionado, setPrecioSeleccionado] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(1);
  const [precio, setPrecio] = useState<number>(0);
  const router = useRouter();
  console.log("selected product -> ", selectedProduct);
  const getProductos = () => {
    try {
      Promise.all([
        ProductosService.getProductos(),
        PreciosService.getPrecioProductos(),
      ]).then((response) => {
        const productosConPrecios = setProductPrices(response[0], response[1]);
        setProductos(productosConPrecios.productosConPrecios);
        setLoadingProductos(false);
      });
    } catch (error) {
      setProductos([]);
      setLoadingProductos(false);
    }
  };

  const handleClickOpenModal = () => {
    setOpenModalCart(!openModalCart);
  };

  const handleClickCartButton = (producto: IProductoWithPricesDto) => {
    setProductoSeleccionado(producto);
  };

  const handleClickBuyButton = (producto: IProductoWithPricesDto) => {
    setSelectedProduct(producto);
    router.push("/detalle");
  };

  const handleOpenModalMessage = () => {
    setOpenModalMessage(!openModalMessage);
  };

  const handleClickShoppingCar = (
    productId: number,
    presentationId: number,
    quantity: number
  ) => {
    const dataSaved = saveDataShoppingCart(productId, presentationId, quantity);
    initializeCart(dataSaved);
    handleClickOpenModal();
    setdataModalMessage({
      title: constantes.shoppingCar.infoModal.title,
      message: constantes.shoppingCar.infoModal.message,
    });
    handleOpenModalMessage();
  };

  const handleSelectPriceSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = parseInt(event.target.value);
    console.log("id precio seleccionado -> ", id);
    console.log("precios -> ", selectedProduct);
    const newPrecio = selectedProduct!.precios.find(
      (precio) => precio.idPresentacion === id
    );
    console.log("obj precio seleccionado -> ", newPrecio);
    console.log("actualizacion de precio a ", newPrecio?.valor);

    newPrecio && setPrecio(newPrecio.valor);
    newPrecio && setPrecioSeleccionado(id.toString());
  };

  const addItem = () => {
    setCantidad(cantidad + 1);
  };

  const removeItem = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return {
    loadingProductos,
    getProductos,
    productos,
    selectedProduct,

    productoSeleccionado,
    openModalCart,
    handleClickCartButton,
    handleClickOpenModal,
    handleClickBuyButton,
    openModalMessage,
    dataModalMessage,
    handleOpenModalMessage,
    handleClickShoppingCar,
    precioSeleccionado,
    setPrecioSeleccionado,
    precio,
    setPrecio,
    handleSelectPriceSelect,
    cantidad,
    addItem,
    removeItem,
  };
};

export default ProductViewModel;
