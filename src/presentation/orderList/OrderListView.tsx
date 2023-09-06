import Container from "@/DI/Container";
import { useEffect } from "react";
import { IOrderListViewModel } from "./OrderListViewModel";

const OrderListView = () => {
  const orderListVM = Container.resolve(
    "OrderListViewModel"
  ) as IOrderListViewModel;

  useEffect(() => {
    (async () => {
      await orderListVM.getPedidos();
    })();
  }, []);

  return <div>OrderListView</div>;
};

export default OrderListView;
