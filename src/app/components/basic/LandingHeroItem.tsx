import { Box, CardMedia, Typography } from "@mui/material";
import HeaderLink from "./HeaderLink";

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
  console.log(image);

  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <CardMedia
        component="img"
        image={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${image}`}
        height="100%"
        alt={title}
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
          <HeaderLink label="Registrate" href="/register" />
        </Box>
      )}
    </Box>
  );
};

export default LandingHeroItem;
