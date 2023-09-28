import { Box, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./ShoppingCartDetailStyles";
import { CartItem } from "@/domain/models/store/CarItem";
import { constantes } from "@/domain/constants";
import QuantityComponent from "../common/QuantityComponent";
import theme from "@/presentation/styles/theme";

interface ShoppingCartProduct {
  index: number;
  product: CartItem;
  handleAddQty: (index: number) => void;
  handleRemoveQty: (index: number) => void;
}

const ShoppingCartProduct = ({
  product,
  index,
  handleAddQty,
  handleRemoveQty,
}: ShoppingCartProduct) => {
  const {
    cartRow,
    cartRowImage,
    cartRowInfo,
    cartRowInfoSection,
    cartRowInfoType,
    cartRowInfoName,
    cartRowPresentation,
  } = styles(true, product.imageUrl);

  const formatNumber = Intl.NumberFormat(constantes.locale);
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={cartRow}>
      <Box sx={cartRowInfoSection}>
        <Box sx={cartRowImage}></Box>
        <Box sx={cartRowInfo}>
          <Typography sx={cartRowInfoType}>
            {product.productTypeName}
          </Typography>
          <Typography sx={cartRowInfoName}>{product.poductName}</Typography>
        </Box>
        {!downSm && (
          <Typography sx={cartRowPresentation}>
            ${formatNumber.format(product.value * product.quantity)}
          </Typography>
        )}
      </Box>
      <Box sx={{ textAlign: "right" }}>
        {downSm && (
          <Typography
            sx={{
              ...cartRowPresentation,
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            ${formatNumber.format(product.value * product.quantity)}
          </Typography>
        )}
        <QuantityComponent
          size="small"
          quantity={product.quantity}
          addQty={() => {
            handleAddQty(index);
          }}
          removeQty={() => {
            handleRemoveQty(index);
          }}
        />
      </Box>
    </Box>
  );
};

export default ShoppingCartProduct;
