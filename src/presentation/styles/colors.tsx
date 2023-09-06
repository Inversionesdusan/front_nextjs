import { SxProps, Theme } from "@mui/material";

export const colors = {
  solidGreen: "#044D3E",
  green: "linear-gradient(45deg, rgba(4,77,62,1) 0%, rgba(5,97,79,0.93) 78%)", //"#044D3E", //"#115945",
  lightGreen: "#568C7D",
  white: "#F2F2F2",
  gray: "#8C8C8C",
  gradientGray:
    "linear-gradient(25deg, rgba(242,242,242,1) 0%, rgba(235,235,235,0.99) 78%)",
  mediumGray: "#D6D6D6",
  lightGray: "#EBEBEB",
  black: "linear-gradient(25deg, rgba(38,38,38,1) 0%, rgba(61,61,61,0.99) 78%)", //"#262626",
  solidBlack: "#262626",
};

export const MonserratGreen20400: SxProps<Theme> = {
  fontFamily: "Montserrat",
  fontSize: "1.25rem",
  color: colors.solidGreen,
  fontWeight: "400",
};

export const MonserratGreen16400: SxProps<Theme> = {
  fontFamily: "Montserrat",
  fontSize: "1rem",
  color: colors.solidGreen,
  fontWeight: "400",
};

export const MontserratGreen16700: SxProps<Theme> = {
  fontFamily: "Montserrat",
  fontSize: "1rem",
  color: colors.solidGreen,
  fontWeight: "700",
};

export const MontserratWhite16700: SxProps<Theme> = {
  fontFamily: "Montserrat",
  fontSize: "1rem",
  color: colors.white,
  fontWeight: "700",
};

export const MontserratWhite16400: SxProps<Theme> = {
  fontFamily: "Montserrat",
  fontSize: "1rem",
  color: colors.white,
  fontWeight: "400",
};

export const MontserratGreen14700: SxProps<Theme> = {
  fontFamily: "Montserrat",
  fontSize: "0.875rem",
  color: colors.solidGreen,
  fontWeight: "700",
};

export const CuniaBlack20400: SxProps<Theme> = {
  fontFamily: "Cunia",
  fontSize: "1.25rem",
  color: colors.solidBlack,
  fontWeight: "400",
};

export const CuniaBlack16400: SxProps<Theme> = {
  fontFamily: "Cunia",
  fontSize: "1rem",
  color: colors.solidBlack,
  fontWeight: "400",
};

export const CuniaWhite16400: SxProps<Theme> = {
  fontFamily: "Cunia",
  fontSize: "1rem",
  color: colors.white,
  fontWeight: "400",
};

export const CuniaGreen16400: SxProps<Theme> = {
  fontFamily: "Cunia",
  fontSize: "1rem",
  color: colors.solidGreen,
  fontWeight: "400",
};
