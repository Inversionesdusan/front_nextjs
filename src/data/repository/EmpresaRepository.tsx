import { IDatosEmpresaResponse } from "@/domain/models/responses/IDatosEmpresaResponse";
import { IDatosEmpresaDto } from "@/domain/models/Dto/IDatosEmpresaDto";
import { IContactoFormValues } from "@/domain/models/forms/IContactForm";
import { ISaveDataContactRequest } from "@/domain/models/requests/ISaveDataContactRequest";

interface IEmpresaRepositoryProps {
  EmpresaDataSource: {
    GetDatosEmpresa: () => Promise<IDatosEmpresaResponse>;
    SaveDatosContacto: (
      data: ISaveDataContactRequest,
      emailEmpresa: string
    ) => Promise<string>;
  };
}

export interface IEmpresaRepositoryReturn {
  getDatosEmpresa: () => Promise<IDatosEmpresaDto>;
  saveDatosContacto: (
    data: IContactoFormValues,
    emailEmpresa: string
  ) => Promise<string>;
}

export function EmpresaRepository({
  EmpresaDataSource,
}: IEmpresaRepositoryProps) {
  const getDatosEmpresa = async (): Promise<IDatosEmpresaDto> => {
    const response = await EmpresaDataSource.GetDatosEmpresa();
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

    if (response.data.attributes.imagen_contactenos) {
      let urlImagen =
        response.data.attributes.imagen_contactenos.data?.attributes.url || "";
      newEmpresaDto.imagenContactenos = urlImagen;
    }

    return newEmpresaDto;
  };

  const saveDatosContacto = async (
    data: IContactoFormValues,
    emailEmpresa: string
  ) => {
    const newDataRequest: ISaveDataContactRequest = {
      data: {
        nombre_cliente: data.nombreCliente || "",
        email_cliente: data.email || "",
        nro_telefono: data.nroTelefono || "",
        asunto: "",
        mensaje: "",
      },
    };

    return await EmpresaDataSource.SaveDatosContacto(
      newDataRequest,
      emailEmpresa
    );
  };

  return {
    getDatosEmpresa,
    saveDatosContacto,
  };
}
