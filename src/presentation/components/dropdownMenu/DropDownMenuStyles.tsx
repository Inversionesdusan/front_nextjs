import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = () => {
  const menuContainer: SxProps<Theme> = {
    width: "100%",
    background: colors.lightGray,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  };

  const listItemButton: SxProps<Theme> = {
    background: colors.lightGray,
    "&:hover": {
      background: colors.lightGray,
    },
  };

  const listItemText: SxProps<Theme> = {
    paddingX: "1rem",
    fontFamily: "Montserrat",
    color: colors.solidGreen,
    "&:hover": {
      transition: "all 0.6s ease",
      fontWeight: "500",
      letterSpacing: "1px",
    },
  };

  return { menuContainer, listItemButton, listItemText };
};
