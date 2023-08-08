import { Box, Button, Typography } from "@mui/material";
import { IProductoDto } from "../../../domain/models/Dto/IProductoDto";
import { styles } from "./ProductCardStyles.";

export interface ProductCardProps {
  producto: IProductoDto;
  position: "center" | "topLeft" | "topRigth" | "bottomLeft" | "bottomRigth";
  downXl: boolean;
}

const ProductCard = ({ producto, position, downXl }: ProductCardProps) => {
  const {
    cardContainer,
    productName,
    labelProductName,
    productImage,
    button,
    buttonLabel,
    buttonContainer,
  } = styles(downXl, position, producto.imagen.urlThumbnail);

  return (
    <Box sx={cardContainer}>
      <Box sx={productName}>
        <Typography sx={labelProductName}>{producto.nombreProducto}</Typography>
      </Box>
      <Box sx={productImage}></Box>
      <Box sx={buttonContainer}>
        <Button sx={button} href="/catalogo">
          <Typography sx={buttonLabel}>Ver catálogo</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
