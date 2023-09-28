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
    width: { xs: "360px", sm: "600px" },
    background: colors.gradientGray,
    top: "60px",
    right: { xs: "0", sm: "1rem" },
    border: colors.mediumGray,
    borderRadius: "30px 50px 30px 50px",
    paddingX: "0",
    paddingY: "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    zIndex: 1400,
    maxHeight: "calc(100vh - 70px)",
  };

  const cartRow: SxProps<Theme> = {
    width: "100%",
    height: { xs: "160px", sm: "130px" },
    background: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      transition: "all 0.3s ease",
      background: colors.mediumGray,
    },
    paddingX: { xs: "1.5rem", sm: "2rem" },
    paddingY: { sx: "0.5rem", sm: "0" },
  };

  const cartRowInfoSection: SxProps<Theme> = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    height: "100%",
    padding: "0",
    gap: { xs: "0.5rem", sm: "1rem" },
    justifyContent: "center",
    alignItems: "center",
    paddingY: "0.5rem",
  };

  const cartRowImage: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: "100px", sm: "110px" },
    width: { xs: "82px", sm: "90px" },
    backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${imageLink}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
  const cartRowInfo: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: "0.25rem",
    color: colors.solidGreen,
    width: { xs: "auto", sm: "210px" },
  };

  const cartRowInfoType: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    color: colors.solidGreen,
    fontWeight: "500",
    alignSelf: { xs: "center", sm: "start" },
  };
  const cartRowInfoName: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: { xs: "0.875rem", sm: "1rem" },
    color: colors.solidBlack,
    fontWeight: "300",
    alignSelf: { xs: "center", sm: "start" },
  };

  const cartRowPresentation: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: { xs: "0.875rem", sm: "1rem" },
    color: colors.solidGreen,
    fontWeight: "700",
    minWidth: { sx: "50px", sm: "110px" },
    textAlign: "right",
    paddingRight: { xs: "0", sm: "1rem" },
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
