import { IEmpresaRepositoryReturn } from "@/data/repository/EmpresaRepository";
import { IDatosEmpresaDto } from "../models/Dto/IDatosEmpresaDto";
import { IContactoFormValues } from "../models/forms/IContactForm";

interface EmpresaServiceProps {
  EmpresaRepository: IEmpresaRepositoryReturn;
}

export interface IEmpresaServiceReturn {
  getDatosEmpresa: () => Promise<IDatosEmpresaDto>;
  saveDataContacto: (
    data: IContactoFormValues,
    emailEmpresa: string
  ) => Promise<string>;
}

export function EmpresaService({ EmpresaRepository }: EmpresaServiceProps) {
  const getDatosEmpresa = async () => {
    return await EmpresaRepository.getDatosEmpresa();
  };

  const saveDataContacto = async (
    data: IContactoFormValues,
    emailEmpresa: string
  ): Promise<string> => {
    return await EmpresaRepository.saveDatosContacto(data, emailEmpresa);
  };

  return {
    getDatosEmpresa,
    saveDataContacto,
  };
}
