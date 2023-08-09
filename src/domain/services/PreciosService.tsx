import { IPreciosRepositoryReturn } from "@/data/repository/PreciosRepository";
import { IPrecioProductosDto } from "../models/Dto/IPrecioProductosDto";

interface PrecioServiceProps {
  PreciosRepository: IPreciosRepositoryReturn;
}

export interface IPreciosService {
  getPrecioProductos: () => Promise<IPrecioProductosDto[]>;
}

export const PreciosService = ({ PreciosRepository }: PrecioServiceProps) => {
  const getPrecioProductos = async (): Promise<IPrecioProductosDto[]> => {
    return await PreciosRepository.getPreciosProductos();
  };

  return {
    getPrecioProductos,
  };
};
