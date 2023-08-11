import { IPresentacionDto } from "@/domain/models/Dto/IPresentacionDto";
import { IPresentacionesResponse } from "@/domain/models/responses/IPresentacionesResponse";

interface IPresentacionesRepositoryProps {
  PresentacionesDataSource: {
    GetPresentaciones: () => Promise<IPresentacionesResponse>;
  };
}

export interface IPresentacionesRepositoryReturn {
  getPresentaciones: () => Promise<IPresentacionDto[]>;
}

export const PresentacionRepository = ({
  PresentacionesDataSource,
}: IPresentacionesRepositoryProps) => {
  const getPresentaciones = async (): Promise<IPresentacionDto[]> => {
    const response = await PresentacionesDataSource.GetPresentaciones();
    const presentaciones: IPresentacionDto[] = [];
    response.data.forEach((presentacion) => {
      const newPres: IPresentacionDto = {
        id: presentacion.id,
        descripcion: presentacion.attributes.descripcion,
        manejaInventario: presentacion.attributes.maneja_inventario,
      };

      presentaciones.push(newPres);
    });

    return presentaciones;
  };

  return {
    getPresentaciones,
  };
};
