import { colors } from "@/presentation/styles/colors";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const navbar: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",
  height: "66px",
  position: "fixed",
  top: "0",
  width: "100%",
  paddingX: "3rem",
  background: colors.black,
  zIndex: 1000,
};

export const iconBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  color: colors.white,
};
