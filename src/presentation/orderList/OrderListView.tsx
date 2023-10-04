import Container from "@/DI/Container";
import { useEffect } from "react";
import { IOrderListViewModel } from "./OrderListViewModel";
import { styles } from "./OrderListStyles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grow,
  Input,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import HeaderView from "../landing/header/HeaderView";
import { constantes } from "@/domain/constants";
import TableRowView from "./components/tableRow/TableRowView";
import TableHeaderView from "./components/tableHeader/TableHeaderView";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useRouter } from "next/router";
import useAuthStore from "@/domain/store/useAuthStore";
import Grid from "@mui/material/Unstable_Grid2";
import { inputLabel, inputStyle } from "../styles/theme";
import { Controller } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./orderListStyle.css";
import CardButton from "../components/common/CardButton";

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
    formContainer,
    accordion,
    accordionSummary,
    summaryLabel,
    details,
  } = styles();

  useEffect(() => {
    if (authData && authData.dataLoaded) {
      (async () => {
        await orderListVM.getPedidos(
          authData.user.tipoUsuario,
          authData.user.email
        );
      })();
    }
  }, [authData, authData.dataLoaded]);

  const tipoUsuario = authData.user.tipoUsuario;
  console.log("Tipo usuario -> ", tipoUsuario);

  return (
    <Box sx={container}>
      <HeaderView landing={false} />
      <Box sx={orderContainer}>
        <Box sx={headerBox}>
          <Box sx={titleBox}>
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
        {tipoUsuario === "Admin" && (
          <Accordion sx={accordion} expanded>
            <AccordionSummary sx={accordionSummary}>
              <Typography sx={summaryLabel}>Parámetros de búsqueda</Typography>
            </AccordionSummary>
            <AccordionDetails sx={details}>
              <Grid container columnSpacing={4} rowSpacing={2}>
                <Grid xs={12} sm={6}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="numeroPedido" sx={inputLabel} shrink>
                      Número Pedido
                    </InputLabel>
                    <Input
                      id="numeroPedido"
                      type="number"
                      sx={inputStyle}
                      {...orderListVM.formQueryParams.register("numeroPedido")}
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6}>
                  <FormControl fullWidth variant="standard">
                    <InputLabel
                      htmlFor="numeroDocumento"
                      sx={inputLabel}
                      shrink
                    >
                      Número documento
                    </InputLabel>
                    <Input
                      id="numeroDocumento"
                      type="number"
                      sx={inputStyle}
                      {...orderListVM.formQueryParams.register(
                        "numeroDocumento"
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Controller
                    name="fechaInicial"
                    control={orderListVM.formQueryParams.control}
                    defaultValue={null}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={
                            orderListVM.formQueryParams.getValues().fechaInicial
                          }
                          onChange={(date) => {
                            field.onChange(date!);
                          }}
                          renderInput={(props) => (
                            <FormControl fullWidth variant="standard">
                              <InputLabel
                                htmlFor="fechaInicial"
                                sx={inputLabel}
                                shrink
                              >
                                Fecha Desde
                              </InputLabel>
                              <TextField
                                variant="filled"
                                sx={inputStyle}
                                {...props}
                              />
                            </FormControl>
                          )}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <Controller
                    name="fechaFinal"
                    control={orderListVM.formQueryParams.control}
                    defaultValue={null}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={
                            orderListVM.formQueryParams.getValues().fechaFinal
                          }
                          onChange={(date) => {
                            field.onChange(date!);
                          }}
                          renderInput={(props) => (
                            <FormControl fullWidth variant="standard">
                              <InputLabel
                                htmlFor="fechaFinal"
                                sx={inputLabel}
                                shrink
                              >
                                Fecha Hasta
                              </InputLabel>
                              <TextField
                                variant="filled"
                                sx={{ ...inputStyle }}
                                {...props}
                              />
                            </FormControl>
                          )}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Grid>
                <Grid
                  xs={12}
                  display="flex"
                  direction="row"
                  sx={{
                    justifyContent: {
                      xs: "center",
                      md: "flex-end",
                      gap: "1rem",
                    },
                  }}
                >
                  <CardButton
                    label={"Limpiar"}
                    variant="black"
                    onClick={orderListVM.resetForm}
                    disabled={false}
                  />
                  <CardButton
                    label={"Buscar"}
                    variant="green"
                    onClick={() => {
                      orderListVM.getPedidos(tipoUsuario, authData.user.email);
                    }}
                    disabled={false}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        )}
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
              <TableHeaderView admin={tipoUsuario === "Admin"} />
              {orderListVM.pedidos.map((pedido) => (
                <TableRowView
                  key={pedido.id}
                  pedido={pedido}
                  admin={tipoUsuario === "Admin"}
                />
              ))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default OrderListView;
