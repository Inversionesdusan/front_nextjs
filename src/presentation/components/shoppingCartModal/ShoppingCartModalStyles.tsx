import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (url: string, open: boolean) => {
  const container: CSSProperties = {
    position: "fixed",
    background: "rgba(0,0,0,0.5)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1300,
    display: open ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalContainer: SxProps<Theme> = {
    width: "780px",
    background: colors.gradientGray,
    borderRadius: "2rem 7rem 2rem 7rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingX: "2rem",
    paddingY: "3rem",
    position: "relative",
  };

  const productImage: SxProps<Theme> = {
    height: "280px",
    width: "250px",
    borderRadius: "10px",
    backgroundImage: `url('https://backendmysql-production.up.railway.app${url}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  const infoContainer: SxProps<Theme> = {
    flex: 1,
    width: "100%",
    height: "100%",

    marginY: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingX: "1rem",
  };

  const productType: SxProps<Theme> = {
    fontFamily: "Montserrat",
    color: colors.solidGreen,
    fontWeight: "500",
    fontSize: "1rem",
  };

  const nameLabel: SxProps<Theme> = {
    fontFamily: "Cunia",
    color: colors.solidBlack,
    marginY: "0.25rem",
  };

  const description: SxProps<Theme> = {
    fontFamily: "Montserrat",
    color: colors.solidGreen,
    fontSize: "1rem",
    marginY: "0.5rem",
  };

  const dataRow: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginY: "0.5rem",
  };

  const dataText: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    color: colors.solidGreen,
    fontWeight: "700",
    flex: "1",
  };

  const priceLabel: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "1.25rem",
    color: colors.solidGreen,
    fontWeight: "700",
  };

  const qtyBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    flex: "1",
  };

  const selectBox: CSSProperties = {
    background: colors.lightGray,
    fontFamily: "Montserrat",
    fontSize: "1rem",
    color: colors.solidGreen,
    fontWeight: "700",
    border: "none",
    width: "150px",
  };

  const orderButton: SxProps<Theme> = {
    background: colors.mediumGray,
    color: colors.solidGreen,
    width: "100%",
    marginRight: "0.75rem",
    marginY: "2rem",
    borderRadius: "50px",
  };

  const labelOrderButton: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    textAlign: "center",
    fontWeight: "700",
    marginY: "auto",
  };

  const carButton: SxProps<Theme> = {
    background: colors.green,
    color: colors.white,
    width: "100%",
    marginLeft: "0.75rem",
    marginY: "2rem",
    borderRadius: "50px",
  };

  const labelCarButton: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    textAlign: "center",
    fontWeight: "700",
    marginY: "auto",
  };

  const iconClose: SxProps<Theme> = {
    padding: "0",
    color: colors.solidGreen,
    position: "absolute",
    top: "2rem",
    right: "4rem",
  };

  return {
    container,
    modalContainer,
    productImage,
    infoContainer,
    productType,
    nameLabel,
    description,
    priceLabel,
    selectBox,
    dataRow,
    dataText,
    qtyBox,
    orderButton,
    labelCarButton,
    labelOrderButton,
    carButton,
    iconClose,
  };
};
