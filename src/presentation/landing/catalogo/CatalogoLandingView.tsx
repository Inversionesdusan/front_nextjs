import Container from "@/DI/Container";
import React, { useEffect } from "react";
import { ICatalogoLandingViewModel } from "../../../domain/models/viewModels/ICatalogLandingViewModel";
import { Box, CardMedia, Typography } from "@mui/material";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";

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
    <>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Montserrat",
          marginTop: "4rem",
          marginBottom: "5rem",
          color: "rgb(56,59,64)",
        }}
      >
        Productos
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {catalogoLandingViewModel.productos.map((prod) => (
          <ProductCard key={prod.id} producto={prod} />
        ))}
      </Box>
    </>
  ) : (
    <>No hay productos...</>
  );
};

export default CatalogoLandingView;
