import { Box, Typography } from "@mui/material";
import { styles } from "./ShoppingCartDetailStyles";
import { CartItem } from "@/domain/models/store/CarItem";
import { constantes } from "@/domain/constants";
import QuantityComponent from "../common/QuantityComponent";

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
  console.log(product);

  const formatNumber = Intl.NumberFormat(constantes.locale);

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
        <Typography sx={cartRowPresentation}>
          ${formatNumber.format(product.value * product.quantity)}
        </Typography>
      </Box>
      <Box>
        <QuantityComponent
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
