import { Box, Typography } from "@mui/material";
import { styles } from "./TableHeaderStyles";
import Grid from "@mui/material/Unstable_Grid2";

interface TableHeaderViewProps {
  admin?: boolean;
}

const TableHeaderView = ({ admin = false }: TableHeaderViewProps) => {
  const { container, cell, title } = styles();
  return (
    <Box sx={container}>
      <Grid
        container
        spacing={1}
        sx={{ width: "100%" }}
        justifyContent="space-between"
      >
        <Grid xs={3} md={admin ? 2 : 3} sx={cell}>
          <Typography sx={title}>Nro Pedido</Typography>
        </Grid>
        <Grid
          md={3}
          sx={{
            ...cell,
            display: { xs: "none", md: admin ? "block" : "none" },
          }}
        >
          <Typography sx={title}>Cliente</Typography>
        </Grid>
        <Grid xs={4} sm={3} md={admin ? 2 : 3} sx={cell}>
          <Typography sx={title}>Fecha Grabación</Typography>
        </Grid>
        <Grid xs={4} sm={2} md={2} sx={cell}>
          <Typography sx={{ ...title, textAlign: "right" }}>
            Valor Pedido
          </Typography>
        </Grid>
        <Grid
          xs={3}
          md={admin ? 2 : 3}
          sx={{ ...cell, display: { xs: "none", sm: "block" } }}
        >
          <Typography sx={{ ...title, textAlign: "right" }}>Estado</Typography>
        </Grid>
        <Grid xs={1} sx={cell}>
          <Typography sx={{ ...title, textAlign: "right" }}>Accion</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableHeaderView;
