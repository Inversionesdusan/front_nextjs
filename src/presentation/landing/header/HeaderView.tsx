"use client";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
        <Box sx={optionsBox}>
          <HeaderLink label="Inicio" href="#inicio" />
          <HeaderLink label="Productos" href="#catalogo" />
          <HeaderLink label="Nosotros" href="#nosotros" />
          <HeaderLink label="Contáctenos" href="#contactenos" />
        </Box>
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
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={handleOpenDrawer}
        onOpen={handleOpenDrawer}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleOpenDrawer}
          onKeyDown={handleOpenDrawer}
        >
          <List>
            <ListItem key="inicio" disablePadding>
              <ListItemButton>
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>
            <ListItem key="productos" disablePadding>
              <ListItemButton>
                <ListItemText primary="Productos" />
              </ListItemButton>
            </ListItem>
            <ListItem key="nosotros" disablePadding>
              <ListItemButton>
                <ListItemText primary="Nosotros" />
              </ListItemButton>
            </ListItem>
            <ListItem key="contactenos" disablePadding>
              <ListItemButton>
                <ListItemText primary="Contáctenos" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            {["Ingresar", "Carrito de Compras"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default HeaderView;
