import { constantes } from "@/domain/constants";
import CatalogView from "@/presentation/catalog/CatalogView";
import PageLayout from "@/presentation/layouts/PageLayout";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Catálogo de productos - Dusan</title>
        {/*Canonicals: Landing page - Invesiones Dusan*/}
        <link rel="canonical" href="https://dusan.com.co/catalogo/" />
        <meta
          name="description"
          content="Catálogo de productos. Fertilizantes Minerales, Orgánico - Mineral y Químicos"
        />
      </Helmet>
      <PageLayout title={constantes.catalog.pageTitle}>
        <CatalogView />
      </PageLayout>
    </>
  );
};

export default index;
