import OrderDetail from "@/presentation/orderDetail/OrderDetail";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return <OrderDetail flow={router.query["flow"] as string} />;
};

export default Index;
