"use client";
import React from "react";
import HeaderView from "./header/HeaderView";
import HeroView from "./hero/HeroView";
import InformacionView from "./Informacion/InformacionView";
import CatalogoLandingView from "./catalogo/CatalogoLandingView";
import { Box } from "@mui/material";

const LandingIndex = () => {
  return (
    <Box sx={{ padding: "3rem" }}>
      <HeaderView />
      <HeroView />
      <br />
      <hr />
      <br />
      <InformacionView />
      <br />
      <hr />
      <br />
      <CatalogoLandingView />
    </Box>
  );
};

export default LandingIndex;
