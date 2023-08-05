"use client";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
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
import { constantes } from "@/domain/constants";
import SideMenu from "../../components/sidemenu/SideMenu";
import Container from "@/DI/Container";
import { IHeaderViewModelReturn } from "./HeaderViewModel";
import DropDownMenu, {
  DropDownMenuOpion,
} from "@/presentation/components/dropdownMenu/DropDownMenu";

interface HeaderViewProps {
  menuOptions: DropDownMenuOpion[];
}

const HeaderView = ({ menuOptions }: HeaderViewProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const headerViewModel = Container.resolve(
    "HeaderViewModel"
  ) as IHeaderViewModelReturn;

  const { navbar, iconBox, optionsBox, isologo, isotipo, menuBox, icon } =
    styles(downMd);

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
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
          <IconButton onClick={handleOpenMenu}>
            <AccountCircleTwoToneIcon sx={icon} />
          </IconButton>
          <ShoppingCartTwoToneIcon sx={icon} />
        </Box>
      </Box>
      <DropDownMenu
        handleOpenMenu={handleOpenMenu}
        openMenu={openMenu}
        options={menuOptions}
      />
      <SideMenu open={open} handleOpenDrawer={handleOpenDrawer} />
    </>
  );
};

export default HeaderView;
