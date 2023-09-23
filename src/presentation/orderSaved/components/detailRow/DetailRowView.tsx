import { IDetallePedidoDto } from "@/domain/models/Dto/IOrderDto";
import { useRouter } from "next/router";

import { constantes } from "@/domain/constants";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styles } from "./DetailRowStyles";

interface DetailRowViewProps {
  producto: IDetallePedidoDto;
}

const DetailRowView = ({ producto }: DetailRowViewProps) => {
  const router = useRouter();
  const { rowContainer, cell, typeLabel, dataText, priceLabel } = styles();
  const formatNumber = Intl.NumberFormat(constantes.locale);

  return (
    <Box sx={rowContainer}>
      <Grid
        container
        spacing={1}
        sx={{ width: "100%" }}
        justifyContent="space-between"
      >
        <Grid xs={4} sx={cell}>
          <Typography sx={typeLabel}>{producto.tipo}</Typography>
          <Typography sx={dataText}>{producto.nombreProducto}</Typography>
        </Grid>
        <Grid xs={3} sm={2} sx={cell}>
          <Typography
            sx={{ ...dataText, textAlign: { xs: "center", sm: "right" } }}
          >
            {producto.presentacion}
          </Typography>
          <Typography
            sx={{
              ...dataText,
              textAlign: { xs: "center", sm: "right" },
              display: { xs: "block", sm: "none" },
            }}
          >
            {"$" + formatNumber.format(producto.precio)}
          </Typography>
        </Grid>
        <Grid
          xs={2}
          sm={2}
          sx={{ ...cell, display: { xs: "none", sm: "block" } }}
        >
          <Typography sx={{ ...dataText, textAlign: "right" }}>
            {"$" + formatNumber.format(producto.precio)}
          </Typography>
        </Grid>
        <Grid xs={2} sm={2} sx={cell}>
          <Typography
            sx={{ ...dataText, textAlign: { xs: "center", sm: "right" } }}
          >
            {producto.cantidad}
          </Typography>
        </Grid>
        <Grid xs={3} sm={2} sx={cell}>
          <Typography sx={priceLabel}>
            {"$" + formatNumber.format(producto.precio * producto.cantidad)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailRowView;
