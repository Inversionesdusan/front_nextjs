import { IBannerDto } from "../Dto/IBannerDto";

export interface IBannersService {
  BannersService: {
    getAllBanners: () => Promise<IBannerDto[]>;
  };
}
