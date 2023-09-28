import { SxProps, Theme, createTheme } from "@mui/material";
import { colors } from "./colors";
import type {} from "@mui/x-date-pickers/themeAugmentation";

const theme = createTheme({
  components: {
    MuiDatePicker: {},
  },
  typography: {
    fontFamily: ["Montserrat", "Nunito", "Nunito Sans", "Cunia"].join(","),
  },
  palette: {
    common: {
      black: "#262626",
      white: "F2F2F2",
    },
    primary: {
      main: "#115945",
      light: "#17785C",
      dark: "0D4635",
      contrastText: "#F2F2F2",
    },
    secondary: {
      main: "#262626",
    },
  },
});

export default theme;

export const inputStyle: SxProps<Theme> = {
  fontFamily: "Montserrat",
  marginY: "1rem",
  fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
  fontWeight: "300",
  color: colors.solidGreen,
  "&.MuiInputBase-root": {
    borderBottomColor: colors.solidGreen,
    color: colors.solidGreen,
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

export const inputLabel: SxProps<Theme> = {
  fontFamily: "Cunia",
  fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
  color: colors.solidGreen,
  "&.MuiInputLabel-root": {
    fontFamily: "Cunia",
    color: colors.solidGreen,
  },
};
