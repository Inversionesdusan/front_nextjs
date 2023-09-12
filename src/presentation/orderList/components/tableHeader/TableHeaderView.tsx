import { Box, Typography } from "@mui/material";
import { styles } from "./TableHeaderStyles";
import Grid from "@mui/material/Unstable_Grid2";
import { MontserratWhite16700 } from "@/presentation/styles/colors";

const TableHeaderView = () => {
  const { container, cell } = styles();
  return (
    <Box sx={container}>
      <Grid
        container
        spacing={1}
        sx={{ width: "100%" }}
        justifyContent="space-between"
      >
        <Grid xs={2} sx={cell}>
          <Typography sx={MontserratWhite16700}>Nro Pedido</Typography>
        </Grid>
        <Grid xs={3} sx={cell}>
          <Typography sx={MontserratWhite16700}>Fecha Grabación</Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...MontserratWhite16700, textAlign: "right" }}>
            Valor Pedido
          </Typography>
        </Grid>
        <Grid xs={3} sx={cell}>
          <Typography sx={{ ...MontserratWhite16700, textAlign: "right" }}>
            Estado
          </Typography>
        </Grid>
        <Grid xs={1} sx={cell}>
          <Typography sx={{ ...MontserratWhite16700, textAlign: "right" }}>
            Accion
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableHeaderView;
