import { IBannersResponse } from "../responses/IBannersResponse";

export interface IBannersDataSource {
  BannersDataSource: {
    getAllBanners: () => Promise<IBannersResponse>;
  };
}
