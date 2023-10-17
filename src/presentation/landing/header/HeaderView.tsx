"use client";
import {
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { colors } from "@/presentation/styles/colors";
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
import ModalRegistro from "@/presentation/components/modalRegistro/ModalRegistro";
import ModalLogin from "@/presentation/components/modalLogin/ModalLogin";
import useAuthStore from "@/domain/store/useAuthStore";
import { useRouter } from "next/navigation";

interface HeaderViewProps {
  landing: boolean;
  handleOpenModalRegistro: () => void;
  openModalRegistro: boolean;
  handleOpenModalLogin: () => void;
  openModalLogin: boolean;
}

const HeaderView = ({
  landing,
  handleOpenModalLogin,
  openModalLogin,
  handleOpenModalRegistro,
  openModalRegistro,
}: HeaderViewProps) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const headerViewModel = Container.resolve(
    "HeaderViewModel"
  ) as IHeaderViewModelReturn;

  useEffect(() => {
    headerViewModel.loadItems();
    headerViewModel.loadUserData();
  }, []);

  const { navbar, iconBox, optionsBox, isologo, isotipo, menuBox, icon } =
    styles(downMd);

  const { authData } = useAuthStore();

  const openCloseModalLogin = () => {
    if (landing) return handleOpenModalLogin();
    headerViewModel.handleOpenModalLogin();
  };

  const openCloseModalRegistro = () => {
    if (landing) return handleOpenModalRegistro();
    headerViewModel.handleOpenModalRegistro();
  };

  const router = useRouter();

  const menuOptions: DropDownMenuOpion[] = [
    {
      label: "Registrarme",
      handleClickOption: openCloseModalRegistro,
    },
    {
      label: "Ingresar",
      handleClickOption: openCloseModalLogin,
    },
    //{
    //  label: "Mis Pedidos",
    //  handleClickOption: () => router.push("/pedidos/listado"),
    //},
  ];

  return (
    <>
      <Box sx={navbar}>
        <img
          src="/images/logos/Isologo.svg"
          alt="Logo Dusan"
          height={40}
          width={175}
          color={colors.white}
          style={isologo}
        />
        <img
          src="/images/logos/Isotipo.svg"
          alt="Logo Dusan"
          height={40}
          width={66}
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
          <IconButton onClick={headerViewModel.handleOpenCart}>
            <Badge
              badgeContent={headerViewModel?.shoppingCart?.length}
              color="primary"
            >
              <ShoppingCartTwoToneIcon sx={icon} />
            </Badge>
          </IconButton>
          <div onClick={headerViewModel.handleOpenDrawer}>
            <MenuTwoToneIcon sx={icon} />
          </div>
        </Box>
        <Box sx={iconBox}>
          {authData.isAuthenticated && authData.user.nombres && (
            <Typography>Hola, {authData.user.nombres}</Typography>
          )}
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
        options={
          headerViewModel &&
          authData.isAuthenticated &&
          headerViewModel.menuOptionsLogged
            ? headerViewModel.menuOptionsLogged
            : menuOptions
        }
      />
      <SideMenu
        open={headerViewModel.open}
        handleOpenDrawer={headerViewModel.handleOpenDrawer}
        landing={landing}
        options={
          headerViewModel &&
          authData.isAuthenticated &&
          headerViewModel.menuOptionsLogged
            ? headerViewModel.menuOptionsLogged
            : menuOptions
        }
      />
      <ShoppingCartDetail
        open={headerViewModel.openCart}
        handleOpenModal={headerViewModel.handleOpenCart}
      />
      <ModalRegistro
        open={landing ? openModalRegistro : headerViewModel.openModalRegistro}
        title="Registro"
        onClose={openCloseModalRegistro}
        onAccept={headerViewModel.registerClient}
        loadingData={headerViewModel.savingData}
        openModalLogin={openCloseModalLogin}
      />
      <ModalLogin
        open={landing ? openModalLogin : headerViewModel.openModalLogin}
        title="Ingreso"
        onClose={openCloseModalLogin}
        onAccept={headerViewModel.login}
        loadingData={headerViewModel.savingData}
        openModalRegister={openCloseModalRegistro}
      />
    </>
  );
};

export default HeaderView;
