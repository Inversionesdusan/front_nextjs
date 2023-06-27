import { IBannerDto } from "../Dto/IBannerDto";

export interface IBannersRepository {
  BannersRepository: {
    getAllBanners: () => Promise<IBannerDto[]>;
  };
}
