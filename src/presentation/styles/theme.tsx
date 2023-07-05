import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'Nunito',
        'Nunito Sans',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });
  
  export default theme;