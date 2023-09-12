import { IDetallePedidoDto } from "@/domain/models/Dto/IOrderDto";
import { useRouter } from "next/router";
import { styles } from "./DetailRowStyles";
import { constantes } from "@/domain/constants";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  CuniaBlack16400,
  MontserratGreen14400,
  MontserratGreen16700,
} from "@/presentation/styles/colors";

interface DetailRowViewProps {
  producto: IDetallePedidoDto;
}

const DetailRowView = ({ producto }: DetailRowViewProps) => {
  const router = useRouter();
  const { rowContainer, cell } = styles();
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
          <Typography sx={MontserratGreen14400}>{producto.tipo}</Typography>
          <Typography sx={MontserratGreen16700}>
            {producto.nombreProducto}
          </Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={MontserratGreen16700}>
            {producto.presentacion}
          </Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...MontserratGreen16700, textAlign: "right" }}>
            {"$" + formatNumber.format(producto.precio)}
          </Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...MontserratGreen16700, textAlign: "right" }}>
            {producto.cantidad}
          </Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...CuniaBlack16400, textAlign: "right" }}>
            {"$" + formatNumber.format(producto.precio * producto.cantidad)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailRowView;
