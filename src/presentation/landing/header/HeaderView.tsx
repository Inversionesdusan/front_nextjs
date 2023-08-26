"use client";
import { Badge, Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { colors } from "@/presentation/styles/colors";
import Image from "next/image";
import logo from "../../../../public/images/logos/Isologo.svg";
import isoTipo from "../../../../public/images/logos/Isotipo.svg";
import { styles } from "./HeaderStyles";
import HeaderLink from "@/app/components/basic/HeaderLink";
import { useEffect } from "react";
import { constantes } from "@/domain/constants";
import SideMenu from "../../components/sidemenu/SideMenu";
import Container from "@/DI/Container";
import { IHeaderViewModelReturn } from "./HeaderViewModel";
import DropDownMenu, {
  DropDownMenuOpion,
} from "@/presentation/components/dropdownMenu/DropDownMenu";
import ShoppingCartDetail from "@/presentation/components/shoppingCartDetail/ShoppingCartDetail";

interface HeaderViewProps {
  menuOptions: DropDownMenuOpion[];
  landing: boolean;
}

const HeaderView = ({ menuOptions, landing }: HeaderViewProps) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const headerViewModel = Container.resolve(
    "HeaderViewModel"
  ) as IHeaderViewModelReturn;

  useEffect(() => {
    headerViewModel.loadItems();
  }, []);

  const { navbar, iconBox, optionsBox, isologo, isotipo, menuBox, icon } =
    styles(downMd);

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
              landing={landing}
            />
          ))}
        </nav>
        <Box sx={menuBox}>
          <div onClick={headerViewModel.handleOpenDrawer}>
            <MenuTwoToneIcon sx={icon} />
          </div>
        </Box>
        <Box sx={iconBox}>
          <IconButton onClick={headerViewModel.handleOpenMenu}>
            <AccountCircleTwoToneIcon sx={icon} />
          </IconButton>
          <IconButton onClick={headerViewModel.handleOpenCart}>
            <Badge
              badgeContent={headerViewModel?.shoppingCart?.length}
              color="primary"
            >
              <ShoppingCartTwoToneIcon sx={icon} />
            </Badge>
          </IconButton>
        </Box>
      </Box>
      <DropDownMenu
        handleOpenMenu={headerViewModel.handleOpenMenu}
        openMenu={headerViewModel.openMenu}
        options={menuOptions}
      />
      <SideMenu
        open={headerViewModel.open}
        handleOpenDrawer={headerViewModel.handleOpenDrawer}
      />
      <ShoppingCartDetail
        open={headerViewModel.openCart}
        handleOpenModal={headerViewModel.handleOpenCart}
      />
    </>
  );
};

export default HeaderView;
