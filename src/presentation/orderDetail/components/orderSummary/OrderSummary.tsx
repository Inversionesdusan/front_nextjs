import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./OrderSummaryStyles";
import {
  MontserratWhite16400,
  MontserratWhite16700,
} from "@/presentation/styles/colors";
import { constantes } from "@/domain/constants";

interface OrderSummaryProps {
  quantity: number;
  value: number;
}

const OrderSummary = ({ quantity, value }: OrderSummaryProps) => {
  const { summaryContainer, summaryTitle } = styles();

  const formatNumber = Intl.NumberFormat(constantes.locale);

  return (
    <Box sx={summaryContainer}>
      <Typography sx={summaryTitle}>Resumen del Pedido</Typography>
      <Grid
        container
        direction="column"
        rowGap={1}
        sx={{ paddingX: "1rem", marginBottom: "1rem" }}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Typography sx={MontserratWhite16400}>Productos</Typography>
          <Typography sx={MontserratWhite16400}>
            {formatNumber.format(quantity)}
          </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Typography sx={MontserratWhite16400}>Total Pedido</Typography>
          <Typography sx={MontserratWhite16700}>
            ${formatNumber.format(value)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderSummary;
