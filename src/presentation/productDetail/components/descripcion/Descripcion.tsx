import { colors } from "@/presentation/styles/colors";
import { Box, Typography } from "@mui/material";

interface DescripcionProps {
  label: string;
  text: string;
  type?: "Drawer" | "Page";
}

const Descripcion = ({ text, label, type = "Page" }: DescripcionProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: type === "Page" ? "2rem" : "1rem",
          flex: 1,
          width: type === "Page" ? "50%" : "100%",
          justifyContent: "start",
        }}
      >
        <span
          style={{
            color: colors.solidGreen,
            fontFamily: type === "Page" ? "Cunia" : "Montserrat",
            textAlign: "center",
            marginBottom: type === "Page" ? "1rem" : undefined,
            fontSize: type === "Drawer" ? "0.9rem" : undefined,
            fontWeight: type === "Drawer" ? "700" : undefined,
          }}
        >
          {label}
        </span>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: colors.solidGreen,
            fontSize: type === "Drawer" ? "0.9rem" : undefined,
          }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default Descripcion;
