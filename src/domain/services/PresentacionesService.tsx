import { IPresentacionesRepositoryReturn } from "@/data/repository/PresentacionesRepository";
import { IPresentacionDto } from "../models/Dto/IPresentacionDto";

interface PresentacionesServiceProps {
  PresentacionRepository: IPresentacionesRepositoryReturn;
}

export interface IPresentacionesService {
  getPresentaciones: () => Promise<IPresentacionDto[]>;
}

export const PresentacionesService = ({
  PresentacionRepository,
}: PresentacionesServiceProps) => {
  const getPresentaciones = async () => {
    return await PresentacionRepository.getPresentaciones();
  };

  return {
    getPresentaciones,
  };
};
