import { IOrderDto } from "@/domain/models/Dto/IOrderDto";
import { styles } from "./TableRowStyles";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { colors } from "@/presentation/styles/colors";
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
  const { rowContainer, cell, regularText, strongText } = styles();
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
        <Grid xs={3} sm={2} sx={cell}>
          <Typography sx={regularText}>{pedido.id}</Typography>
        </Grid>
        <Grid xs={4} sm={3} sx={cell}>
          <Typography sx={regularText}>{pedido.fechaGrabacion}</Typography>
        </Grid>
        <Grid xs={4} sm={3} sx={cell}>
          <Typography sx={{ ...strongText, textAlign: "right" }}>
            {"$" + formatNumber.format(pedido.valorTotal)}
          </Typography>
          <Typography
            sx={{
              ...regularText,
              textAlign: "right",
              display: { xs: "block", sm: "none" },
            }}
          >
            {pedido.estado}
          </Typography>
        </Grid>
        <Grid sm={3} sx={{ ...cell, display: { xs: "none", sm: "block" } }}>
          <Typography sx={{ ...regularText, textAlign: "right" }}>
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
                sx={{
                  color: colors.solidGreen,
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableRowView;
