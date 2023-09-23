import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = (openList: boolean) => {
  const labelSelectedBox: SxProps<Theme> = {
    width: "100%",
    height: "2rem",
    fontFamily: "Montserrat",
    fontSize: { xs: "0.875rem", sm: "1rem" },
    background: colors.white,
    color: colors.solidGreen,
    borderBottom: "1px solid " + colors.solidGreen,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "end",
    paddingBottom: "6px",
    position: "relative",
    paddingY: "4px",
    fontWeight: "500",
  };

  const listItemsBox: SxProps<Theme> = {
    display: openList ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    backgroundColor: colors.lightGray,
    transform: "translateY(101%)",
    border: "0.5px solid " + colors.solidGreen,
    zIndex: "900",
    borderBottomRightRadius: "1rem",
    borderBottomLeftRadius: "1rem",
    paddingY: "1rem",
    paddingX: "0.5rem",
    gap: "1rem",
  };

  const listRow: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontWeight: "500",
    height: "2rem",
    "&:hover": {
      fontWeight: "700",
      cursor: "pointer",
    },
  };

  const iconButton: SxProps<Theme> = {
    padding: "0",
    color: colors.solidGreen,
    backgroundColor: colors.lightGray,
  };

  return {
    labelSelectedBox,
    listItemsBox,
    listRow,
    iconButton,
  };
};
