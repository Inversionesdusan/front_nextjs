"use client";
import ButtonCustom from "@/app/components/basic/ButtonCustom";
import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderView = () => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        paddingY: "0.5rem",
        paddingX: "2rem",
      }}
    >
      <Typography>Nombre de la Empresa</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <ButtonCustom onClick={() => console.log("click 1")} label="Boton 1" />
        <ButtonCustom onClick={() => console.log("click 2")} label="Boton 2" />
        <ButtonCustom onClick={() => console.log("click 3")} label="Boton 3" />
        <ButtonCustom onClick={() => console.log("click 4")} label="Boton 4" />
      </Box>
    </Box>
  );
};

export default HeaderView;
