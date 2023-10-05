import Container from "@/DI/Container";
import LandingHeroItem from "@/app/components/basic/LandingHeroItem";
import { IHeroViewModel } from "@/domain/models/viewModels/IHeroViewModel";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "@/presentation/styles/colors";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ButtonCustom from "@/app/components/basic/ButtonCustom";
import { useRouter } from "next/navigation";
import { MontserratGreen16700 } from "../../styles/colors";

interface HeroViewProps {
  handleOpenModalRegistro: () => void;
  handleOpenModalLogin: () => void;
}

const HeroView = ({
  handleOpenModalRegistro,
  handleOpenModalLogin,
}: HeroViewProps) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const heroViewModel = Container.resolve("HeroViewModel") as IHeroViewModel;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <></>,
    prevArrow: <></>,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    heroViewModel.getAllBanners();
  }, []);

  const router = useRouter();

  return heroViewModel.loading ? (
    <>Cargando ... </>
  ) : (
    <div style={{ height: "100vh", position: "relative" }} id="inicio">
      <Box
        sx={{
          zIndex: "99",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <img
          src="/images/logos/Isologo.svg"
          alt="Logo Dusan"
          height={downMd ? 70 : 180}
          color={colors.white}
        />
        <Box
          sx={{
            cursor: "pointer",
            background: "rgba(255,255,255,0.8)",
            paddingY: "0.8rem",
            paddingX: "2rem",
            borderRadius: "100px",
          }}
        >
          <Typography variant="h1" sx={MontserratGreen16700}>
            Fabricación de abonos y compuestos inorgánicos nitrogenados
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: downSm ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <ButtonCustom typeButton="modal" onClick={handleOpenModalRegistro}>
            <Typography>Registrarme</Typography>
          </ButtonCustom>
          <ButtonCustom typeButton="form" onClick={handleOpenModalLogin}>
            <Typography>Ingresar</Typography>
          </ButtonCustom>
        </Box>
        {false && (
          <div
            onClick={() => {
              router.push("/catalogo");
            }}
          >
            <Typography
              variant="h2"
              sx={{
                ...MontserratGreen16700,
                cursor: "pointer",
                background: "rgba(255,255,255,0.7)",
                paddingY: "0.8rem",
                paddingX: "2rem",
                borderRadius: "100px",
              }}
            >
              Ver Catálogo
            </Typography>
          </div>
        )}
      </Box>
      <Slider {...settings}>
        {heroViewModel.banners.map((banner) => (
          <LandingHeroItem
            key={banner.id}
            image={banner.imagen}
            title={banner.titulo}
            description={banner.descripcion}
          />
        ))}
      </Slider>
    </div>
  );
};

export default HeroView;
