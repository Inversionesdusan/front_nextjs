import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { Box, Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import { styles } from "./CatalogCardStyles";

interface CatalogCardProps {
  producto: IProductoWithPricesDto;
}

const CatalogCard = ({ producto }: CatalogCardProps) => {
  const {
    card,
    typeLabel,
    nameLabel,
    productImage,
    moreButton,
    labelMoreButton,
    carButton,
    labelCarButton,
    priceLabel,
  } = styles(producto.imagen.urlThumbnail || "");

  const formatNumber = Intl.NumberFormat("es-CO");
  const precio = producto.precios[0].valor;
  const unidad = producto.precios[0].descripcionPres;

  return (
    <Box sx={card}>
      <Typography sx={typeLabel}>{producto.tipo.descripcion}</Typography>
      <Typography sx={nameLabel}>{producto.nombreProducto}</Typography>
      <Box sx={productImage}></Box>
      <Typography sx={priceLabel}>
        {precio > 0 ? `$${formatNumber.format(precio)} - ${unidad}` : unidad}
      </Typography>
      <Button startIcon={<AddIcon />} sx={moreButton}>
        <Typography sx={labelMoreButton}>Ver Detalle</Typography>
      </Button>
      <Button startIcon={<AddShoppingCartIcon />} sx={carButton}>
        <Typography sx={labelCarButton}>Agregar al Carrito</Typography>
      </Button>
    </Box>
  );
};

export default CatalogCard;
