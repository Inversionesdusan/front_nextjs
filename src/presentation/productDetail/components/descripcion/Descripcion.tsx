import { colors } from "@/presentation/styles/colors";
import theme from "@/presentation/styles/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

interface DescripcionProps {
  label: string;
  text: string;
  type?: "Drawer" | "Page";
}

const Descripcion = ({ text, label, type = "Page" }: DescripcionProps) => {
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: downSm ? "1rem" : type === "Page" ? "2rem" : "1rem",
          flex: 1,
          width: { xs: "100%", md: type === "Page" ? "50%" : "100%" },
          justifyContent: "start",
        }}
      >
        <span
          style={{
            color: colors.solidGreen,
            fontFamily: type === "Page" ? "Cunia" : "Montserrat",
            textAlign: "center",
            marginBottom: downSm
              ? undefined
              : type === "Page"
              ? "1rem"
              : undefined,
            fontSize: downSm
              ? "0.9rem"
              : type === "Drawer"
              ? "0.9rem"
              : undefined,
            fontWeight: type === "Drawer" ? "700" : undefined,
          }}
        >
          {label}
        </span>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: colors.solidGreen,
            fontSize: downSm
              ? "0.8125rem"
              : type === "Drawer"
              ? "0.9rem"
              : undefined,
          }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default Descripcion;
