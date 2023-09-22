import { colors } from "@/presentation/styles/colors";
import { Box } from "@mui/material";

interface VentajasViewProps {
  text: string;
  type?: "Drawer" | "Page";
}

const VentajasView = ({ text, type = "Page" }: VentajasViewProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          flex: 1,
          width: "50%",
          justifyContent: "start",
        }}
      >
        <span
          style={{
            color: colors.solidGreen,
            fontFamily: type === "Page" ? "Cunia" : "Montserrat",
            textAlign: "center",
            marginBottom: type === "Page" ? "1rem" : "0.9rem",
            fontWeight: type === "Drawer" ? "700" : undefined,
          }}
        >
          Ventajas
        </span>
        {text.split(";").map((ventaja, index) => (
          <span
            key={index}
            style={{ fontFamily: "Montserrat", color: colors.solidGreen }}
          >
            {ventaja}
          </span>
        ))}
      </Box>
    </>
  );
};

export default VentajasView;
