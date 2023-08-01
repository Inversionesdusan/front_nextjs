import Container from "@/DI/Container";
import LandingHeroItem from "@/app/components/basic/LandingHeroItem";
import { IHeroViewModel } from "@/domain/models/viewModels/IHeroViewModel";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../../../public/images/logos/Isologo.svg";
import Image from "next/image";
import { colors } from "@/presentation/styles/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const HeroView = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
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
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    heroViewModel.getAllBanners();
  }, []);

  return heroViewModel.loading ? (
    <>Cargando ... </>
  ) : (
    <div style={{ height: "100vh", position: "relative" }} id="inicio">
      <Image
        src={logo}
        alt="Logo Dusan"
        height={downMd ? 70 : 180}
        color={colors.white}
        style={{
          zIndex: "99",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
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
