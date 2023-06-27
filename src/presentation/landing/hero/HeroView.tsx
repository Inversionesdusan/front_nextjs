import Container from "@/DI/Container";
import { IHeroViewModel } from "@/domain/models/viewModels/IHeroViewModel";
import Image from "next/image";
import React, { useEffect } from "react";

const HeroView = () => {
  const heroViewModel = Container.resolve("HeroViewModel") as IHeroViewModel;

  useEffect(() => {
    heroViewModel.getAllBanners();
  }, []);

  return heroViewModel.loading ? (
    <>Cargando ... </>
  ) : (
    <>
      {heroViewModel.banners.map((banner) => (
        <div key={banner.id}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${banner.imagen}`}
            width={200}
          />
          <h1>{banner.titulo}</h1>
          <p>{banner.descripcion}</p>
        </div>
      ))}
    </>
  );
};

export default HeroView;
