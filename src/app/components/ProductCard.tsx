import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { IProductoDto } from "../../domain/models/Dto/IProductoDto";
import HeaderLink from "./basic/HeaderLink";

export interface ProductCardProps {
  producto: IProductoDto;
}

const ProductCard = ({ producto }: ProductCardProps) => {
  return (
    <>
      <Box
        sx={{
          height: "340px",
          width: "340px",
          boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
          background: "rgba( 255, 255, 255, 0.5 )",
          backdropFilter: "blur( 9.5px )",
          borderRadius: "1rem",
          overflow: "visible",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              flex: 1,
              maxWidth: "12rem",
              height: "12rem",
              backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${producto.imagen.urlThumbnail}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              flex: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "1.5rem",
                color: "rgb(56, 59, 64)",
                marginY: 0,
              }}
            >
              {producto.nombreProducto}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito Sans",
                fontSize: "1rem",
                color: "rgb(56, 59, 64)",
                marginY: 0,
              }}
            >
              {producto.descripcion}
            </Typography>
          </Box>
        </Box>
        <HeaderLink href="#nosotros" label="Ver catálogo" />
      </Box>
    </>
  );
};

export default ProductCard;
