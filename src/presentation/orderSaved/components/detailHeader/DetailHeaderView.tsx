import { Box, Typography } from "@mui/material";
import { styles } from "./DetailHeaderStyle";
import { MontserratWhite16700 } from "@/presentation/styles/colors";
import Grid from "@mui/material/Unstable_Grid2";

const DetailHeaderView = () => {
  const { container, cell } = styles();
  return (
    <Box sx={container}>
      <Grid
        container
        spacing={1}
        sx={{ width: "100%" }}
        justifyContent="space-between"
      >
        <Grid xs={4} sx={cell}>
          <Typography sx={MontserratWhite16700}>Nombre Producto</Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...MontserratWhite16700 }}>Presentación</Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...MontserratWhite16700, textAlign: "right" }}>
            Vlr Unitario
          </Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...MontserratWhite16700, textAlign: "right" }}>
            Cantidad
          </Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...MontserratWhite16700, textAlign: "right" }}>
            Vlr Total
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailHeaderView;
