import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CuniaWhite16400 } from "../../styles/colors";

export const styles = () => {
  const menuContainer: SxProps<Theme> = {
    width: 250,
    background:
      "linear-gradient(45deg, rgba(4,77,62,1) 0%, rgba(5,97,79,0.93) 78%)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  };

  const imageContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "66px",
    width: "100%",
    paddingX: "1rem",
    background: colors.black,
  };

  const listItemButton: SxProps<Theme> = {
    color: colors.white,
    fontFamily: "Montserrat",
    fontWeight: "400",
    width: "100%",
    "&:hover": {
      background: colors.lightGreen,
    },
  };

  const userLabel: SxProps<Theme> = {
    paddingX: "1rem",
    ...CuniaWhite16400,
  };

  const nameBox: SxProps<Theme> = {
    marginY: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  return {
    menuContainer,
    imageContainer,
    listItemButton,
    userLabel,
    nameBox,
  };
};
