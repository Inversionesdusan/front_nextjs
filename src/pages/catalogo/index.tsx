import { constantes } from "@/domain/constants";
import CatalogView from "@/presentation/catalog/CatalogView";
import PageLayout from "@/presentation/layouts/PageLayout";

const index = () => {
  return (
    <PageLayout title={constantes.catalog.pageTitle}>
      <CatalogView />
    </PageLayout>
  );
};

export default index;
