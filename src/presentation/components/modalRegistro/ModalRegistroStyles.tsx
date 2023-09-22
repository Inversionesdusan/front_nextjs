import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = () => {
  const modalDialog: SxProps<Theme> = {
    "& .MuiPaper-root": {
      background: colors.lightGray,
      minWidth: "340px",
      width: { md: "600px", xs: "90%" },
      maxWidth: { xs: "350px", sm: "500px", md: "600px" },
      borderRadius: {
        xs: "1rem 6rem 1rem 6rem",
        sm: "2rem 9rem 2rem 9rem",
      },
      paddingY: { xs: "3rem", sm: "3rem", md: "3rem" },
      paddingX: { xs: "2rem", sm: "3rem", md: "3rem" },
      overflow: "hidden",
      margin: "0",
    },
  };

  const inputStyle: SxProps = {
    fontFamily: "Montserrat",
    marginY: "1rem",
    fontSize: { xs: "1rem", xl: "1.25rem" },
    fontWeight: "300",
    color: colors.solidGreen,
    "&.MuiInputBase-root": {
      borderBottomColor: colors.solidGreen,
    },
    "&.MuiInputBase-root:hover": {
      borderBottomColor: colors.solidGreen,
    },
    "&.MuiInputBase-root:after": {
      borderBottomColor: colors.solidGreen,
    },
    "&.MuiInputBase-root:before": {
      borderBottomColor: colors.solidGreen,
    },
    "&.MuiInputBase-root:focus": {
      borderBottomColor: colors.solidGreen,
    },
    "&.MuiInputBase-root:hover:not(.Mui-disabled):before": {
      borderBottomColor: colors.solidGreen,
    },
  };

  const linkText: CSSProperties = {
    textAlign: "right",
    marginTop: "1rem",
    fontFamily: "Cunia",
    fontSize: "0.9rem",
    paddingRight: "1rem",
    cursor: "pointer",
  };

  return { modalDialog, inputStyle, linkText };
};
