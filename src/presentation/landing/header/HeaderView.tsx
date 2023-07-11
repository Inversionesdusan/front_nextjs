"use client";
import { Box, Divider, Typography } from "@mui/material";
import HeaderLink from "../../../app/components/basic/HeaderLink";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const HeaderView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        position: "fixed",
        top: "0",
        width: "100%",
        paddingX: "3rem",
        background: "rgba( 255, 255, 255, 0.4 )",
        backdropFilter: "blur( 9.5px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        zIndex: 1000,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "2rem",
          fontWeight: "700",
          color: "rgb(56,59,64)",
        }}
      >
        Inversiones Dusan
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <HeaderLink href="#nosotros" label="Nosotros" />
        <HeaderLink href="#catalogo" label="Productos" />
        <HeaderLink href="#contactenos" label="Contactenos" />
        <Divider orientation="vertical" flexItem />
        <AccountCircleTwoToneIcon
          sx={{ fontSize: "2rem", color: "rgb(56,59,64)" }}
        />
        <ShoppingCartTwoToneIcon
          sx={{ fontSize: "2rem", color: "rgb(56,59,64)" }}
        />
      </Box>
    </Box>
  );
};

export default HeaderView;
