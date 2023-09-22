import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { styles } from "./CatalogCardStyles";
import { constantes } from "@/domain/constants";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface CatalogCardProps {
  producto: IProductoWithPricesDto;
  handleClickCarButton: (producto: IProductoWithPricesDto) => void;
  handleClickBuyButton: (producto: IProductoWithPricesDto) => void;
  showCartButton?: boolean;
  handleClickMoreButton?: (producto: IProductoWithPricesDto) => void;
}

const CatalogCard = ({
  producto,
  handleClickCarButton,
  handleClickBuyButton,
  showCartButton = true,
  handleClickMoreButton,
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
    typeProductBox,
    moreInfoIcon,
    lowInventoryText,
  } = styles(producto.imagen.urlThumbnail || "");

  const formatNumber = Intl.NumberFormat(constantes.locale);
  const precio = producto.precios[0].valor;
  const unidad = producto.precios[0].descripcionPres;
  const inventarioBajo =
    producto.manejaInventario === "S" && producto.precios[0].disponible <= 5;

  return (
    <Box sx={card}>
      <Box sx={typeProductBox}>
        <Typography sx={typeLabel}>{producto.tipo.descripcion}</Typography>
        {handleClickMoreButton && (
          <IconButton
            onClick={() => {
              handleClickMoreButton(producto);
            }}
          >
            <AddCircleOutlineIcon sx={moreInfoIcon} />
          </IconButton>
        )}
      </Box>
      <Typography sx={nameLabel}>{producto.nombreProducto}</Typography>
      <Box sx={productImage}>
        {inventarioBajo && (
          <Typography sx={lowInventoryText}>
            Pocas unidades disponibles
          </Typography>
        )}
      </Box>
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
      {showCartButton && (
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
      )}
    </Box>
  );
};

export default CatalogCard;
