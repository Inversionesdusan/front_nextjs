import useMenuHook from "@/domain/hooks/useMenuHook";
import HeaderView from "../landing/header/HeaderView";
import { Box, Typography } from "@mui/material";
import { styles } from "./CatalogViewStyles";
import CatalogCard from "../components/catalogCard/CatalogCard";
import { IProductoDto } from "@/domain/models/Dto/IProductoDto";
import Container from "@/DI/Container";
import { ICatalogoViewModel } from "./CatalogViewModel";
import { useEffect } from "react";
import ShoppingCarModal from "../components/shoppinCarModal/ShoppingCarModal";

const productos: IProductoDto[] = [];

const CatalogView = () => {
  const catalogViewModel = Container.resolve(
    "CatalogViewModel"
  ) as ICatalogoViewModel;

  const { menuOptions } = useMenuHook();
  const { container, catalogContainer, titleBox, title, productContainer } =
    styles();

  useEffect(() => {
    (async () => {
      await catalogViewModel.getProductos();
    })();
  }, []);

  return (
    <>
      <Box sx={container}>
        <HeaderView menuOptions={menuOptions} landing={false} />
        <Box sx={catalogContainer}>
          <Box sx={titleBox}>
            <Typography sx={title}>Catálogo de productos</Typography>
          </Box>
          <Box sx={productContainer}>
            {catalogViewModel.productos &&
              catalogViewModel.productos.map((producto) => (
                <CatalogCard
                  key={`Pr-${producto.id}`}
                  producto={producto}
                  handleClickCarButton={catalogViewModel.handleClickCarDetail}
                />
              ))}
          </Box>
        </Box>
      </Box>
      {catalogViewModel.productoSeleccionado && (
        <ShoppingCarModal
          producto={catalogViewModel.productoSeleccionado!}
          open={catalogViewModel.openModalCar}
          handleClose={catalogViewModel.handleOpenModalCar}
          handleOrder={() => console.log("ordenar")}
          handleShoppingCar={catalogViewModel.handleClickShoppingCar}
        />
      )}
    </>
  );
};

export default CatalogView;
