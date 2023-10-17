import { IProductoWithPricesDto } from "@/domain/models/Dto/IProductoDto";
import { styles } from "./ComposicionStyles";
import { Box, Typography } from "@mui/material";

interface ComposicionViewProps {
  producto: IProductoWithPricesDto;
  type?: "Drawer" | "Page";
}

const ComposicionView = ({ producto, type = "Page" }: ComposicionViewProps) => {
  const { container, dataText, compositionTitle, dataRow } = styles(type);

  return (
    <>
      <Box sx={dataRow}>
        <Typography sx={compositionTitle}>Composición Garantizada</Typography>
      </Box>
      {producto.composicion?.split(";").map((componente) => {
        const info = componente.split("=");
        return (
          <Box key={info[0]} sx={dataRow}>
            <Typography sx={{ ...dataText, flex: "3", textAlign: "left" }}>
              {info[0]}
            </Typography>
            <Typography sx={{ ...dataText, flex: "2", textAlign: "right" }}>
              {info[1]}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

export default ComposicionView;
