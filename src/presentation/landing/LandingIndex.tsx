"use client";
import HeaderView from "./header/HeaderView";
import HeroView from "./hero/HeroView";
import InformacionView from "./Informacion/InformacionView";
import CatalogoLandingView from "./catalogo/CatalogoLandingView";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactoView from "./contacto/ContactoView";
import FooterView from "./footer/FooterView";
import { colors } from "../styles/colors";
import ModalRegistro from "@/presentation/components/modalRegistro/ModalRegistro";
import ModalLogin from "@/presentation/components/modalLogin/ModalLogin";
import useMenuHook from "@/domain/hooks/useMenuHook";
import Container from "@/DI/Container";
import { LandingViewModelReturn } from "./LandingViewModel";

const LandingIndex = () => {
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));

  const {
    menuOptions,
    handleOpenModalLogin,
    handleOpenModalRegistro,
    openModalLogin,
    openModalRegistro,
  } = useMenuHook();

  const landingViewModel = Container.resolve(
    "LandingViewModel"
  ) as LandingViewModelReturn;

  return (
    <>
      <HeaderView menuOptions={menuOptions} landing={true} />
      <Box sx={{ width: "100%", marginX: "auto", height: "100vh" }}>
        <HeroView
          handleOpenModalLogin={handleOpenModalLogin}
          handleOpenModalRegistro={handleOpenModalRegistro}
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
      <ModalRegistro
        open={openModalRegistro}
        title="Registro"
        message="Prueba"
        onClose={handleOpenModalRegistro}
        onAccept={handleOpenModalRegistro}
      />
      <ModalLogin
        open={openModalLogin}
        title="Ingreso"
        message="Prueba"
        onClose={handleOpenModalLogin}
        onAccept={handleOpenModalLogin}
      />
    </>
  );
};

export default LandingIndex;
