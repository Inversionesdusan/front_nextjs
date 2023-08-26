import { setOrderProducts, setOrderQuantity } from "@/domain/helpers/utils";
import useLocalStorage from "@/domain/hooks/useLocalStorage";
import { ProductoPedidos } from "@/domain/models/Dto/IProductoDto";
import { IProductoService } from "@/domain/models/services/IProductosService";
import { CartItem } from "@/domain/models/store/CarItem";
import { IPreciosService } from "@/domain/services/PreciosService";
import { IPresentacionesService } from "@/domain/services/PresentacionesService";
import { useState } from "react";
import useModalStore from "../../domain/store/useModalStore";
import useAppStore from "@/domain/store/useStore";

interface OrderDetailViewModelProps {
  ProductosService: IProductoService;
  PreciosService: IPreciosService;
  PresentacionesService: IPresentacionesService;
}

export interface OrderDetailViewModelReturn {
  loading: boolean;
  getProductos: () => void;
  productosPedido: ProductoPedidos[];
  handleChangePresentation: (index: number, presentationId: number) => void;
  handleAddQty: (index: number) => void;
  handleRemoveQty: (index: number) => void;
  confirmRemoveItem: (index: number) => void;
  summaryData: { cant: number; valor: number };
}

const OrderDetailViewModel = ({
  ProductosService,
  PreciosService,
  PresentacionesService,
}: OrderDetailViewModelProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productosPedido, setProductosPedido] = useState<ProductoPedidos[]>([]);
  const { getDataShoppingCart, saveAllItemsShoppingCart, clearShoppingCart } =
    useLocalStorage();
  const { updateDataModal, closeModal } = useModalStore();
  const { initializeCart } = useAppStore();
  const [summaryData, setSummaryData] = useState<{
    cant: number;
    valor: number;
  }>({ cant: 0, valor: 0 });

  const getProductos = () => {
    try {
      setLoading(true);
      Promise.all([
        ProductosService.getProductos(),
        PreciosService.getPrecioProductos(),
        PresentacionesService.getPresentaciones(),
      ]).then((response) => {
        const data = getDataShoppingCart();
        updateSummaryData(data);
        const productos = response[0].filter(
          (prod) =>
            data.findIndex((cartItem) => cartItem.productId === prod.id) >= 0
        );
        const precios = response[1];
        const presentaciones = response[2];
        const productosCompletos = setOrderProducts(
          productos,
          precios,
          presentaciones
        );
        console.log(" productos completos para pedido -> ", productosCompletos);
        setProductosPedido(
          setOrderQuantity(productosCompletos.productos, data)
        );
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      setProductosPedido([]);
    }
  };

  const handleChangePresentation = (index: number, presentationId: number) => {
    const prod = productosPedido[index];
    const precio = prod.precios.find(
      (precio) => precio.idPresentacion === presentationId
    );
    prod.quantity!.presentationId = precio!.idPresentacion;
    prod.quantity!.presentationName = precio!.descripcionPres;
    prod.quantity!.value = precio!.valor;
    setProductosPedido([...productosPedido]);
    updateShoppingCart(productosPedido);
  };

  const handleAddQty = (index: number) => {
    const prod = productosPedido[index];
    prod.quantity!.quantity++;
    setProductosPedido([...productosPedido]);
    updateShoppingCart(productosPedido);
  };

  const handleRemoveQty = (index: number) => {
    const prod = productosPedido[index];
    if (prod.quantity!.quantity > 1) prod.quantity!.quantity--;
    setProductosPedido([...productosPedido]);
    updateShoppingCart(productosPedido);
  };

  const removeItem = (index: number) => {
    productosPedido.splice(index, 1);
    setProductosPedido([...productosPedido]);
    updateShoppingCart(productosPedido);
  };

  const confirmRemoveItem = (index: number) => {
    updateDataModal({
      open: true,
      title: "Confirmar",
      message: "¿Desde eliminar este producto del pedido?",
      onCancel: closeModal,
      onAccept: () => {
        removeItem(index);
        closeModal();
      },
    });
  };

  const updateSummaryData = (items: CartItem[]) => {
    setSummaryData(
      items.reduce(
        (result, item) => {
          const newCant = result.cant + 1;
          const newValue = result.valor + item.value * item.quantity;
          return { cant: newCant, valor: newValue };
        },
        { cant: 0, valor: 0 }
      )
    );
  };

  const updateShoppingCart = (products: ProductoPedidos[]) => {
    const cartProducts = products.map((prod) => prod.quantity) as CartItem[];
    clearShoppingCart();
    saveAllItemsShoppingCart(cartProducts);
    initializeCart(cartProducts);
    updateSummaryData(cartProducts);
  };

  return {
    loading,
    getProductos,
    productosPedido,
    handleChangePresentation,
    handleAddQty,
    handleRemoveQty,
    confirmRemoveItem,
    summaryData,
  };
};

export default OrderDetailViewModel;
