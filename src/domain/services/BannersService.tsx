import { IBannersRepository } from "@/domain/models/repositories/IBannersRepository";

export function BannersService({ BannersRepository }: IBannersRepository) {
  const getAllBanners = async () => {
    console.log("llamado en el servicio");
    return await BannersRepository.getAllBanners();
  };

  return {
    getAllBanners,
  };
}
