import { IDatosEmpresaResponse } from "@/domain/models/responses/IDatosEmpresaResponse";
import { IDatosEmpresaDto } from "@/domain/models/Dto/IDatosEmpresaDto";

interface IEmpresaRepositoryProps {
  EmpresaDataSource: {
    getDatosEmpresa: () => Promise<IDatosEmpresaResponse>;
  };
}

export interface IEmpresaRepositoryReturn {
  getDatosEmpresa: () => Promise<IDatosEmpresaDto>;
}

export function EmpresaRepository({
  EmpresaDataSource,
}: IEmpresaRepositoryProps) {
  const getDatosEmpresa = async (): Promise<IDatosEmpresaDto> => {
    const response = await EmpresaDataSource.getDatosEmpresa();
    const newEmpresaDto: IDatosEmpresaDto = {
      nombreEmpresa: response.data.attributes?.nombre_empresa || "",
      direccionContacto: response.data.attributes?.direccion_contacto || "",
      telefonoFijo: response.data.attributes?.telefono_fijo || "",
      telefonoCelular: response.data.attributes?.telefono_celular || "",
      email: response.data.attributes?.email || "",
      ciudad: response.data.attributes?.ciudad || "",
      departamento: response.data.attributes?.departamento || "",
      nombreContacto: response.data.attributes?.nombre_contacto || "",
    };

    return newEmpresaDto;
  };

  return {
    getDatosEmpresa,
  };
}
