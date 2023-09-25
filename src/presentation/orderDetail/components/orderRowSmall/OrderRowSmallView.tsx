import { Box, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./OrderRowSmallStyles";
import Grid from "@mui/material/Unstable_Grid2";
import { ProductoPedidos } from "@/domain/models/Dto/IProductoDto";
import { constantes } from "@/domain/constants";
import QuantityComponent from "@/presentation/components/common/QuantityComponent";
import theme from "@/presentation/styles/theme";

interface OrderRowSmallViewProps {
  index: number;
  item: ProductoPedidos;
  handleChangePresentation: (index: number, presentationId: number) => void;
  handleAddQty: (index: number) => void;
  handleRemoveQty: (index: number) => void;
  confirmRemoveItem: (index: number) => void;
}

const OrderRowSmallView = ({
  item,
  handleChangePresentation,
  handleAddQty,
  handleRemoveQty,
  index,
  confirmRemoveItem,
}: OrderRowSmallViewProps) => {
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    rowContainer,
    productType,
    productName,
    productImage,
    selectBox,
    space,
    value,
  } = styles(item.imagen.urlSmall || item.imagen.urlThumbnail || "", downSm);

  const formatNumber = Intl.NumberFormat(constantes.locale);

  const removeItem = (index: number) => {
    if (item.quantity!.quantity === 1) {
      confirmRemoveItem(index);
    } else {
      handleRemoveQty(index);
    }
  };
  return (
    <Box sx={rowContainer}>
      <Grid container sx={{ padding: "0.5rem" }} rowSpacing={4}>
        <Grid
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box sx={productImage}></Box>
          <Box sx={space}></Box>
          <Typography sx={productType}>
            {item.quantity?.productTypeName}
          </Typography>
          <Typography sx={{ ...productName, alignSelf: "center" }}>
            {item.nombreProducto}
          </Typography>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            sx={{
              ...productName,
              alignSelf: "flex-start",
              marginBottom: "0.25rem",
            }}
          >
            Valor
          </Typography>
          <Typography sx={value}>
            $
            {formatNumber.format(
              item.quantity!.value * item.quantity!.quantity
            )}
          </Typography>
          <Typography
            sx={{
              ...productName,
              alignSelf: "flex-start",
              marginBottom: "0.25rem",
              marginTop: "0.75rem",
            }}
          >
            Presentación
          </Typography>
          <Box sx={{ alignSelf: "flex-end" }}>
            <select
              style={selectBox}
              value={item.quantity?.presentationId}
              onChange={(e) => {
                handleChangePresentation(index, parseInt(e.target.value));
              }}
            >
              {item.presentaciones.map((presentacion) => (
                <option key={presentacion.id} value={presentacion.id}>
                  {presentacion.descripcion}
                </option>
              ))}
            </select>
          </Box>
          <Typography
            sx={{
              ...productName,
              alignSelf: "flex-start",
              marginBottom: "0.25rem",
              marginTop: "0.75rem",
            }}
          >
            Cantidad
          </Typography>
          <Box sx={{ alignSelf: "flex-end" }}>
            <QuantityComponent
              quantity={item.quantity!.quantity}
              addQty={() => {
                handleAddQty(index);
              }}
              removeQty={() => {
                removeItem(index);
              }}
              size="small"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderRowSmallView;
