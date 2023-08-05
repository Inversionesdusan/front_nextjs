import { colors } from "@/presentation/styles/colors";
import {
  Box,
  Grow,
  List,
  ListItem,
  ListItemButton,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styles } from "./DropDownMenuStyles";

export interface DropDownMenuOpion {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  label: string;
  handleClickOption: () => void;
}

export interface DropDownMenuProps {
  handleOpenMenu: () => void;
  openMenu: boolean;
  options: DropDownMenuOpion[];
}

const DropDownMenu = ({
  handleOpenMenu,
  openMenu,
  options,
}: DropDownMenuProps) => {
  const { menuContainer, listItemButton, listItemText } = styles();

  return (
    <div
      onClick={handleOpenMenu}
      style={{
        display: openMenu ? "block" : "none",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "transparent",
        zIndex: 2000,
      }}
    >
      <Grow
        in={openMenu}
        style={{ transformOrigin: "0" }}
        {...(openMenu ? { timeout: 600 } : {})}
      >
        <Box
          sx={{
            display: openMenu ? "block" : "none",
            background: colors.white,
            position: "fixed",
            width: "300px",
            zIndex: "1300 ",
            right: "5rem",
            top: "3.5rem",
            borderRadius: "20px 50px 20px 50px",
            boxShadow: "rgba(0,0,0,0.16) 0px 3px 6px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={menuContainer}
            role="presentation"
            onClick={handleOpenMenu}
            onKeyDown={handleOpenMenu}
          >
            <List sx={{ paddingLeft: "1rem" }}>
              {options.map((option, index) => (
                <ListItem key={"meuOption" + index} disablePadding>
                  <ListItemButton
                    sx={listItemButton}
                    onClick={option.handleClickOption}
                  >
                    <Typography sx={listItemText}>{option.label}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Grow>
    </div>
  );
};

export default DropDownMenu;
