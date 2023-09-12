import { Box, Typography } from "@mui/material";
import { styles } from "../OrderSavedStyles";
import Grid from "@mui/material/Unstable_Grid2";
import {
  CuniaGreen16400,
  MonserratGreen16400,
  MontserratGreen16700,
} from "@/presentation/styles/colors";

interface DataRowProps {
  label: string;
  value: string;
  strong?: boolean;
}

const DataRow = ({ label, value, strong }: DataRowProps) => {
  const { labelBox, clientDataBox, valueField } = styles();

  return (
    <Grid container sx={clientDataBox}>
      <Grid xs={3}>
        <Box sx={labelBox}>
          <Typography sx={CuniaGreen16400}>{label}</Typography>
        </Box>
      </Grid>
      <Grid xs={9}>
        <Typography sx={strong ? MontserratGreen16700 : MonserratGreen16400}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DataRow;
