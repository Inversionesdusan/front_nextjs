import Container from "@/DI/Container";
import { styles } from "./OrderSavedStyles";
import { Box, Typography } from "@mui/material";
import { IOrderSavedViewModel } from "./OrderSavedViewModel";
import DataRow from "./components/DataRow";
import { constantes } from "@/domain/constants";
import DetailHeaderView from "./components/detailHeader/DetailHeaderView";
import DetailRowView from "./components/detailRow/DetailRowView";
import Grid from "@mui/material/Unstable_Grid2";

const OrderSavedView = () => {
  const { container, clientDataBox, labelBox, sectionBox, sectionTitle } =
    styles();
  const orderSavedVM = Container.resolve(
    "OrderSavedViewModel"
  ) as IOrderSavedViewModel;

  const formatNumber = Intl.NumberFormat(constantes.locale);

  return (
    <>
      {orderSavedVM.order &&
      orderSavedVM.order &&
      orderSavedVM.order.id &&
      orderSavedVM.order.id > 0 ? (
        <Box sx={container}>
          <Typography sx={sectionTitle}>Datos del Pedido</Typography>
          <Box sx={sectionBox}>
            <Grid container rowSpacing={1}>
              <DataRow
                label="Nro Pedido"
                value={orderSavedVM.order.id.toString()}
              />
              <DataRow
                label="Fecha Pedido"
                strong
                value={orderSavedVM.order.fechaGrabacion}
              />
              <DataRow label="Estado" value={orderSavedVM.order.estado} />
              <DataRow
                label="Valor Total"
                strong
                value={"$" + formatNumber.format(orderSavedVM.order.valorTotal)}
              />
            </Grid>
          </Box>
          <Typography sx={sectionTitle}>Información del Cliente</Typography>
          <Box sx={sectionBox}>
            <Grid container rowSpacing={1}>
              <DataRow
                label="Tipo documento"
                value={orderSavedVM.authData.user.tipoDocumento}
              />
              <DataRow
                label="Num documento"
                value={
                  orderSavedVM.authData.user.numeroDocumento +
                  (orderSavedVM.authData.user.digitoVerifica &&
                  orderSavedVM.authData.user.digitoVerifica.length > 0
                    ? ` - ${orderSavedVM.authData.user.digitoVerifica}`
                    : "")
                }
              />
              <DataRow
                label="Apellidos"
                value={orderSavedVM.authData.user.apellidos}
              />

              <DataRow
                label="Nombres"
                value={orderSavedVM.authData.user.nombres}
              />

              <DataRow label="Email" value={orderSavedVM.order.emailCliente} />
              <DataRow
                label="Celular"
                value={orderSavedVM.authData.user.telefono}
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
            <Grid container rowSpacing={1}>
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
            <DetailRowView key={producto.nombreProducto} producto={producto} />
          ))}
        </Box>
      ) : (
        <Box></Box>
      )}
    </>
  );
};

export default OrderSavedView;
