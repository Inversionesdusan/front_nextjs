"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { colors } from "@/presentation/styles/colors";
import Image from "next/image";
import logo from "../../../../public/images/logos/Isologo.svg";
import isoTipo from "../../../../public/images/logos/Isotipo.svg";
import { styles } from "./HeaderStyles";
import HeaderLink from "@/app/components/basic/HeaderLink";
import { useState } from "react";
import SideMenu from "@/presentation/components/common/sidemenu/SideMenu";
import { constantes } from "@/domain/constants";

const HeaderView = () => {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const { navbar, iconBox, optionsBox, isologo, isotipo, menuBox, icon } =
    styles(downMd);

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={navbar}>
        <Image
          src={logo}
          alt="Logo Dusan"
          height={40}
          color={colors.white}
          style={isologo}
        />
        <Image
          src={isoTipo}
          alt="Logo Dusan"
          height={40}
          color={colors.white}
          style={isotipo}
        />
        <nav style={optionsBox}>
          {constantes.options.map((option) => (
            <HeaderLink
              key={option.section}
              label={option.label}
              href={option.section}
            />
          ))}
        </nav>
        <Box sx={menuBox}>
          <div onClick={handleOpenDrawer}>
            <MenuTwoToneIcon sx={icon} />
          </div>
        </Box>
        <Box sx={iconBox}>
          <AccountCircleTwoToneIcon sx={icon} />
          <ShoppingCartTwoToneIcon sx={icon} />
        </Box>
      </Box>
      <SideMenu open={open} handleOpenDrawer={handleOpenDrawer} />
    </>
  );
};

export default HeaderView;
