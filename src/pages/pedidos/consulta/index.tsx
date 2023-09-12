import PageLayout from "@/presentation/layouts/PageLayout";
import OrderSavedView from "@/presentation/orderSaved/OrderSavedView";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/pedidos/listado");
  };

  return (
    <PageLayout
      title="Detalle pedido registrado"
      buttonLbl="Volver al listado"
      handleClickButton={handleClickButton}
    >
      <OrderSavedView />
    </PageLayout>
  );
};

export default Index;
