import Container from "@/DI/Container";
import { useEffect } from "react";
import { IOrderListViewModel } from "./OrderListViewModel";
import { styles } from "./OrderListStyles";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import HeaderView from "../landing/header/HeaderView";
import { constantes } from "@/domain/constants";
import TableRowView from "./components/tableRow/TableRowView";
import TableHeaderView from "./components/tableHeader/TableHeaderView";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useRouter } from "next/router";
import useAuthStore from "@/domain/store/useAuthStore";

const OrderListView = () => {
  const orderListVM = Container.resolve(
    "OrderListViewModel"
  ) as IOrderListViewModel;
  const router = useRouter();
  const { authData } = useAuthStore();

  const {
    container,
    orderContainer,
    headerBox,
    titleBox,
    subtitle,
    title,
    buyButton,
    buttonLabel,
    tableBox,
    boxNoData,
    progress,
    textEmptyState,
    tableContainer,
    controlsBox,
    iconEmptyState,
  } = styles();

  useEffect(() => {
    if (authData && authData.dataLoaded) {
      (async () => {
        await orderListVM.getPedidos(authData.user.email);
      })();
    }
  }, [authData, authData.dataLoaded]);

  return (
    <Box sx={container}>
      <HeaderView landing={false} />
      <Box sx={orderContainer}>
        <Box sx={headerBox}>
          <Box sx={titleBox}>
            <Typography sx={subtitle}>
              {authData && authData.user.email}
            </Typography>
            <Typography variant="h1" sx={title}>
              {constantes.orderList.title}
            </Typography>
          </Box>
          <Button
            sx={buyButton}
            onClick={() => {
              router.push("/catalogo");
            }}
          >
            <Typography sx={buttonLabel}>Ir al catálogo</Typography>
          </Button>
        </Box>
        <Box sx={tableBox}>
          {orderListVM.loadingPedidos ? (
            <Grow in style={{ transformOrigin: "0" }} timeout={500}>
              <Box sx={boxNoData}>
                <CircularProgress sx={progress} />
                <Typography sx={textEmptyState}>
                  {constantes.orderList.loadingMessage}
                </Typography>
              </Box>
            </Grow>
          ) : orderListVM.pedidos.length === 0 ? (
            <Grow in style={{ transformOrigin: "0" }} timeout={500}>
              <Box sx={boxNoData}>
                <PlaylistRemoveIcon sx={iconEmptyState} />
                <Typography sx={textEmptyState}>
                  {constantes.orderList.emptyStateMessage}
                </Typography>
              </Box>
            </Grow>
          ) : (
            <Box sx={tableContainer}>
              <Box sx={controlsBox}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="pageRowsLabel">Registros</InputLabel>
                  <Select
                    labelId="pageRowsLabel"
                    id="pageRows"
                    value={orderListVM.paginationData.pageSize.toString()}
                    label="Registros"
                    onChange={orderListVM.handleChangeSelect}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                  </Select>
                </FormControl>
                <Pagination
                  count={orderListVM.paginationData.pageCount}
                  variant="outlined"
                  size="large"
                  page={orderListVM.paginationData.page}
                  onChange={orderListVM.handlePaginationChange}
                />
              </Box>
              <TableHeaderView />
              {orderListVM.pedidos.map((pedido) => (
                <TableRowView key={pedido.id} pedido={pedido} />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderListView;
