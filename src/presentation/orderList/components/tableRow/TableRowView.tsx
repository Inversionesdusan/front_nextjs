import { IOrderDto } from "@/domain/models/Dto/IOrderDto";
import { styles } from "./TableRowStyles";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import {
  CuniaBlack20400,
  MontserratGreen16700,
  colors,
} from "@/presentation/styles/colors";
import { constantes } from "@/domain/constants";
import Grid from "@mui/material/Unstable_Grid2";
import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/navigation";
import useAppStore from "@/domain/store/useStore";

interface TableRowViewProps {
  pedido: IOrderDto;
}

const TableRowView = ({ pedido }: TableRowViewProps) => {
  const router = useRouter();
  const { rowContainer, cell } = styles();
  const formatNumber = Intl.NumberFormat(constantes.locale);
  const { setOrder } = useAppStore();

  return (
    <Box sx={rowContainer}>
      <Grid
        container
        spacing={1}
        sx={{ width: "100%" }}
        justifyContent="space-between"
      >
        <Grid xs={2} sx={cell}>
          <Typography sx={MontserratGreen16700}>{pedido.id}</Typography>
        </Grid>
        <Grid xs={3} sx={cell}>
          <Typography sx={MontserratGreen16700}>
            {pedido.fechaGrabacion}
          </Typography>
        </Grid>
        <Grid xs={2} sx={cell}>
          <Typography sx={{ ...CuniaBlack20400, textAlign: "right" }}>
            {"$" + formatNumber.format(pedido.valorTotal)}
          </Typography>
        </Grid>
        <Grid xs={3} sx={cell}>
          <Typography sx={{ ...MontserratGreen16700, textAlign: "right" }}>
            {pedido.estado}
          </Typography>
        </Grid>
        <Grid xs={1} sx={{ marginY: "auto", textAlign: "right" }}>
          <Tooltip title={"Ver detalle"}>
            <IconButton
              onClick={() => {
                setOrder(pedido);
                router.push("/pedidos/consulta");
              }}
            >
              <AddCircleIcon
                sx={{ color: colors.solidGreen, fontSize: "1.5rem" }}
              />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableRowView;
