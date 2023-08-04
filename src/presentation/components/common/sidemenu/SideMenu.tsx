import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { colors } from "../../../styles/colors";
import Image from "next/image";
import logo from "../../../../../public/images/logos/Isologo.svg";
import { styles } from "./SideMenuStyles";
import { constantes } from "@/domain/constants";
import MenuItem from "./MenuItem";

interface SideMenuProps {
  open: boolean;
  handleOpenDrawer: () => void;
}

const SideMenu = ({ open, handleOpenDrawer }: SideMenuProps) => {
  const { menuContainer, imageContainer, listItemButton } = styles();

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={handleOpenDrawer}
      onOpen={handleOpenDrawer}
    >
      <Box
        sx={menuContainer}
        role="presentation"
        onClick={handleOpenDrawer}
        onKeyDown={handleOpenDrawer}
      >
        <Box sx={imageContainer}>
          <Image src={logo} alt="Logo Dusan" height={40} color={colors.white} />
        </Box>
        <List>
          {constantes.options.map((option) => (
            <MenuItem
              key={"MeIt-" + option.section}
              to={option.section}
              label={option.section}
              handleOpenDrawer={handleOpenDrawer}
            />
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={listItemButton}>
              <ListItemText primary="Ingresar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={listItemButton}>
              <ListItemText primary="Carrito de compras" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default SideMenu;
