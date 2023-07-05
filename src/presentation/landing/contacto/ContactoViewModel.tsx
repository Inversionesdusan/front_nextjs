import { IDatosEmpresaDto } from "@/domain/models/Dto/IDatosEmpresaDto";
import { IEmpresaServiceReturn } from "@/domain/services/EmpresaService";
import { useState } from "react";

interface IContactoViewModelProps {
  EmpresaService: IEmpresaServiceReturn;
}

export interface IContactoViewModelReturn {
  loading: boolean;
  empresa: IDatosEmpresaDto;
  cargarDatosEmpresa: () => void;
}

const ContactoViewModel = ({ EmpresaService }: IContactoViewModelProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [empresa, setEmpresa] = useState<IDatosEmpresaDto | null>(null);

  const cargarDatosEmpresa = async () => {
    setLoading(true);
    const datosEmpresa = await EmpresaService.getDatosEmpresa();
    setEmpresa(datosEmpresa);
    setLoading(false);
  };

  return { loading, empresa, cargarDatosEmpresa };
};

export default ContactoViewModel;
