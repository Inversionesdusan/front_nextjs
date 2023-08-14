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
import { useEffect, useState } from "react";
import { constantes } from "@/domain/constants";
import SideMenu from "../../components/sidemenu/SideMenu";
import Container from "@/DI/Container";
import { IHeaderViewModelReturn } from "./HeaderViewModel";
import DropDownMenu, {
  DropDownMenuOpion,
} from "@/presentation/components/dropdownMenu/DropDownMenu";
import useAppStore from "@/domain/store/useStore";
import { CartItem } from "@/domain/models/store/CarItem";

interface HeaderViewProps {
  menuOptions: DropDownMenuOpion[];
  landing: boolean;
}

const HeaderView = ({ menuOptions, landing }: HeaderViewProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { shoppingCart, initializeCart } = useAppStore();

  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const headerViewModel = Container.resolve(
    "HeaderViewModel"
  ) as IHeaderViewModelReturn;

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem(constantes.keys.shoppingCar) || "[]"
    ) as CartItem[];
    initializeCart(data);
  }, []);

  const { navbar, iconBox, optionsBox, isologo, isotipo, menuBox, icon } =
    styles(downMd);

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  console.log("carrito de compras en el header -> ", shoppingCart);

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
          <div onClick={handleOpenDrawer}>
            <MenuTwoToneIcon sx={icon} />
          </div>
        </Box>
        <Box sx={iconBox}>
          <IconButton onClick={handleOpenMenu}>
            <AccountCircleTwoToneIcon sx={icon} />
          </IconButton>
          <IconButton>
            <Badge badgeContent={shoppingCart.length} color="primary">
              <ShoppingCartTwoToneIcon sx={icon} />
            </Badge>
          </IconButton>
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
