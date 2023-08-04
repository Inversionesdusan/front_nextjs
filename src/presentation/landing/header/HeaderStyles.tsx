import { colors } from "@/presentation/styles/colors";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (downMd: boolean) => {
  const navbar: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: "66px",
    position: "fixed",
    top: "0",
    width: "100%",
    paddingX: downMd ? "1rem" : "2rem",
    background: colors.black,
    zIndex: 1000,
  };

  const isologo: CSSProperties = {
    display: downMd ? "none" : "block",
  };

  const isotipo: CSSProperties = {
    display: downMd ? "block" : "none",
  };

  const optionsBox: CSSProperties = {
    display: downMd ? "none" : "flex",
    flexDirection: "row",
    gap: "0.5rem",
    alignItems: "center",
    alignContent: "center",
  };

  const iconBox: SxProps<Theme> = {
    display: downMd ? "none" : "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    color: colors.white,
  };

  const menuBox: SxProps<Theme> = {
    display: downMd ? "block" : "none",
  };

  const icon: SxProps<Theme> = { fontSize: "2rem", color: colors.white };

  return { navbar, iconBox, optionsBox, isologo, isotipo, menuBox, icon };
};
