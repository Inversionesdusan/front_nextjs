import { IBannersResponse } from "../responses/IBannersResponse";

export interface IBannersDataSource {
  BannersDataSource: {
    GetAllBanners: () => Promise<IBannersResponse>;
  };
}
