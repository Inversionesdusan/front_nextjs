import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = () => {
  const drawerContainer: SxProps<Theme> = {
    width: "450px",
    height: "100%",
    backgroundColor: colors.gradientGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingX: "2rem",
  };

  const headerBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingY: "1rem",
    borderBottom: `solid 1px ${colors.solidGreen}`,
  };

  const titleBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  };

  const title: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: "1rem",
    color: colors.solidGreen,
  };

  const subtitle: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.8rem",
    color: colors.solidGreen,
    marginBottom: "0.5rem",
  };

  const closeIcon: SxProps<Theme> = {
    color: colors.solidGreen,
    fontSize: "1.5rem",
  };

  const imageBox: SxProps<Theme> = {
    padding: "2rem",
    borderRadius: "80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const image: CSSProperties = {
    maxWidth: "250px",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const divider: SxProps<Theme> = {
    height: "1rem",
    width: "100%",
    borderBottom: `solid 1px ${colors.solidGreen}`,
    marginY: "1rem",
  };
  const lowInventoryText: SxProps<Theme> = {
    border: "solid 1px #FF8F39",
    background: "#FFF4EC",
    borderRadius: "5px",
    fontFamily: "Cunia",
    fontSize: "0.8rem",
    padding: "0.5rem",
    color: "#B95000",
  };

  return {
    drawerContainer,
    headerBox,
    titleBox,
    title,
    subtitle,
    closeIcon,
    imageBox,
    image,
    divider,
    lowInventoryText,
  };
};
