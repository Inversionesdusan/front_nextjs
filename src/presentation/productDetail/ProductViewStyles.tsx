import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";
import { colors } from "../styles/colors";

export const styles = (url: string, downSm: boolean) => {
  const container: SxProps<Theme> = {
    marginTop: "66px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const productContainer: SxProps<Theme> = {
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
    gap: "1rem",
  };

  const titleBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  };

  const title: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem" },
    color: colors.solidGreen,
  };

  const subtitle: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem" },
    color: colors.solidGreen,
  };

  const productInfo: SxProps<Theme> = {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    paddingY: "1rem",
    gap: "2rem",
    marginTop: "2rem",
  };

  const imageBox: SxProps<Theme> = {
    flex: { xs: undefined, md: "2" },
    padding: "2rem",
    borderRadius: "80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  };

  const infoBox: SxProps<Theme> = {
    flex: "3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
    boxSizing: "border-box",
  };

  const image: CSSProperties = {
    maxWidth: "300px",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const dataRow: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginY: { xs: "0.25rem", sm: "0.5rem" },
  };

  const dataText: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: { xs: "0.875rem", sm: "0.925rem", md: "1.125rem" },
    color: colors.solidGreen,
    fontWeight: "700",
    flex: "1",
    width: "100%",
  };

  const selectBox: CSSProperties = {
    background: colors.lightGray,
    fontFamily: "Montserrat",
    fontSize: downSm ? "0.875rem" : "1.125rem",
    color: colors.solidGreen,
    fontWeight: "700",
    border: "none",
    width: "150px",
    padding: "0.25rem",
  };

  const priceLabel: CSSProperties = {
    fontFamily: "Montserrat",
    fontSize: downSm ? "0.875rem" : "1.125rem",
    color: colors.solidGreen,
    fontWeight: "700",
  };

  const shoppingCarButton: SxProps<Theme> = {
    width: "220px",
    height: "30px",
    background: colors.black,
    padding: "0.25rem",
    borderRadius: "50px",
  };

  const buyButton: SxProps<Theme> = {
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

  const detailBox: SxProps<Theme> = {
    borderTop: `solid 1px ${colors.solidGreen}`,
    marginTop: "2rem",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    paddingY: "2rem",
    gap: "2rem",
  };

  const detailItem: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    flex: 1,
    width: { xs: "100%", md: "50%" },
    justifyContent: "start",
  };

  const productSliderContainer: SxProps<Theme> = {
    borderTop: `solid 1px ${colors.solidGreen}`,
    marginTop: "2rem",
    padding: { xs: "0.75rem", md: "2rem" },
    width: "100%",
  };
  const space: SxProps<Theme> = {
    width: "100%",
    background: "transparent",
    height: { xs: "1.25rem", md: "0" },
  };

  return {
    container,
    productContainer,
    titleBox,
    title,
    subtitle,
    productInfo,
    imageBox,
    image,
    infoBox,
    dataRow,
    dataText,
    selectBox,
    priceLabel,
    shoppingCarButton,
    buyButton,
    buttonLabel,
    detailBox,
    detailItem,
    headerBox,
    productSliderContainer,
    space,
  };
};
