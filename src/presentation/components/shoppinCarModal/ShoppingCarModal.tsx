import { Box, Button, Grow, IconButton, Typography } from "@mui/material";
import { styles } from "./ShoppingCarModalStyles";
import {
  IPrecioProd,
  IProductoWithPricesDto,
} from "@/domain/models/Dto/IProductoDto";
import { useState, useEffect } from "react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import QuantityComponent from "../common/QuantityComponent";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";

interface ShoppingCarModalProps {
  producto: IProductoWithPricesDto;
  open: boolean;
  handleClose: () => void;
  handleOrder: () => void;
  handleShoppingCar: (
    productId: number,
    presentationId: number,
    quantity: number
  ) => void;
}

const ShoppingCarModal = ({
  producto,
  open,
  handleClose,
  handleOrder,
  handleShoppingCar,
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
  } = styles(producto.imagen.urlThumbnail || "", open);

  useEffect(() => {
    if (producto.id) {
      setPrecioSeleccionado(producto.precios[0]);
      setCantidad(1);
    }
  }, [producto.id]);

  const listaPrecios = [...producto.precios];

  const formatNumber = Intl.NumberFormat("es-CO");

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
            <CancelRoundedIcon sx={{ fontSize: "2rem " }} />
          </IconButton>
          <Box sx={productImage}></Box>
          <Box sx={infoContainer}>
            <Typography sx={productType}>
              {producto.tipo.descripcion}
            </Typography>
            <Typography sx={nameLabel}>{producto.nombreProducto}</Typography>
            <Typography sx={description}>
              {
                "Acondicionador de suelos que se formula de acuerdo a las necesidades especificas del suelo y del cultivo al cual va dirigido. Se requiere de un analisis del suelo para realizar el estudio y formulacion adecuada"
              }
            </Typography>

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
            <Box sx={dataRow}>
              <Button
                startIcon={<InventoryRoundedIcon />}
                sx={orderButton}
                onClick={handleOrder}
              >
                <Typography sx={labelOrderButton}>Hacer Pedido</Typography>
              </Button>
              <Button
                startIcon={<AddShoppingCartIcon />}
                sx={carButton}
                onClick={() =>
                  handleShoppingCar(
                    producto.id,
                    precioSeleccionado!.idPresentacion,
                    cantidad
                  )
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

export default ShoppingCarModal;
