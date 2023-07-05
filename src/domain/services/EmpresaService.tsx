import { IEmpresaRepositoryReturn } from "@/data/repository/EmpresaRepository";
import { IDatosEmpresaDto } from "../models/Dto/IDatosEmpresaDto";

interface EmpresaServiceProps {
  EmpresaRepository: IEmpresaRepositoryReturn;
}

export interface IEmpresaServiceReturn {
  getDatosEmpresa: () => Promise<IDatosEmpresaDto>;
}

export function EmpresaService({ EmpresaRepository }: EmpresaServiceProps) {
  const getDatosEmpresa = async () => {
    return await EmpresaRepository.getDatosEmpresa();
  };

  return {
    getDatosEmpresa,
  };
}
