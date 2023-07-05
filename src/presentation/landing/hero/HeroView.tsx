import Container from "@/DI/Container";
import LandingHeroItem from "@/app/components/basic/LandingHeroItem";
import { IHeroViewModel } from "@/domain/models/viewModels/IHeroViewModel";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroView = () => {
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
    <div>
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
