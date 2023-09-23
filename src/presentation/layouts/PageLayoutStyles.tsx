import { SxProps, Theme } from "@mui/material";
import { colors } from "../styles/colors";

export const styles = () => {
  const layoutContainer: SxProps<Theme> = {
    marginTop: "66px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const content: SxProps<Theme> = {
    maxWidth: "1200px",
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  };

  const headerBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingY: "1rem",
    borderBottom: `solid 1px ${colors.solidGreen}`,
    gap: { xs: "0.5rem", sm: undefined },
  };

  const titleBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  };

  const titleSt: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem" },
    color: colors.solidGreen,
  };

  const subtitleSt: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem" },
    color: colors.solidGreen,
  };

  const titleButton: SxProps<Theme> = {
    width: "220px",
    height: "30px",
    background: colors.green,
    padding: "0.25rem",
    borderRadius: "50px",
  };

  const buttonLabel: SxProps<Theme> = {
    color: colors.white,
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    textAlign: "center",
    fontWeight: "700",
    marginY: "auto",
  };

  return {
    layoutContainer,
    content,
    headerBox,
    titleBox,
    titleSt,
    subtitleSt,
    titleButton,
    buttonLabel,
  };
};
