import { Box, Grow, Typography, CircularProgress } from "@mui/material";
import { styles } from "./OrderDetailStyles";
import HeaderView from "../landing/header/HeaderView";
import useMenuHook from "@/domain/hooks/useMenuHook";
import CardButton from "../components/common/CardButton";
import { useEffect } from "react";
import OrderRow from "./components/orderRow/OrderRow";
import Container from "@/DI/Container";
import { OrderDetailViewModelReturn } from "./OrderDetailViewModel";
import { constantes } from "@/domain/constants";
import OrderSummary from "./components/orderSummary/OrderSummary";
import { colors, MontserratWhite16700 } from "../styles/colors";
import { useRouter } from "next/navigation";

const OrderDetail = () => {
  const {
    container,
    orderContainer,
    headerBox,
    titleBox,
    subtitle,
    title,
    detailBox,
    productDetailBox,
    summaryBox,
    boxNoData,
    progress,
    textEmptyState,
  } = styles();
  const { menuOptions } = useMenuHook();
  const router = useRouter();

  const orderDetailVM = Container.resolve(
    "OrderDetailViewModel"
  ) as OrderDetailViewModelReturn;

  useEffect(() => {
    orderDetailVM.getProductos();
  }, []);

  return (
    <Box sx={container}>
      <HeaderView menuOptions={menuOptions} landing={false} />
      <Box sx={orderContainer}>
        <Box sx={headerBox}>
          <Box sx={titleBox}>
            <Typography variant="h1" sx={title}>
              Detalle de Pedido
            </Typography>
            {/*<Typography sx={subtitle}>Nro : 28383</Typography>*/}
          </Box>
          <CardButton
            label="Ir al catálogo"
            variant="green"
            onClick={() => {
              router.push("/catalogo");
            }}
          />
        </Box>
        {orderDetailVM.loading ? (
          <Grow
            in={orderDetailVM.productosPedido.length === 0}
            style={{ transformOrigin: "0" }}
            timeout={500}
          >
            <Box sx={boxNoData}>
              <CircularProgress sx={progress} />
              <Typography sx={textEmptyState}>
                {constantes.catalog.loadingMessage}
              </Typography>
            </Box>
          </Grow>
        ) : (
          <Box sx={detailBox}>
            <Box sx={productDetailBox}>
              {orderDetailVM.productosPedido.map((item, index) => (
                <OrderRow
                  key={item.id}
                  item={item}
                  index={index}
                  handleChangePresentation={
                    orderDetailVM.handleChangePresentation
                  }
                  handleAddQty={orderDetailVM.handleAddQty}
                  handleRemoveQty={orderDetailVM.handleRemoveQty}
                  confirmRemoveItem={orderDetailVM.confirmRemoveItem}
                />
              ))}
            </Box>
            <Box sx={summaryBox}>
              <OrderSummary
                quantity={orderDetailVM.summaryData.cant}
                value={orderDetailVM.summaryData.valor}
              />
              <Box
                sx={{
                  margin: "1rem",
                  width: "100%",
                  minHeight: "100px",
                  background: colors.green,
                  borderRadius: "50px",
                  paddingX: "0.5rem",
                  paddingY: "2.5rem",
                }}
              >
                <Typography sx={{ ...MontserratWhite16700, paddingX: "1rem" }}>
                  Los precios especificados en el total del pedido NO Incluyen
                  el valor del flete
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OrderDetail;
