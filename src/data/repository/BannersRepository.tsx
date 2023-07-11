import { IBannerDto } from "@/domain/models/Dto/IBannerDto";
import { IBannersDataSource } from "@/domain/models/dataSources/IBannersDataSource";

export function BannersRepository({ BannersDataSource }: IBannersDataSource) {
  const getAllBanners = async (): Promise<IBannerDto[]> => {
    console.log("llamado en BannersRepository");
    const response = await BannersDataSource.GetAllBanners();
    let banners: IBannerDto[] = [];
    if (response.meta.pagination.total === 0) return banners;

    banners = response.data.map((banner) => {
      const imagenUrl = banner.attributes.imagen.data
        ? banner.attributes.imagen.data.attributes.url
        : "";
      const newBanner: IBannerDto = {
        id: banner.id,
        titulo: banner.attributes.titulo,
        descripcion: banner.attributes.descripcion,
        orden: banner.attributes.orden,
        tipo: banner.attributes.tipo,
        imagen: imagenUrl,
        estado: banner.attributes.estado,
      };

      return newBanner;
    });

    return banners;
  };

  return {
    getAllBanners,
  };
}
