import { Box, CardMedia, Typography } from "@mui/material";
import HeaderLink from "./HeaderLink";
import { constantes } from "@/domain/constants";

export interface LandingHeroItemProps {
  image: string;
  title: string;
  description: string;
}

const LandingHeroItem = ({
  image,
  title,
  description,
}: LandingHeroItemProps) => {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <CardMedia
        component="img"
        image={`${constantes.paths.BASE_URL_IMAGES}${image}`}
        height="100%"
        alt="Imagen Promocional Campo"
      />
      {title && description && (
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem",
            width: "40%",
            background: "rgba(0,0,0,0.6)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "500",
              fontSize: "3rem",
              letterSpacing: "5px",
              lineHeight: "3.5rem",
              marginBottom: "2rem",
              color: "white",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontSize: "1.25rem",
              letterSpacing: "1px",
              marginBottom: "2rem",
              color: "white",
            }}
          >
            {description}
          </Typography>
          <HeaderLink label="Registrate" href="/register" landing={true} />
        </Box>
      )}
    </Box>
  );
};

export default LandingHeroItem;
