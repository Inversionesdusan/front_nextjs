import { Box, Typography } from "@mui/material";
import { styles } from "./DetailHeaderStyle";
import Grid from "@mui/material/Unstable_Grid2";

const DetailHeaderView = () => {
  const { container, cell, title } = styles();
  return (
    <Box sx={container}>
      <Grid
        container
        spacing={1}
        sx={{ width: "100%" }}
        justifyContent="space-between"
      >
        <Grid xs={4} sx={cell}>
          <Typography sx={title}>Nombre Producto</Typography>
        </Grid>
        <Grid xs={3} sm={2} sx={cell}>
          <Typography
            sx={{
              ...title,
              textAlign: { xs: "center", sm: "right" },
              display: { xs: "block", sm: "none" },
            }}
          >
            Pres.
          </Typography>
          <Typography
            sx={{
              ...title,
              textAlign: { xs: "center", sm: "right" },
              display: { xs: "none", sm: "block" },
            }}
          >
            Presentación
          </Typography>
        </Grid>
        <Grid
          xs={2}
          sm={2}
          sx={{ ...cell, display: { xs: "none", sm: "block" } }}
        >
          <Typography sx={{ ...title, textAlign: "right" }}>
            Vlr Unitario
          </Typography>
        </Grid>
        <Grid xs={2} sm={2} sx={cell}>
          <Typography
            sx={{
              ...title,
              textAlign: { xs: "center", sm: "right" },
              display: { xs: "block", sm: "none" },
            }}
          >
            Cant.
          </Typography>
          <Typography
            sx={{
              ...title,
              textAlign: { xs: "center", sm: "right" },
              display: { xs: "none", sm: "block" },
            }}
          >
            Cantidad
          </Typography>
        </Grid>
        <Grid xs={3} sm={2} sx={cell}>
          <Typography sx={{ ...title, textAlign: "right" }}>
            Vlr Total
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailHeaderView;
