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
import { MontserratWhite16700 } from "../styles/colors";
import ClientForm from "../components/clientForm/ClientForm";
import FooterView from "../landing/footer/FooterView";
import { useRouter } from "next/router";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

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

  console.log("proceso -> ", flow);
  const { menuOptions } = useMenuHook();
  const router = useRouter();

  const orderDetailVM = Container.resolve(
    "OrderDetailViewModel"
  ) as OrderDetailViewModelReturn;

  useEffect(() => {
    orderDetailVM.getProductos(flow);
  }, []);

  return (
    <Box sx={container}>
      <HeaderView menuOptions={menuOptions} landing={false} />
      <Box sx={orderContainer}>
        <Box sx={headerBox}>
          <Box sx={titleBox}>
            <Typography variant="h1" sx={title}>
              {constantes.orderDetail.pageTitle}
            </Typography>
          </Box>
          <CardButton
            label={constantes.orderDetail.catalogButtonLabel}
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
        ) : orderDetailVM.productosPedido &&
          orderDetailVM.productosPedido.length > 0 ? (
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
              <Box sx={formSection}>
                {orderDetailVM.orderForm && (
                  <ClientForm formRegister={orderDetailVM.orderForm} />
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
                  alignContent: "center",
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
      <FooterView />
    </Box>
  );
};

export default OrderDetail;
