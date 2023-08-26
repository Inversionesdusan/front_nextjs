import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (open: boolean, imageLink: string = "") => {
  const container: CSSProperties = {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    background: "rgba(0,0,0,0.5)",
    zIndex: 1300,
    display: open ? "flex" : "none",
  };

  const cartContainer: SxProps<Theme> = {
    position: "absolute",
    width: "650px",
    background: colors.gradientGray,
    top: "60px",
    right: "1rem",
    border: colors.mediumGray,
    borderRadius: "30px 50px 30px 50px",
    paddingX: "0",
    paddingY: "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    zIndex: 1400,
  };

  const cartRow: SxProps<Theme> = {
    width: "100%",
    height: "130px",
    background: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      transition: "all 0.3s ease",
      background: colors.mediumGray,
    },
    paddingX: "2rem",
  };

  const cartRowInfoSection: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    padding: "0",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  };

  const cartRowImage: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "110px",
    width: "90px",
    backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${imageLink}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    margin: "auto",
  };
  const cartRowInfo: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: "0.25rem",
    color: colors.solidGreen,
    width: "230px",
  };

  const cartRowInfoType: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    color: colors.solidGreen,
    fontWeight: "500",
  };
  const cartRowInfoName: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: "1rem",
    color: colors.solidBlack,
    fontWeight: "300",
  };

  const cartRowPresentation: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    color: colors.solidGreen,
    fontWeight: "700",
    textAlign: "left",
  };

  return {
    container,
    cartContainer,
    cartRow,
    cartRowImage,
    cartRowInfoSection,
    cartRowInfo,
    cartRowInfoType,
    cartRowInfoName,
    cartRowPresentation,
  };
};
