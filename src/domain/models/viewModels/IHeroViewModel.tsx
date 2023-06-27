import { IBannerDto } from "../Dto/IBannerDto";

export interface IHeroViewModel {
  loading: boolean;
  banners: IBannerDto[];
  getAllBanners: () => Promise<void>;
}
