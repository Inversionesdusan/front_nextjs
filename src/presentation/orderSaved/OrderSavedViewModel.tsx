import { IOrderDto } from "@/domain/models/Dto/IOrderDto";
import useAuthStore, { AuthDataStore } from "@/domain/store/useAuthStore";
import useAppStore from "@/domain/store/useStore";

export interface IOrderSavedViewModel {
  order: IOrderDto;
  authData: AuthDataStore;
}

const OrderSavedViewModel = () => {
  const { order } = useAppStore();
  const { authData } = useAuthStore();
  return {
    order,
    authData,
  };
};

export default OrderSavedViewModel;
