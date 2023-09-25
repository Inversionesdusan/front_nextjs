import { constantes } from "@/domain/constants";
import PageLayout from "@/presentation/layouts/PageLayout";
import OrderDetail from "@/presentation/orderDetail/OrderDetail";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const goToCatalog = () => {
    router.push("/catalogo");
  };

  return (
    <PageLayout
      title={constantes.orderDetail.pageTitle}
      buttonLbl={constantes.orderDetail.catalogButtonLabel}
      handleClickButton={goToCatalog}
    >
      <OrderDetail flow={router.query["flow"] as string} />
    </PageLayout>
  );
};

export default Index;
