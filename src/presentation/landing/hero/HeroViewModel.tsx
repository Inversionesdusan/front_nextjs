import { IBannerDto } from "@/domain/models/Dto/IBannerDto";
import { IBannersService } from "@/domain/models/services/IBannersService";
import React, { useState } from "react";

const HeroViewModel = ({ BannersService }: IBannersService) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [banners, setBanners] = useState<IBannerDto[]>([]);

  const getAllBanners = async () => {
    setLoading(true);
    const resp = (await BannersService.getAllBanners()) as IBannerDto[];
    setBanners(resp);
    setLoading(false);
  };

  return {
    banners,
    getAllBanners,
    loading,
  };
};

export default HeroViewModel;
