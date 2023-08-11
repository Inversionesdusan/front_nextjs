import { Box, IconButton, Typography } from "@mui/material";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { colors } from "@/presentation/styles/colors";

interface QuantityComponentProps {
  quantity: number;
  addQty: () => void;
  removeQty: () => void;
}

const QuantityComponent = ({
  quantity,
  addQty,
  removeQty,
}: QuantityComponentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        flex: "1",
      }}
    >
      <IconButton
        sx={{ padding: "0", color: colors.solidGreen }}
        onClick={removeQty}
      >
        <RemoveCircleRoundedIcon />
      </IconButton>
      <Typography
        sx={{
          marginX: "0.5rem",
          fontFamily: "Montserrat",
          fontSize: "1rem",
          color: colors.solidGreen,
          fontWeight: "700",
          width: "50px",
          textAlign: "center",
        }}
      >
        {quantity}
      </Typography>
      <IconButton
        sx={{ padding: "0", color: colors.solidGreen }}
        onClick={addQty}
      >
        <AddCircleRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityComponent;
