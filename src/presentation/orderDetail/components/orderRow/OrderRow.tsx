import { Box, Grid, IconButton, Typography } from "@mui/material";
import { styles } from "./OrderRowStyles";
import {
  MonserratGreen16400,
  MontserratGreen14700,
  colors,
} from "@/presentation/styles/colors";
import { CuniaBlack16400 } from "../../../styles/colors";
import QuantityComponent from "@/presentation/components/common/QuantityComponent";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ProductoPedidos } from "@/domain/models/Dto/IProductoDto";
import { constantes } from "@/domain/constants";

interface OrderRowProps {
  index: number;
  item: ProductoPedidos;
  handleChangePresentation: (index: number, presentationId: number) => void;
  handleAddQty: (index: number) => void;
  handleRemoveQty: (index: number) => void;
  confirmRemoveItem: (index: number) => void;
}

const OrderRow = ({
  item,
  index,
  handleChangePresentation,
  handleAddQty,
  handleRemoveQty,
  confirmRemoveItem,
}: OrderRowProps) => {
  const {
    rowContainer,
    infoBox,
    productImage,
    dataBox,
    selectBox,
    priceLabel,
  } = styles(item.imagen.urlSmall || item.imagen.urlThumbnail || "");

  const formatNumber = Intl.NumberFormat(constantes.locale);

  return (
    <Box sx={rowContainer}>
      <Box sx={infoBox}>
        <Box sx={productImage}></Box>
        <Box sx={dataBox}>
          <Typography sx={MonserratGreen16400}>
            {item.quantity?.productTypeName}
          </Typography>
          <Typography sx={CuniaBlack16400}>{item.nombreProducto}</Typography>
        </Box>
        <Box sx={dataBox}>
          <Grid container columnSpacing={3}>
            <Grid item textAlign="right">
              <Typography sx={{ ...MontserratGreen14700, marginY: "0.75rem" }}>
                Precio
              </Typography>
              <Typography sx={{ ...MontserratGreen14700, marginY: "0.75rem" }}>
                Presentación
              </Typography>
              <Typography sx={{ ...MontserratGreen14700, marginY: "0.75rem" }}>
                Cantidad
              </Typography>
            </Grid>
            <Grid item textAlign="left">
              <Typography sx={{ ...MontserratGreen14700, marginY: "0.75rem" }}>
                $
                {formatNumber.format(
                  item.quantity!.value * item.quantity!.quantity
                )}
              </Typography>
              <Box sx={{ marginY: "0.75rem" }}>
                <select
                  style={selectBox}
                  value={item.quantity?.presentationId}
                  onChange={(e) => {
                    handleChangePresentation(index, parseInt(e.target.value));
                  }}
                >
                  {item.presentaciones.map((presentacion) => (
                    <option
                      style={priceLabel}
                      key={presentacion.id}
                      value={presentacion.id}
                    >
                      {presentacion.descripcion}
                    </option>
                  ))}
                </select>
              </Box>
              <Box sx={{ marginY: "0.75rem" }}>
                <QuantityComponent
                  quantity={item.quantity!.quantity}
                  addQty={() => {
                    handleAddQty(index);
                  }}
                  removeQty={() => {
                    handleRemoveQty(index);
                  }}
                  size="small"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={dataBox}>
          <IconButton
            sx={{ background: colors.lightGray }}
            onClick={() => confirmRemoveItem(index)}
          >
            <DeleteForeverIcon
              sx={{ color: colors.solidGreen, fontSize: "2rem" }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderRow;
