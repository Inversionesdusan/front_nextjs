import { Box, Button, Grow, IconButton, Typography } from "@mui/material";
import { styles } from "./ShoppingCartModalStyles";
import {
  IPrecioProd,
  IProductoWithPricesDto,
} from "@/domain/models/Dto/IProductoDto";
import { useState, useEffect } from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import QuantityComponent from "../common/QuantityComponent";
import { constantes } from "@/domain/constants";
import { CartItem } from "@/domain/models/store/CarItem";

interface ShoppingCarModalProps {
  producto: IProductoWithPricesDto;
  open: boolean;
  handleClose: () => void;
  handleOrder: () => void;
  handleShoppingCart: (cartItem: CartItem) => void;
}

const ShoppingCartModal = ({
  producto,
  open,
  handleClose,
  handleOrder,
  handleShoppingCart,
}: ShoppingCarModalProps) => {
  const [precioSeleccionado, setPrecioSeleccionado] = useState<IPrecioProd>();
  const [cantidad, setCantidad] = useState<number>(0);

  const {
    container,
    modalContainer,
    productImage,
    infoContainer,
    productType,
    nameLabel,
    description,
    priceLabel,
    selectBox,
    dataRow,
    dataText,
    orderButton,
    labelCarButton,
    labelOrderButton,
    carButton,
    iconClose,
    buttonContainer,
  } = styles(producto.imagen.urlThumbnail || "", open);

  useEffect(() => {
    if (producto.id) {
      setPrecioSeleccionado(producto.precios[0]);
      setCantidad(1);
    }
  }, [producto.id]);

  const listaPrecios = [...producto.precios];

  const formatNumber = Intl.NumberFormat(constantes.locale);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(event.target.value);
    const newPrecio = listaPrecios.find(
      (precio) => precio.idPresentacion === id
    );
    newPrecio && setPrecioSeleccionado(newPrecio);
  };

  const addQty = () => {
    setCantidad(cantidad + 1);
  };

  const removeQty = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div style={container}>
      <Grow
        in={open}
        style={{ transformOrigin: "0" }}
        {...(open ? { timeout: 600 } : {})}
      >
        <Box sx={modalContainer}>
          <IconButton sx={iconClose} onClick={handleClose}>
            <CancelRoundedIcon
              sx={{ fontSize: { xs: "1.5rem", md: "2rem " } }}
            />
          </IconButton>
          <Box sx={productImage}></Box>
          <Box sx={infoContainer}>
            <Typography sx={productType}>
              {producto.tipo.descripcion}
            </Typography>
            <Typography sx={nameLabel}>{producto.nombreProducto}</Typography>
            <Typography sx={description}>{producto.descripcion}</Typography>
            {precioSeleccionado && (
              <Box sx={dataRow}>
                <Typography sx={dataText}>Precio</Typography>
                <Typography sx={dataText}>
                  {"$ " +
                    formatNumber.format(precioSeleccionado.valor * cantidad)}
                </Typography>
              </Box>
            )}
            {precioSeleccionado && (
              <Box sx={dataRow}>
                <Typography sx={dataText}>Presentación</Typography>
                <Typography sx={dataText}>
                  <select
                    style={selectBox}
                    value={precioSeleccionado.idPresentacion.toString()}
                    onChange={handleSelectChange}
                  >
                    {listaPrecios.map((precio) => (
                      <option
                        key={precio.idPresentacion}
                        value={precio.idPresentacion.toString()}
                      >
                        <Typography sx={priceLabel}>
                          {precio.descripcionPres}
                        </Typography>
                      </option>
                    ))}
                  </select>
                </Typography>
              </Box>
            )}
            <Box sx={dataRow}>
              <Typography sx={dataText}>Cantidad</Typography>
              <QuantityComponent
                quantity={cantidad}
                addQty={addQty}
                removeQty={removeQty}
              />
            </Box>
            <Box sx={buttonContainer}>
              <Button sx={orderButton} onClick={handleClose}>
                <Typography sx={labelOrderButton}>Cancelar</Typography>
              </Button>
              <Button
                sx={carButton}
                onClick={() =>
                  handleShoppingCart({
                    productTypeId: producto.tipo.id,
                    productTypeName: producto.tipo.descripcion,
                    productId: producto.id,
                    poductName: producto.nombreProducto,
                    imageUrl:
                      producto.imagen.urlSmall ||
                      producto.imagen.urlThumbnail ||
                      "",
                    presentationId: precioSeleccionado!.idPresentacion,
                    presentationName: precioSeleccionado?.descripcionPres || "",
                    quantity: cantidad,
                    value: precioSeleccionado?.valor || 0,
                  })
                }
              >
                <Typography sx={labelCarButton}>Agregar al Carrito</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Grow>
    </div>
  );
};

export default ShoppingCartModal;
