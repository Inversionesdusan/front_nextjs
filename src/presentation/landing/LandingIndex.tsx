"use client";
import React from "react";
import HeaderView from "./header/HeaderView";
import HeroView from "./hero/HeroView";
import InformacionView from "./Informacion/InformacionView";
import CatalogoLandingView from "./catalogo/CatalogoLandingView";
import { Box } from "@mui/material";
import ContactoView from "./contacto/ContactoView";

const LandingIndex = () => {
  return (
    <>
      <HeaderView />
      <Box sx={{ width: "100%", paddingTop: "98px", marginX: "auto" }}>
        <HeroView />
      </Box>
      <Box sx={{ margin: "auto", maxWidth: "1200px", paddingX: "30px" }}>
        <InformacionView />
        <CatalogoLandingView />
        <ContactoView />
      </Box>
    </>
  );
};

export default LandingIndex;
