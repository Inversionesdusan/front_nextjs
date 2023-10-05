import { constantes } from "@/domain/constants";
import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (url: string) => {
  const rowContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: "50px",
    paddingX: "2rem",
  };

  const infoBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    width: "100%",
  };

  const productImage: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
    width: "120px",
    backgroundImage: `url('${constantes.paths.BASE_URL_IMAGES}${url}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    margin: "auto",
  };

  const dataBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  };

  const selectBox: CSSProperties = {
    background: colors.lightGray,
    fontFamily: "Montserrat",
    fontSize: "0.875rem",
    color: colors.solidGreen,
    fontWeight: "700",
    border: "none",
    width: "150px",
    padding: "0.25rem",
  };

  const priceLabel: CSSProperties = {
    fontFamily: "Montserrat",
    fontSize: "0.875rem",
    color: colors.solidGreen,
    fontWeight: "700",
  };

  return {
    rowContainer,
    infoBox,
    productImage,
    dataBox,
    selectBox,
    priceLabel,
  };
};
