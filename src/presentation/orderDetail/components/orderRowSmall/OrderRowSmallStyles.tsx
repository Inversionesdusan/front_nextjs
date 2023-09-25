import {
  CuniaBlack16400,
  MonserratGreen16400,
  MontserratGreen14700,
  colors,
} from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (url: string, downSm: boolean) => {
  const rowContainer: SxProps<Theme> = {
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: "30px",
    width: "100%",
    minHeight: "100px",
    padding: "1.5rem",
  };

  const productType: SxProps<Theme> = {
    ...MonserratGreen16400,
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
    },
    alignSelf: "center",
  };

  const productName: SxProps<Theme> = {
    ...CuniaBlack16400,
    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
  };

  const value: SxProps<Theme> = {
    ...MontserratGreen14700,
    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
    alignSelf: "flex-end",
  };

  const productImage: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: "105px", sm: "150px" },
    width: { xs: "85px", sm: "120px" },
    backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${url}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    margin: "auto",
    background: colors.gray,
  };

  const selectBox: CSSProperties = {
    background: colors.lightGray,
    fontFamily: "Montserrat",
    fontSize: downSm ? "0.75rem" : "1rem",
    color: colors.solidGreen,
    fontWeight: "700",
    border: "none",
    padding: "0.25rem",
  };
  const space: SxProps<Theme> = {
    width: "100%",
    height: { xs: "0.5rem", sm: "1rem" },
  };

  return {
    rowContainer,
    productType,
    productName,
    productImage,
    selectBox,
    space,
    value,
  };
};
