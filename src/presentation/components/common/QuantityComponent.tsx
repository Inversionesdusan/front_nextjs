import { Box, IconButton, Typography } from "@mui/material";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { colors } from "@/presentation/styles/colors";

interface QuantityComponentProps {
  quantity: number;
  addQty: () => void;
  removeQty: () => void;
  size?: "regular" | "small";
}

const QuantityComponent = ({
  quantity,
  addQty,
  removeQty,
  size = "regular",
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
        sx={{
          padding: "0",
          color: colors.solidGreen,
        }}
        onClick={removeQty}
      >
        <RemoveCircleRoundedIcon
          sx={{ fontSize: size === "regular" ? "1.5rem" : "1.25rem" }}
        />
      </IconButton>
      <Typography
        sx={{
          marginX: "0.5rem",
          fontFamily: "Montserrat",
          fontSize: size === "regular" ? "1rem" : "0.875rem",
          color: colors.solidGreen,
          fontWeight: "700",
          width: "50px",
          textAlign: "center",
        }}
      >
        {quantity}
      </Typography>
      <IconButton
        sx={{
          padding: "0",
          color: colors.solidGreen,
          fontSize: size === "regular" ? "1rem" : "0.875rem",
        }}
        onClick={addQty}
      >
        <AddCircleRoundedIcon
          sx={{ fontSize: size === "regular" ? "1.5rem" : "1.25rem" }}
        />
      </IconButton>
    </Box>
  );
};

export default QuantityComponent;
