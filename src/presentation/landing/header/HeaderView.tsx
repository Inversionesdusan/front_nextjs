"use client";
import { Box } from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { colors } from "@/presentation/styles/colors";
import Image from "next/image";
import logo from "../../../../public/images/logos/Isologo.svg";
import { iconBox, navbar } from "./HeaderStyles";
import HeaderLink from "@/app/components/basic/HeaderLink";

const HeaderView = () => {
  return (
    <Box sx={navbar}>
      <Image src={logo} alt="Logo Dusan" height={45} color={colors.white} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <HeaderLink label="Inicio" href="#inicio" />
        <HeaderLink label="Productos" href="#catalogo" />
        <HeaderLink label="Nosotros" href="#nosotros" />
        <HeaderLink label="Contáctenos" href="#contactenos" />
      </Box>
      <Box sx={iconBox}>
        <AccountCircleTwoToneIcon
          sx={{ fontSize: "2rem", color: colors.white }}
        />
        <ShoppingCartTwoToneIcon
          sx={{ fontSize: "2rem", color: colors.white }}
        />
      </Box>
    </Box>
  );
};

export default HeaderView;
