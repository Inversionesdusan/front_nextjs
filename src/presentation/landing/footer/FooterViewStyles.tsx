import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (downMd: boolean) => {
  const footerContainer: SxProps<Theme> = {
    width: "100%",
    height: "344px",
    background: colors.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingX: "2rem",
    textAlign: "center",
  };

  const textType: SxProps<Theme> = {
    color: colors.white,
    fontFamily: "Montserrat",
    fontSize: downMd ? "1rem" : "1.25rem",
    marginTop: "1rem",
    fontWeight: "300",
    alignSelf: "center",
  };

  const textObjeto: SxProps<Theme> = {
    color: colors.white,
    fontFamily: "Montserrat",
    fontSize: downMd ? "1rem" : "1.25rem",
    fontWeight: "300",
    alignSelf: "center",
    marginTop: downMd ? "0.5rem" : "0",
  };

  const divider: CSSProperties = {
    background: colors.white,
    width: "90%",
    maxWidth: "800px",
    padding: "0",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontWeight: "300",
  };

  const iconContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    marginTop: "1rem",
  };

  return { footerContainer, textType, textObjeto, divider, iconContainer };
};
