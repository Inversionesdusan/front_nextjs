import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { colors } from "../../styles/colors";
import Image from "next/image";
import logo from "../../../../public/images/logos/Isologo.svg";
import { styles } from "./SideMenuStyles";
import { constantes } from "@/domain/constants";
import MenuItem from "./MenuItem";
import { DropDownMenuOpion } from "../dropdownMenu/DropDownMenu";
import useAuthStore from "@/domain/store/useAuthStore";

interface SideMenuProps {
  open: boolean;
  handleOpenDrawer: () => void;
  landing: boolean;
  options: DropDownMenuOpion[];
}

const SideMenu = ({
  open,
  handleOpenDrawer,
  landing,
  options,
}: SideMenuProps) => {
  const { menuContainer, imageContainer, listItemButton, userLabel, nameBox } =
    styles();
  const { authData } = useAuthStore();
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
        {authData.isAuthenticated && authData.user.nombres && (
          <>
            <Box sx={nameBox}>
              <Typography sx={userLabel}>Hola,</Typography>
              <Typography sx={userLabel}>{authData.user.nombres}</Typography>
            </Box>
            <Divider />
          </>
        )}
        <List>
          {constantes.options.map((option) => (
            <MenuItem
              key={"MeIt-" + option.section}
              to={option.section}
              label={option.label}
              handleOpenDrawer={handleOpenDrawer}
              landing={landing}
            />
          ))}
        </List>
        <Divider />
        <List>
          {options.map((option, index) => (
            <ListItem key={"meuOption" + index} disablePadding>
              <ListItemButton
                sx={listItemButton}
                onClick={option.handleClickOption}
              >
                <Typography sx={listItemButton}>{option.label}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default SideMenu;
