import Container from "@/DI/Container";
import { useEffect } from "react";
import { ICatalogoLandingViewModel } from "../../../domain/models/viewModels/ICatalogLandingViewModel";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ProductCard from "@/presentation/components/productCard/ProductCard";
import { styles } from "./CatalogoLandingViewStyles";
import ButtonCustom from "@/app/components/basic/ButtonCustom";

const CatalogoLandingView = () => {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const catalogoLandingViewModel = Container.resolve(
    "CatalogoLandingViewModel"
  ) as ICatalogoLandingViewModel;

  useEffect(() => {
    catalogoLandingViewModel.getProductos();
  }, []);

  const {
    container,
    textBox,
    textBoxContainer,
    title,
    subtitle,
    button,
    catologContainer,
  } = styles(downSm, downLg, downXl);

  return catalogoLandingViewModel.loading ? (
    <>Cargando Productos...</>
  ) : catalogoLandingViewModel.productos.length > 0 ? (
    <Box sx={container}>
      <Box sx={textBox}>
        <Box sx={textBoxContainer}>
          <Typography sx={title}>CONOCE</Typography>
          <Typography sx={subtitle}>NUESTROS</Typography>
          <Typography sx={subtitle}>PRODUCTOS</Typography>
          <ButtonCustom typeButton="form" sx={button} href="/catalogo">
            <Typography>Ver Catálogo</Typography>
          </ButtonCustom>
        </Box>
      </Box>
      <Box sx={catologContainer}>
        {catalogoLandingViewModel.productos.map((producto, index) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            position={catalogoLandingViewModel.getPosition(index, downXl)}
            downXl={downXl}
          />
        ))}
      </Box>
    </Box>
  ) : (
    <>No hay productos...</>
  );
};

export default CatalogoLandingView;
