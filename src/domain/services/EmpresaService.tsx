import { IEmpresaRepositoryReturn } from "@/data/repository/EmpresaRepository";
import { IDatosEmpresaDto } from "../models/Dto/IDatosEmpresaDto";
import { IContactoFormValues } from "../models/forms/IContactForm";

interface EmpresaServiceProps {
  EmpresaRepository: IEmpresaRepositoryReturn;
}

export interface IEmpresaServiceReturn {
  getDatosEmpresa: () => Promise<IDatosEmpresaDto>;
  saveDataContacto: (data: IContactoFormValues) => Promise<string>;
}

export function EmpresaService({ EmpresaRepository }: EmpresaServiceProps) {
  const getDatosEmpresa = async () => {
    return await EmpresaRepository.getDatosEmpresa();
  };

  const saveDataContacto = async (
    data: IContactoFormValues
  ): Promise<string> => {
    return await EmpresaRepository.saveDatosContacto(data);
  };

  return {
    getDatosEmpresa,
    saveDataContacto,
  };
}
