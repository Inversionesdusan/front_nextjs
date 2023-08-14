import { IBannersRepository } from "@/domain/models/repositories/IBannersRepository";

export function BannersService({ BannersRepository }: IBannersRepository) {
  const getAllBanners = async () => {
    return await BannersRepository.getAllBanners();
  };

  return {
    getAllBanners,
  };
}
