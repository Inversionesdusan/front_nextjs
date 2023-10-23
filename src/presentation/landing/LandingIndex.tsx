"use client";
import HeaderView from "./header/HeaderView";
import HeroView from "./hero/HeroView";
import InformacionView from "./Informacion/InformacionView";
import CatalogoLandingView from "./catalogo/CatalogoLandingView";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactoView from "./contacto/ContactoView";
import FooterView from "./footer/FooterView";
import { colors } from "../styles/colors";
import Container from "@/DI/Container";
import { LandingViewModelReturn } from "./LandingViewModel";
import { Helmet } from "react-helmet";

const LandingIndex = () => {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));

  const landingViewModel = Container.resolve(
    "LandingViewModel"
  ) as LandingViewModelReturn;

  return (
    <>
      <Helmet>
        <title>Landing Page - Dusan</title>
        {/*Canonicals: Landing page - Invesiones Dusan*/}
        <link rel="canonical" href="https://dusan.com.co/" />
        <meta
          name="description"
          content="Fabricación de abonos y compuestos inorgánicos nitrogenados - Ibagué"
        />
      </Helmet>
      <HeaderView
        landing={true}
        handleOpenModalLogin={landingViewModel.handleOpenModalLogin}
        openModalLogin={landingViewModel.openModalLogin}
        handleOpenModalRegistro={landingViewModel.handleOpenModalRegistro}
        openModalRegistro={landingViewModel.openModalRegistro}
      />
      <Box sx={{ width: "100%", marginX: "auto", height: "100vh" }}>
        <HeroView
          handleOpenModalLogin={landingViewModel.handleOpenModalLogin}
          handleOpenModalRegistro={landingViewModel.handleOpenModalRegistro}
        />
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
