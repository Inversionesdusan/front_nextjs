"use client";
import HeaderView from "./header/HeaderView";
import HeroView from "./hero/HeroView";
import InformacionView from "./Informacion/InformacionView";
import CatalogoLandingView from "./catalogo/CatalogoLandingView";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactoView from "./contacto/ContactoView";
import FooterView from "./footer/FooterView";
import { colors } from "../styles/colors";

const LandingIndex = () => {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <HeaderView />
      <Box sx={{ width: "100%", marginX: "auto", height: "100vh" }}>
        <HeroView />
      </Box>
      <Box
        id="catalogo"
        sx={{
          width: "100%",
          marginX: "auto",
          height: downXl ? undefined : "100vh",
        }}
      >
        <CatalogoLandingView />
      </Box>
      <Box
        id="nosotros"
        sx={{
          width: "100%",
          height: downXl ? undefined : "100vh",
          background: colors.lightGray,
        }}
      >
        <InformacionView />
      </Box>
      <Box
        id="contactenos"
        sx={{ width: "100%", height: downXl ? "950px" : "100vh" }}
      >
        <ContactoView />
      </Box>
      <Box sx={{ width: "100%" }}>
        <FooterView />
      </Box>
    </>
  );
};

export default LandingIndex;
