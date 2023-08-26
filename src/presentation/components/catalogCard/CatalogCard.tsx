import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./CatalogCardStyles";
import { constantes } from "@/domain/constants";

interface CatalogCardProps {
  producto: IProductoWithPricesDto;
  handleClickCarButton: (producto: IProductoWithPricesDto) => void;
  handleClickBuyButton: (producto: IProductoWithPricesDto) => void;
}

const CatalogCard = ({
  producto,
  handleClickCarButton,
  handleClickBuyButton,
}: CatalogCardProps) => {
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

  const formatNumber = Intl.NumberFormat(constantes.locale);
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
      <Button
        sx={moreButton}
        onClick={() => {
          handleClickBuyButton(producto);
        }}
      >
        <Typography sx={labelMoreButton}>
          {constantes.catalog.detailButtonLabel}
        </Typography>
      </Button>
      <Button
        sx={carButton}
        onClick={() => {
          handleClickCarButton(producto);
        }}
      >
        <Typography sx={labelCarButton}>
          {constantes.catalog.addItemButtonLabel}
        </Typography>
      </Button>
    </Box>
  );
};

export default CatalogCard;