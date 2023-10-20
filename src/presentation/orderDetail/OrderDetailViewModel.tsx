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
import { UseFormReturn, useForm } from "react-hook-form";
import {
  OrderFormValues,
  initialFormData,
} from "@/domain/models/forms/OrderForm";
import { IClientsService } from "@/domain/services/ClientsService";
import { IPedidosService } from "@/domain/services/PedidosService";
import { v4 as uuid } from "uuid";
import { IDetallePedido } from "@/domain/models/requests/ISAveDataOrder";
import { useRouter } from "next/navigation";
import useAuthStore, { AuthDataStore } from "@/domain/store/useAuthStore";
import useCompanyStore from "@/domain/store/useCompanyStore";

interface OrderDetailViewModelProps {
  ProductosService: IProductoService;
  PreciosService: IPreciosService;
  PresentacionesService: IPresentacionesService;
  ClientsService: IClientsService;
  PedidosService: IPedidosService;
}

export interface OrderDetailViewModelReturn {
  loading: boolean;
  getProductos: (flow: string) => void;
  productosPedido: ProductoPedidos[];
  handleChangePresentation: (index: number, presentationId: number) => void;
  handleAddQty: (index: number) => void;
  handleRemoveQty: (index: number) => void;
  confirmRemoveItem: (index: number) => void;
  summaryData: { cant: number; valor: number };
  orderForm: UseFormReturn<OrderFormValues, any, undefined>;
  createOrderVerification: () => {};
  savingData: boolean;
  authData: AuthDataStore;
  getUserData: () => void;
  copyField: <T extends keyof OrderFormValues>(
    originField: T,
    finalField: T
  ) => void;
}

const OrderDetailViewModel = ({
  ProductosService,
  PreciosService,
  PresentacionesService,
  ClientsService,
  PedidosService,
}: OrderDetailViewModelProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productosPedido, setProductosPedido] = useState<ProductoPedidos[]>([]);
  const { getDataShoppingCart, saveAllItemsShoppingCart, clearShoppingCart } =
    useLocalStorage();
  const { updateDataModal, closeModal } = useModalStore();
  const { initializeCart, itemToBuy } = useAppStore();
  const [summaryData, setSummaryData] = useState<{
    cant: number;
    valor: number;
  }>({ cant: 0, valor: 0 });
  const [savingData, setSavingData] = useState<boolean>(false);
  const orderForm = useForm<OrderFormValues>({
    defaultValues: { ...initialFormData },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });
  const router = useRouter();
  const [localflow, setLocalflow] = useState<string>("cart");
  const { authData } = useAuthStore();
  const { companyData } = useCompanyStore();

  const getProductos = (flow: string) => {
    try {
      setLocalflow(flow);
      setLoading(true);
      Promise.all([
        ProductosService.getProductos(),
        PreciosService.getPrecioProductos(),
        PresentacionesService.getPresentaciones(),
      ]).then((response) => {
        const data =
          flow === "cart"
            ? getDataShoppingCart()
            : itemToBuy
            ? [{ ...itemToBuy }]
            : [];
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
    if (localflow === "cart") updateShoppingCart(productosPedido);
  };

  const handleAddQty = (index: number) => {
    const prod = productosPedido[index];
    prod.quantity!.quantity++;
    setProductosPedido([...productosPedido]);
    if (localflow === "cart") updateShoppingCart(productosPedido);
  };

  const handleRemoveQty = (index: number) => {
    const prod = productosPedido[index];
    if (prod.quantity!.quantity > 1) prod.quantity!.quantity--;
    setProductosPedido([...productosPedido]);
    if (localflow === "cart") updateShoppingCart(productosPedido);
  };

  const removeItem = (index: number) => {
    productosPedido.splice(index, 1);
    setProductosPedido([...productosPedido]);
    if (localflow === "cart") updateShoppingCart(productosPedido);
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

  const createOrder = async () => {
    setSavingData(true);
    const data = orderForm.getValues();
    try {
      if (!authData.isAuthenticated) {
        updateDataModal({
          open: true,
          title: "Atención",
          message: "Verificando cliente ...",
          onAccept: undefined,
          onCancel: undefined,
        });
        const clienteExistente = await ClientsService.getClienteByEmail(
          data.email
        );
        if (clienteExistente.id === 0) {
          updateDataModal({
            open: true,
            title: "Atención",
            message: "Cliente no existente. Se esta realizando la creacion...",
            onAccept: undefined,
            onCancel: undefined,
          });

          const cliente = await ClientsService.saveNotRegisteredClient({
            email: data.email,
            nombresCliente: data.nombresCliente,
            apellidosCliente: data.apellidosCliente,
            telefonoCliente: data.apellidosCliente,
            direccion: data.direccionCliente,
            departamento: data.departamentoCliente,
            ciudad: data.ciudadCliente,
            complementoDireccion: data.complementoCliente,
          });

          if (!cliente || !cliente.id || cliente.id <= 0)
            throw new Error("No se ha realizado la grabación del cliente");
        }
      }

      updateDataModal({
        open: true,
        title: "Atención",
        message: "Guardando datos del pedido...",
        onAccept: closeModal,
        onCancel: undefined,
      });

      const pedidoGrabado = await PedidosService.saveOrder(
        authData.token,
        {
          uid: uuid(),
          emailCliente: data.email,
          numeroDocumento: data.numeroDocumento,
          fechaGrabacion: new Date().toISOString(),
          valorTotal: summaryData.valor,
          detallePedido: productosPedido.map((producto) => {
            const detalle: IDetallePedido = {
              nombreProducto: producto.nombreProducto,
              tipo: producto.tipo.descripcion,
              urlImagen:
                producto.imagen.urlSmall || producto.imagen.urlThumbnail || "",
              precio: producto.quantity?.value || 0,
              presentacion: producto.quantity?.presentationName || "",
              cantidad: producto.quantity?.quantity || 0,
            };
            return detalle;
          }),
          direccion: {
            direccion: data.direccionCliente,
            complemento: data.complementoCliente,
            departamento: data.departamentoCliente,
            ciudad: data.ciudadCliente,
            barrio: data.barrioCliente,
          },
          direccionEnvio: {
            direccion: data.direccionEnvio,
            complemento: data.complementoEnvio,
            departamento: data.departamentoEnvio,
            ciudad: data.ciudadEnvio,
            barrio: data.barrioEnvio,
          },
          datosCliente: {
            nombres: data.nombresCliente,
            apellidos: data.apellidosCliente,
            tipoDocumento: data.tipoDocumento,
            digitoVerificacion: data.digitoVerificacion,
            telefono: data.nroTelefono,
          },
        },
        companyData.companyData.email
      );

      if (!pedidoGrabado || !pedidoGrabado.id || pedidoGrabado.id <= 0)
        throw new Error("No se ha realizado la grabación del pedido");

      updateDataModal({
        open: true,
        title: "Atención",
        message: `Nro de pedido grabado : ${pedidoGrabado.id}`,
        onAccept: () => {
          closeModal();
          orderForm.reset({ ...initialFormData });
          if (localflow === "cart") clearShoppingCart();
          router.push("/catalogo");
        },
        onCancel: undefined,
      });

      setSavingData(false);
    } catch (error) {
      updateDataModal({
        open: true,
        title: "Error",
        message: "Ha ocurrido un error en en la grabación del pedido",
        onAccept: () => {
          closeModal();
          setSavingData(false);
        },
      });
    }
  };

  const createOrderVerification = async () => {
    setSavingData(true);
    await orderForm.trigger();
    if (!orderForm.formState.isValid) {
      updateDataModal({
        open: true,
        title: "Atención",
        message: authData.isAuthenticated
          ? "Debes completar los datos para realizar el pedido (Presiona el boton 'Actualizar mis datos' o en la opcion 'Mis Datos')"
          : "Debe diligenciar la información necesaria para crear el pedido",
        onAccept: () => {
          closeModal();
          setSavingData(false);
        },
      });
      setSavingData(false);
      return;
    }

    updateDataModal({
      open: true,
      title: "Pedido",
      message: "Confirma la creación del pedido con los datos especificados?",
      onAccept: createOrder,
      onCancel: () => {
        setSavingData(false);
        closeModal();
      },
    });
  };

  const getUserData = () => {
    ClientsService.loadClientData(authData.token)
      .then((user) => {
        const dirEnvioDiferente =
          !!user.direccion_envio && !!user.direccion_envio.direccion;
        console.log("direccion de envio diferente -> ", dirEnvioDiferente);
        orderForm.reset({
          nombresCliente: user.nombres,
          apellidosCliente: user.apellidos,
          email: user.email,
          nroTelefono: user.telefono,
          tipoDocumento: user.tipoDocumento,
          numeroDocumento: user.numeroDocumento,
          digitoVerificacion: user.digitoVerificacion,
          direccionCliente: user.direccion?.direccion,
          complementoCliente: user.direccion?.complemento,
          departamentoCliente: user.direccion?.departamento,
          ciudadCliente: user.direccion?.ciudad,
          barrioCliente: user.direccion?.barrio,
          usarEnvio: dirEnvioDiferente ? "S" : "N",
          direccionEnvio: dirEnvioDiferente
            ? user.direccion_envio?.direccion
            : user.direccion?.direccion,
          complementoEnvio: dirEnvioDiferente
            ? user.direccion_envio?.complemento
            : user.direccion?.complemento,
          departamentoEnvio: dirEnvioDiferente
            ? user.direccion_envio?.departamento
            : user.direccion?.departamento,
          ciudadEnvio: dirEnvioDiferente
            ? user.direccion_envio?.ciudad
            : user.direccion?.ciudad,
          barrioEnvio: dirEnvioDiferente
            ? user.direccion_envio?.barrio
            : user.direccion?.barrio,
        });
      })
      .catch((error) => {});
  };

  const copyField = <T extends keyof OrderFormValues>(
    originField: T,
    finalField: T
  ) => {
    const valueOrigin: OrderFormValues[T] = orderForm.getValues(originField);
    switch (originField) {
      case "direccionCliente":
        orderForm.setValue("direccionEnvio", valueOrigin || "");
        break;
      case "complementoCliente":
        orderForm.setValue("complementoEnvio", valueOrigin || "");
        break;
      case "departamentoCliente":
        orderForm.setValue("departamentoEnvio", valueOrigin || "");
        break;
      case "ciudadCliente":
        orderForm.setValue("ciudadEnvio", valueOrigin || "");
        break;
      case "barrioCliente":
        orderForm.setValue("barrioEnvio", valueOrigin || "");
        break;
      default:
        break;
    }
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
    orderForm,
    createOrderVerification,
    savingData,
    authData,
    getUserData,
    copyField,
  };
};

export default OrderDetailViewModel;
