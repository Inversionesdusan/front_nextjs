import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Nunito",
      "Nunito Sans",
      "Arial",
      "sans-serif",
      "Cunia",
    ].join(","),
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
