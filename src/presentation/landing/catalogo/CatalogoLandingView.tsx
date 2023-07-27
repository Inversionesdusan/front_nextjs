import Container from "@/DI/Container";
import { useEffect } from "react";
import { ICatalogoLandingViewModel } from "../../../domain/models/viewModels/ICatalogLandingViewModel";
import { Box, Typography } from "@mui/material";
import { colors } from "@/presentation/styles/colors";
import ProductCard from "@/app/components/ProductCard";

const CatalogoLandingView = () => {
  const catalogoLandingViewModel = Container.resolve(
    "CatalogoLandingViewModel"
  ) as ICatalogoLandingViewModel;

  useEffect(() => {
    catalogoLandingViewModel.getProductos();
  }, []);

  const getPosition = (
    index: number
  ): "center" | "topLeft" | "topRigth" | "bottomLeft" | "bottomRigth" => {
    if (index === 0) return "topLeft";
    if (index === 1 || index === 4) return "center";
    if (index === 2) return "topRigth";
    if (index === 3) return "bottomLeft";
    if (index === 5) return "bottomRigth";
    return "center";
  };

  console.log("productos -> ", catalogoLandingViewModel.productos);
  return catalogoLandingViewModel.loading ? (
    <>Cargando Productos...</>
  ) : catalogoLandingViewModel.productos.length > 0 ? (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: "3rem",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          minWidth: "360px",
          height: "500px",
          background: colors.green,
          flex: 2,
          borderTopRightRadius: "230px",
          borderBottomLeftRadius: "230px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", transform: "translateY(-1.5rem)" }}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "3rem",
              fontWeight: "300",
            }}
          >
            CONOCE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cunia",
              fontSize: "3rem",
              fontWeight: "700",
              lineHeight: "3rem",
            }}
          >
            NUESTROS
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cunia",
              fontSize: "3rem",
              fontWeight: "700",
              lineHeight: "3rem",
            }}
          >
            PRODUCTOS
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 3,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginTop: "93px",
          height: "calc(100vh - 93px)",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {catalogoLandingViewModel.productos.map((producto, index) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            position={getPosition(index)}
          />
        ))}
      </Box>
    </Box>
  ) : (
    <>No hay productos...</>
  );
};

export default CatalogoLandingView;
