import useAppStore from "@/domain/store/useStore";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { styles } from "./MoreInfoStyles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import ComposicionView from "@/presentation/productDetail/components/composicion/ComposicionView";
import Descripcion from "@/presentation/productDetail/components/descripcion/Descripcion";
import VentajasView from "@/presentation/productDetail/components/ventajas/VentajasView";
import { constantes } from "@/domain/constants";

interface MoreInfoViewProps {
  open: boolean;
  onClose: (producto?: IProductoWithPricesDto) => void;
}

const MoreInfoView = ({ open, onClose }: MoreInfoViewProps) => {
  const { selectedProduct } = useAppStore();

  const {
    drawerContainer,
    headerBox,
    titleBox,
    title,
    subtitle,
    closeIcon,
    imageBox,
    image,
    divider,
    lowInventoryText,
  } = styles();

  const inventarioBajo =
    selectedProduct &&
    selectedProduct.manejaInventario === "S" &&
    selectedProduct.precios[0].disponible <= 5;

  return (
    <Drawer anchor="right" open={open} onClose={() => {}}>
      {selectedProduct ? (
        <Box sx={drawerContainer}>
          <Box sx={headerBox}>
            <Box sx={titleBox}>
              <Typography sx={subtitle}>
                {selectedProduct!.tipo.descripcion}
              </Typography>
              <Typography variant="h1" sx={title}>
                {selectedProduct!.nombreProducto}
              </Typography>
            </Box>
            <IconButton
              onClick={() => {
                onClose();
              }}
            >
              <HighlightOffIcon sx={closeIcon} />
            </IconButton>
          </Box>
          <Box sx={imageBox}>
            <img
              style={image}
              src={`${constantes.paths.BASE_URL_IMAGES}${
                selectedProduct?.imagen?.url || ""
              }`}
              alt={selectedProduct?.nombreProducto}
            />
          </Box>
          {inventarioBajo && (
            <Typography sx={lowInventoryText}>
              Pocas unidades disponibles
            </Typography>
          )}

          <Box sx={divider}></Box>
          <Descripcion
            text={selectedProduct.descripcion}
            label="Descripción del Producto"
            type="Drawer"
          />

          <ComposicionView producto={selectedProduct} type="Drawer" />
          <Box sx={divider}></Box>
          <VentajasView text={selectedProduct.ventajas} type="Drawer" />
        </Box>
      ) : (
        <>Cargando ...</>
      )}
    </Drawer>
  );
};

export default MoreInfoView;
