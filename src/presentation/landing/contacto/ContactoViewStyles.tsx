import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

export const styles = (
  downSm: boolean,
  downMd: boolean,
  downLg: boolean,
  downXl: boolean
) => {
  const container: SxProps<Theme> = {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: "1rem",
    overflow: "hidden",
  };

  const formContainer: SxProps<Theme> = {
    position: "absolute",
    width: downLg ? "90vw" : "60vw",
    height: "780px",
    top: "120px",
    left: "50%",
    transform: "translateX(-50%)",
    background: colors.green,
    borderRadius: downSm ? "80px" : "285px 285px 600px 600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "3rem",
  };

  const title: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: downSm ? "1.5rem" : downMd ? "2.5rem" : downXl ? "3rem" : "4rem",
    fontWeight: "300",
    lineHeight: downSm ? "1.5rem" : downMd ? "2rem" : downXl ? "3rem" : "4rem",
  };

  const subTitle: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: downSm ? "1.25rem" : downXl ? "2rem" : "3rem",
    fontWeight: "600",
    lineHeight: downSm ? "1.5rem" : downXl ? "2.5rem" : "3rem",
    marginY: "0.5rem",
  };

  const message: SxProps<Theme> = {
    width: "80%",
    fontFamily: "Montserrat",
    fontSize: downMd ? "1rem" : downXl ? "1.25rem" : "1.5rem",
    fontWeight: "300",
    marginY: downXl ? "1.5rem" : "2rem",
  };

  const form: CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
    marginTop: downMd ? "1rem" : undefined,
  };

  const inputStyle: SxProps = {
    fontFamily: "Montserrat",
    fontSize: downSm ? "1rem" : downXl ? "1.25rem" : "1.5rem",
    fontWeight: "300",
    color: colors.white,
    "&.MuiInputBase-root": {
      borderBottomColor: colors.white,
    },
    "&.MuiInputBase-root:hover": {
      borderBottomColor: colors.white,
    },
    "&.MuiInputBase-root:after": {
      borderBottomColor: colors.white,
    },
    "&.MuiInputBase-root:before": {
      borderBottomColor: colors.white,
    },
    "&.MuiInputBase-root:focus": {
      borderBottomColor: colors.white,
    },
    "&.MuiInputBase-root:hover:not(.Mui-disabled):before": {
      borderBottomColor: colors.white,
    },
  };
  return {
    container,
    formContainer,
    title,
    subTitle,
    message,
    form,
    inputStyle,
  };
};
