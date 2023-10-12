import { colors } from "@/presentation/styles/colors";
import theme from "@/presentation/styles/theme";
import { Box, useMediaQuery } from "@mui/material";

interface VentajasViewProps {
  text: string;
  type?: "Drawer" | "Page";
}

const VentajasView = ({ text, type = "Page" }: VentajasViewProps) => {
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          flex: 1,
          width: "100%",
          justifyContent: "start",
          paddingBottom: type === "Drawer" ? "3rem" : "1rem",
        }}
      >
        <span
          style={{
            color: colors.solidGreen,
            fontFamily: type === "Page" ? "Cunia" : "Montserrat",
            textAlign: "center",
            marginBottom: type === "Page" ? "1rem" : "0.9rem",
            fontWeight: type === "Drawer" ? "700" : undefined,
            fontSize: downSm
              ? "0.9rem"
              : type === "Drawer"
              ? "0.9rem"
              : undefined,
          }}
        >
          Ventajas
        </span>
        {text.split(";").map((ventaja, index) => (
          <span
            key={index}
            style={{
              fontFamily: "Montserrat",
              color: colors.solidGreen,
              fontSize: downSm
                ? "0.8125rem"
                : type === "Drawer"
                ? "0.9rem"
                : undefined,
            }}
          >
            {ventaja}
          </span>
        ))}
      </Box>
    </>
  );
};

export default VentajasView;
