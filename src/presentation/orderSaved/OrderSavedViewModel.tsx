import { IOrderDto } from "@/domain/models/Dto/IOrderDto";
import { IOrderDataForm } from "@/domain/models/forms/IOrderDataForm";
import useAuthStore, { AuthDataStore } from "@/domain/store/useAuthStore";
import useAppStore from "@/domain/store/useStore";
import { UseFormReturn, useForm } from "react-hook-form";
import { initialOrderDataForm } from "../../domain/models/forms/IOrderDataForm";
import { IPedidosService } from "@/domain/services/PedidosService";
import useModalStore from "@/domain/store/useModalStore";
import { useState } from "react";
import { IOrderUpdateRequest } from "@/domain/models/requests/IOrderUpdateRequest";

export interface IOrderSavedViewModel {
  order: IOrderDto;
  authData: AuthDataStore;
  formOrderData: UseFormReturn<IOrderDataForm, any, undefined>;
  selectedEstado: string;
  selectedPagado: string;
  verifyUpdateOrderData: () => Promise<void>;
  savingData: boolean;
}

interface OrderSavedViewModelProps {
  PedidosService: IPedidosService;
}

const OrderSavedViewModel = ({ PedidosService }: OrderSavedViewModelProps) => {
  const { order } = useAppStore();
  const { authData } = useAuthStore();
  const { updateDataModal, closeModal } = useModalStore();
  const [savingData, setSavingData] = useState<boolean>(false);

  const formOrderData = useForm<IOrderDataForm>({
    defaultValues: { ...initialOrderDataForm },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });

  const selectedEstado = formOrderData.watch("estado", "Registrado");
  const selectedPagado = formOrderData.watch("pagado", "N");

  const verifyUpdateOrderData = async () => {
    await formOrderData.trigger();
    if (!formOrderData.formState.isValid) {
      setSavingData(false);
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "Digite todos los campos requeridos",
        onAccept: closeModal,
      });
    }
    updateDataModal({
      open: true,
      title: "Atención",
      message: "Desea actualizar la información del pedido?",
      onAccept: updateOrderData,
      onCancel: closeModal,
    });
  };

  const updateOrderData = async () => {
    setSavingData(true);
    updateDataModal({
      open: true,
      title: "Atención",
      message: "Actualizando datos del pedido...",
      onAccept: undefined,
    });

    try {
      const values = formOrderData.getValues();
      const orderData: IOrderUpdateRequest = {
        data: {
          estado: values.estado ? values.estado : undefined,
          pagado: values.pagado ? values.pagado : undefined,
          transportadora: values.transportadora
            ? values.transportadora
            : undefined,
          valorFlete: values.valorFlete ? values.valorFlete : undefined,
          fechaPago: values.fechaPago
            ? values.fechaPago.format("DD-MM-YYYY")
            : undefined,
          transaccionPago: values.transaccionPago
            ? values.transaccionPago
            : undefined,
          fechaRealDespacho: values.fechaRealDespacho
            ? values.fechaRealDespacho.format("DD-MM-YYYY")
            : undefined,
          fechaRealEntrega: values.fechaRealEntrega
            ? values.fechaRealEntrega.format("DD-MM-YYYY")
            : undefined,
        },
      };
      const orderUpdateResp = await PedidosService.updateOrderData(
        authData.token,
        order!.id,
        orderData
      );
      if (!orderUpdateResp?.id) {
        throw new Error();
      }
      updateDataModal({
        open: true,
        title: "Atención",
        message: "Los datos del perdido se han actualizado.",
        onAccept: closeModal,
      });
    } catch (error) {
      console.log(error);
      updateDataModal({
        open: true,
        title: "Atención",
        message: "Ha ocurrido un error al actualizar la información",
        onAccept: closeModal,
      });
    } finally {
      setSavingData(false);
    }
  };

  return {
    order,
    authData,
    formOrderData,
    selectedEstado,
    selectedPagado,
    verifyUpdateOrderData,
    savingData,
  };
};

export default OrderSavedViewModel;
