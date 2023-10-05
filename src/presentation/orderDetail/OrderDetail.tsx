import {
  Box,
  Grow,
  Typography,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./OrderDetailStyles";
import CardButton from "../components/common/CardButton";
import { useEffect } from "react";
import OrderRow from "./components/orderRow/OrderRow";
import Container from "@/DI/Container";
import { OrderDetailViewModelReturn } from "./OrderDetailViewModel";
import { constantes } from "@/domain/constants";
import OrderSummary from "./components/orderSummary/OrderSummary";
import { MontserratWhite16700 } from "../styles/colors";
import ClientForm from "../components/clientForm/ClientForm";
import { useRouter } from "next/router";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import OrderRowSmallView from "./components/orderRowSmall/OrderRowSmallView";
import theme from "../styles/theme";

interface OrderDetailProps {
  flow?: string;
}

const OrderDetail = ({ flow = "cart" }: OrderDetailProps) => {
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
    formSection,
    disclaimer,
    iconEmptyState,
  } = styles();

  const router = useRouter();

  const orderDetailVM = Container.resolve(
    "OrderDetailViewModel"
  ) as OrderDetailViewModelReturn;

  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    orderDetailVM.getProductos(flow);
  }, []);

  useEffect(() => {
    if (orderDetailVM.authData && orderDetailVM.authData.isAuthenticated) {
      orderDetailVM.getUserData();
    }
  }, [orderDetailVM.authData]);

  return (
    <Box sx={container}>
      <Box sx={orderContainer}>
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
        ) : orderDetailVM.productosPedido &&
          orderDetailVM.productosPedido.length > 0 ? (
          <Box sx={detailBox}>
            <Box sx={productDetailBox}>
              {!downLg &&
                orderDetailVM.productosPedido.map((item, index) => (
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
              {downLg &&
                orderDetailVM.productosPedido.map((item, index) => (
                  <OrderRowSmallView
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
              <Box sx={formSection}>
                {orderDetailVM.orderForm && (
                  <ClientForm
                    formRegister={orderDetailVM.orderForm}
                    copyField={orderDetailVM.copyField}
                    handleOpenModalRegister={() => {}}
                  />
                )}
              </Box>
            </Box>
            <Box sx={summaryBox}>
              <OrderSummary
                quantity={orderDetailVM.summaryData.cant}
                value={orderDetailVM.summaryData.valor}
              />
              <Box sx={disclaimer}>
                <Typography sx={{ ...MontserratWhite16700, paddingX: "1rem" }}>
                  {constantes.orderDetail.disclaimer}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardButton
                  label={constantes.orderDetail.createButtonLabel}
                  variant="black"
                  onClick={orderDetailVM.createOrderVerification}
                  disabled={orderDetailVM.savingData}
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <Grow in style={{ transformOrigin: "0" }} timeout={500}>
            <Box sx={boxNoData}>
              <RemoveShoppingCartOutlinedIcon sx={iconEmptyState} />
              <Typography sx={textEmptyState}>
                {constantes.orderDetail.emptyCart}
              </Typography>
            </Box>
          </Grow>
        )}
      </Box>
    </Box>
  );
};

export default OrderDetail;
