import { Box, Typography } from "@mui/material";
import { styles } from "../OrderSavedStyles";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactNode } from "react";
import {
  CuniaGreen16400,
  MonserratGreen16400,
} from "@/presentation/styles/colors";

interface DataRowProps {
  label: string;
  value: string;
  strong?: boolean;
  children?: ReactNode;
}

const DataRow = ({ label, value, strong, children }: DataRowProps) => {
  const { labelBox, clientDataBox, valueField } = styles();

  return (
    <>
      <Grid xs={5} md={2}>
        <Box sx={labelBox}>
          <Typography
            sx={{
              ...CuniaGreen16400,
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
            }}
          >
            {label}
          </Typography>
        </Box>
      </Grid>
      <Grid xs={7} md={4}>
        {children ? (
          children
        ) : (
          <Typography
            sx={{
              ...MonserratGreen16400,
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              fontWeight: strong ? "700" : "400",
            }}
          >
            {value}
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default DataRow;
