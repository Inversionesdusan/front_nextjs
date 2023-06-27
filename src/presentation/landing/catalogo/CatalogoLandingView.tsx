import Container from "@/DI/Container";
import React, { useEffect } from "react";
import { ICatalogoLandingViewModel } from "../../../domain/models/viewModels/ICatalogLandingViewModel";
import { Box } from "@mui/material";

const CatalogoLandingView = () => {
  const catalogoLandingViewModel = Container.resolve(
    "CatalogoLandingViewModel"
  ) as ICatalogoLandingViewModel;

  useEffect(() => {
    catalogoLandingViewModel.getProductos();
  }, []);

  return catalogoLandingViewModel.loading ? (
    <>Cargando Productos...</>
  ) : catalogoLandingViewModel.productos.length > 0 ? (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {catalogoLandingViewModel.productos.map((producto) => (
        <Box
          key={producto.id}
          sx={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "azure",
            border: "solid 1px lightgrey",
            borderRadius: "1rem",
            padding: "1.5rem",
            gap: "1rem",
            boxShadow: "5.5px 3.5px 7.5px 3px #d2d2d2",
          }}
        >
          {" "}
          <h3>{producto.nombreProducto}</h3>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${producto.imagen.url}`}
          />
          <p>{producto.descripcion}</p>
        </Box>
      ))}
    </Box>
  ) : (
    <>No hay productos...</>
  );
};

export default CatalogoLandingView;
