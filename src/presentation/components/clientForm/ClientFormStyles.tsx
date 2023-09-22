import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = () => {
  const formContainer: SxProps<Theme> = {
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: "50px",
    paddingX: "3rem",
    paddingTop: "2.5rem",
    marginTop: "1rem",
    paddingBottom: "2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const inputStyle: SxProps<Theme> = {
    fontFamily: "Montserrat",
    marginY: "1rem",
    fontSize: "1rem",
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

  const clientLbelBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
  };

  return {
    formContainer,
    inputStyle,
    clientLbelBox,
  };
};
