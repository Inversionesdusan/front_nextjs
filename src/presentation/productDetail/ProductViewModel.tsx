import { setProductPrices } from "@/domain/helpers/utils";
import useLocalStorage from "@/domain/hooks/useLocalStorage";
import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { CartItem } from "@/domain/models/store/CarItem";
import { IPreciosService } from "@/domain/services/PreciosService";
import useModalStore from "@/domain/store/useModalStore";
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
  handleClickCartButton: (producto: IProductoWithPricesDto) => void;
  handleClickBuyButton: (producto: IProductoWithPricesDto) => void;
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
  buyItem: () => void;
  handleClickShoppingCart: () => void;
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
  const { saveDataShoppingCart } = useLocalStorage();
  const { setSelectedProduct, selectedProduct, setItemToBuy } = useAppStore();
  const [precioSeleccionado, setPrecioSeleccionado] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(1);
  const [precio, setPrecio] = useState<number>(0);
  const router = useRouter();
  const { updateDataModal, closeModal } = useModalStore();
  const { addItem: addItemCart } = useAppStore();
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

  const handleClickCartButton = (producto: IProductoWithPricesDto) => {
    setProductoSeleccionado(producto);
  };

  const handleClickBuyButton = (producto: IProductoWithPricesDto) => {
    setSelectedProduct(producto);
    router.push("/detalle");
  };

  const handleClickShoppingCart = () => {
    updateDataModal({
      open: true,
      title: "Atención",
      message: "Desea agregar este producto al carrito de compras?",
      onCancel: closeModal,
      onAccept: () => {
        const item = convertToItemCart();
        addItemCart(item);
        saveDataShoppingCart(item);
        closeModal();
      },
    });
  };

  const handleSelectPriceSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = parseInt(event.target.value);
    const newPrecio = selectedProduct!.precios.find(
      (precio) => precio.idPresentacion === id
    );
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

  const buyItem = () => {
    setItemToBuy(convertToItemCart());
    router.push("/pedidos/detalle?flow=buy");
  };

  const convertToItemCart = (): CartItem => {
    return {
      productId: selectedProduct!.id,
      poductName: selectedProduct!.nombreProducto,
      productTypeId: selectedProduct!.tipo.id,
      productTypeName: selectedProduct!.tipo.descripcion,
      presentationName:
        selectedProduct?.precios.find(
          (precio) => precio.idPresentacion === parseInt(precioSeleccionado)
        )?.descripcionPres || "",
      presentationId: parseInt(precioSeleccionado),
      value: precio,
      quantity: cantidad,
      imageUrl:
        selectedProduct?.imagen.urlSmall ||
        selectedProduct?.imagen.urlThumbnail ||
        "",
    };
  };

  return {
    loadingProductos,
    getProductos,
    productos,
    selectedProduct,
    productoSeleccionado,
    handleClickCartButton,
    handleClickBuyButton,
    precioSeleccionado,
    setPrecioSeleccionado,
    precio,
    setPrecio,
    handleSelectPriceSelect,
    cantidad,
    addItem,
    removeItem,
    buyItem,
    handleClickShoppingCart,
  };
};

export default ProductViewModel;
