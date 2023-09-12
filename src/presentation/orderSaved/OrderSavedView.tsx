import Container from "@/DI/Container";
import { styles } from "./OrderSavedStyles";
import { Box } from "@mui/material";
import { IOrderSavedViewModel } from "./OrderSavedViewModel";
import DataRow from "./components/DataRow";
import { constantes } from "@/domain/constants";
import DetailHeaderView from "./components/detailHeader/DetailHeaderView";
import DetailRowView from "./components/detailRow/DetailRowView";

const OrderSavedView = () => {
  const { container, clientDataBox, labelBox, sectionBox } = styles();
  const orderSavedVM = Container.resolve(
    "OrderSavedViewModel"
  ) as IOrderSavedViewModel;

  console.log(orderSavedVM.order, orderSavedVM.authData);
  const formatNumber = Intl.NumberFormat(constantes.locale);

  return (
    <Box sx={container}>
      <Box sx={sectionBox}>
        <DataRow label="Nro Pedido" value={orderSavedVM.order.id.toString()} />
        <DataRow
          label="Fecha Pedido"
          value={orderSavedVM.order.fechaGrabacion}
        />
        <DataRow label="Estado" value={orderSavedVM.order.estado} />
        <DataRow
          label="Valor Total"
          strong
          value={"$" + formatNumber.format(orderSavedVM.order.valorTotal)}
        />
      </Box>
      <Box sx={sectionBox}>
        <DataRow
          label="Nombre Cliente"
          value={
            orderSavedVM.authData.user.nombres +
            " " +
            orderSavedVM.authData.user.apellidos
          }
        />
        <DataRow label="Email" value={orderSavedVM.order.emailCliente} />
        <DataRow
          label="Direccion"
          value={orderSavedVM.order.direccion.direccion}
        />
        <DataRow
          label="Departamento"
          value={orderSavedVM.order.direccion.departamento}
        />
        <DataRow
          label="Ciudad / Municipio"
          value={orderSavedVM.order.direccion.ciudad}
        />
      </Box>
      <DetailHeaderView />
      {orderSavedVM.order.detallePedido.map((producto) => (
        <DetailRowView key={producto.nombreProducto} producto={producto} />
      ))}
    </Box>
  );
};

export default OrderSavedView;
