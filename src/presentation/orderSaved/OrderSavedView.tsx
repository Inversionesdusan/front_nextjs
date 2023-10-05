import Container from "@/DI/Container";
import { styles } from "./OrderSavedStyles";
import {
  Box,
  FormControl,
  Input,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { IOrderSavedViewModel } from "./OrderSavedViewModel";
import DataRow from "./components/DataRow";
import { constantes } from "@/domain/constants";
import DetailHeaderView from "./components/detailHeader/DetailHeaderView";
import DetailRowView from "./components/detailRow/DetailRowView";
import Grid from "@mui/material/Unstable_Grid2";
import { MonserratGreen16400 } from "../styles/colors";
import CardButton from "../components/common/CardButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import "./inputOrderStyle.css";

const OrderSavedView = () => {
  const { container, clientDataBox, labelBox, sectionBox, sectionTitle } =
    styles();
  const orderSavedVM = Container.resolve(
    "OrderSavedViewModel"
  ) as IOrderSavedViewModel;

  const formatNumber = Intl.NumberFormat(constantes.locale);

  let tipoUsuario = orderSavedVM.authData.user.tipoUsuario || "Cliente";

  return (
    <>
      {orderSavedVM.order &&
        orderSavedVM.order &&
        orderSavedVM.order.id &&
        orderSavedVM.order.id > 0 && (
          <Box sx={container}>
            <Typography sx={sectionTitle}>Datos del Pedido</Typography>
            <Box sx={sectionBox}>
              <Grid container rowSpacing={1} columnSpacing={2}>
                <DataRow
                  label="Nro Pedido"
                  value={orderSavedVM.order.id.toString()}
                />
                <DataRow
                  label="Fecha Pedido"
                  strong
                  value={orderSavedVM.order.fechaGrabacion}
                />
                <DataRow label="Estado" value={orderSavedVM.order.estado}>
                  {tipoUsuario === "Admin" ? (
                    <FormControl variant="standard">
                      <Select
                        disabled={false}
                        id="estado"
                        value={orderSavedVM.selectedEstado}
                        {...orderSavedVM.formOrderData.register("estado", {
                          required: {
                            value: true,
                            message: "Seleccione el estado del pedido",
                          },
                        })}
                      >
                        {constantes.estados.map((estado) => (
                          <MenuItem
                            key={estado}
                            value={estado}
                            sx={MonserratGreen16400}
                          >
                            {estado}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : undefined}
                </DataRow>
                <DataRow
                  label="Valor Total"
                  strong
                  value={
                    "$" + formatNumber.format(orderSavedVM.order.valorTotal)
                  }
                />
                <DataRow
                  label="Transportadora"
                  value={orderSavedVM.order.transportadora || "-"}
                >
                  {tipoUsuario === "Admin" && (
                    <FormControl variant="standard">
                      <Input
                        disabled={false}
                        id="transportadora"
                        type="text"
                        {...orderSavedVM.formOrderData.register(
                          "transportadora"
                        )}
                      />
                    </FormControl>
                  )}
                </DataRow>
                <DataRow
                  label="Valor Flete"
                  strong
                  value={
                    orderSavedVM.order.valorFlete
                      ? "$" + formatNumber.format(orderSavedVM.order.valorFlete)
                      : "-"
                  }
                >
                  {tipoUsuario === "Admin" && (
                    <FormControl variant="standard">
                      <Input
                        disabled={false}
                        id="valorFlete"
                        type="number"
                        {...orderSavedVM.formOrderData.register("valorFlete")}
                      />
                    </FormControl>
                  )}
                </DataRow>
                <DataRow
                  label="Pagado"
                  value={orderSavedVM.order.pagado || "-"}
                >
                  {tipoUsuario === "Admin" ? (
                    <FormControl variant="filled">
                      <Select
                        id="pagado"
                        value={orderSavedVM.selectedPagado}
                        {...orderSavedVM.formOrderData.register("pagado")}
                      >
                        <MenuItem value="N" sx={MonserratGreen16400}>
                          {"No"}
                        </MenuItem>
                        <MenuItem value="S" sx={MonserratGreen16400}>
                          {"Si"}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  ) : undefined}
                </DataRow>
                <DataRow
                  label="Fecha Pago"
                  value={orderSavedVM.order.fechaPago || "-"}
                >
                  {tipoUsuario === "Admin" && (
                    <Controller
                      name="fechaPago"
                      control={orderSavedVM.formOrderData.control}
                      defaultValue={null}
                      render={({ field }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={
                              orderSavedVM.formOrderData.getValues().fechaPago
                            }
                            disablePast
                            onChange={(date) => {
                              field.onChange(date!);
                            }}
                            renderInput={(props) => <TextField {...props} />}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  )}
                </DataRow>
                <DataRow
                  label="Transac. Pago"
                  value={orderSavedVM.order.transaccionPago || "-"}
                >
                  {tipoUsuario === "Admin" && (
                    <FormControl variant="standard">
                      <Input
                        disabled={false}
                        id="transaccionPago"
                        type="text"
                        {...orderSavedVM.formOrderData.register(
                          "transaccionPago"
                        )}
                      />
                    </FormControl>
                  )}
                </DataRow>
                <DataRow
                  label="Fecha Despacho"
                  value={orderSavedVM.order.fechaRealDespacho || "-"}
                >
                  {tipoUsuario === "Admin" && (
                    <Controller
                      name="fechaRealDespacho"
                      control={orderSavedVM.formOrderData.control}
                      defaultValue={null}
                      render={({ field }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={
                              orderSavedVM.formOrderData.getValues()
                                .fechaRealDespacho
                            }
                            disablePast
                            onChange={(date) => {
                              field.onChange(date!);
                            }}
                            renderInput={(props) => <TextField {...props} />}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  )}
                </DataRow>
                <DataRow
                  label="Fecha Entrega"
                  value={orderSavedVM.order.fechaRealEntrega || "-"}
                >
                  {tipoUsuario === "Admin" && (
                    <Controller
                      name="fechaRealEntrega"
                      control={orderSavedVM.formOrderData.control}
                      defaultValue={null}
                      render={({ field }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={
                              orderSavedVM.formOrderData.getValues()
                                .fechaRealEntrega
                            }
                            disablePast
                            onChange={(date) => {
                              field.onChange(date!);
                            }}
                            renderInput={(props) => <TextField {...props} />}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  )}
                </DataRow>
                {tipoUsuario === "Admin" && (
                  <Grid
                    xs={12}
                    md={12}
                    display="flex"
                    direction="row"
                    sx={{
                      justifyContent: { xs: "center", md: "flex-start" },
                      marginTop: "0.5rem",
                    }}
                  >
                    <CardButton
                      label={"Actualizar"}
                      variant="green"
                      onClick={orderSavedVM.verifyUpdateOrderData}
                      disabled={false}
                    />
                  </Grid>
                )}
              </Grid>
            </Box>
            <Typography sx={sectionTitle}>Información del Cliente</Typography>
            <Box sx={sectionBox}>
              <Grid container rowSpacing={1} columnSpacing={2}>
                <DataRow
                  label="Tipo documento"
                  value={orderSavedVM.order.datosCliente.tipoDocumento || ""}
                />
                <DataRow
                  label="Num documento"
                  value={
                    orderSavedVM.order.numeroDocumento +
                    (orderSavedVM.order.datosCliente.digitoVerificacion &&
                    orderSavedVM.order.datosCliente.digitoVerificacion.length >
                      0
                      ? ` - ${orderSavedVM.order.datosCliente.digitoVerificacion}`
                      : "")
                  }
                />
                <DataRow
                  label="Apellidos"
                  value={orderSavedVM.order.datosCliente.apellidos || ""}
                />

                <DataRow
                  label="Nombres"
                  value={orderSavedVM.order.datosCliente.nombres || ""}
                />

                <DataRow
                  label="Email"
                  value={orderSavedVM.order.emailCliente}
                />
                <DataRow
                  label="Celular"
                  value={orderSavedVM.order.datosCliente.telefono || ""}
                />
                <DataRow
                  label="Direccion"
                  value={orderSavedVM.order.direccion.direccion}
                />
                <DataRow
                  label="Complemento"
                  value={orderSavedVM.order.direccion.complemento || ""}
                />
                <DataRow
                  label="Departamento"
                  value={orderSavedVM.order.direccion.departamento}
                />
                <DataRow
                  label="Ciudad"
                  value={orderSavedVM.order.direccion.ciudad}
                />
                <DataRow
                  label="Barrio"
                  value={orderSavedVM.order.direccion.barrio || ""}
                />
              </Grid>
            </Box>
            <Typography sx={sectionTitle}>Dirección de envío</Typography>
            <Box sx={sectionBox}>
              <Grid container rowSpacing={1} columnSpacing={2}>
                <DataRow
                  label="Direccion"
                  value={orderSavedVM.order.direccionEnvio.direccion}
                />
                <DataRow
                  label="Complemento"
                  value={orderSavedVM.order.direccionEnvio.complemento || ""}
                />
                <DataRow
                  label="Departamento"
                  value={orderSavedVM.order.direccionEnvio.departamento}
                />
                <DataRow
                  label="Ciudad"
                  value={orderSavedVM.order.direccionEnvio.ciudad}
                />
                <DataRow
                  label="Barrio"
                  value={orderSavedVM.order.direccionEnvio.barrio || ""}
                />
              </Grid>
            </Box>
            <DetailHeaderView />
            {orderSavedVM.order.detallePedido.map((producto) => (
              <DetailRowView
                key={producto.nombreProducto}
                producto={producto}
              />
            ))}
          </Box>
        )}
    </>
  );
};

export default OrderSavedView;
