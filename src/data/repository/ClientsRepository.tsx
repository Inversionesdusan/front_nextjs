import { NotRegisteredClientDto } from "@/domain/models/Dto/NotRegisteredClientDto";
import { ISaveDataNotRegisteredClient } from "@/domain/models/requests/ISaveDataNotRegisteredClient";
import { IGetClientByEmailResponse } from "@/domain/models/responses/IGetClientByEmailResponse";

interface IClientRepositoryProps {
  ClientesDataSource: {
    saveNotRegisteredClient: (
      clientData: ISaveDataNotRegisteredClient
    ) => Promise<number>;
    getClienteByEmail: (email: string) => Promise<IGetClientByEmailResponse>;
  };
}

export interface IClientRepositoryReturn {
  saveNotRegisteredClient: (
    clientData: ISaveDataNotRegisteredClient
  ) => Promise<NotRegisteredClientDto>;
  getClienteByEmail: (email: string) => Promise<NotRegisteredClientDto>;
}

export const ClientsRepository = ({
  ClientesDataSource,
}: IClientRepositoryProps) => {
  const saveNotRegisteredClient = async (
    clientData: ISaveDataNotRegisteredClient
  ): Promise<NotRegisteredClientDto> => {
    console.log("entrada al repositorio -> ", clientData);
    const response = await ClientesDataSource.saveNotRegisteredClient(
      clientData
    );
    return {
      id: response,
      ...clientData,
    };
  };

  const getClienteByEmail = async (email: string) => {
    const resp = await ClientesDataSource.getClienteByEmail(email);
    if (resp.meta.pagination.total && resp.meta.pagination.total > 0) {
      const cliente = resp.data[0];
      return {
        id: cliente.id,
        email: cliente.attributes.email,
        nombresCliente: cliente.attributes.nombresCliente || "",
        apellidosCliente: cliente.attributes.apellidosCliente || "",
        telefonoCliente: cliente.attributes.telefonoCliente || "",
        direccion: cliente.attributes.direccion,
        complementoDireccion: cliente.attributes.complementoDireccion || "",
        departamento: cliente.attributes.departamento,
        ciudad: cliente.attributes.ciudad,
      } as NotRegisteredClientDto;
    }

    return {
      id: 0,
      email: "",
      direccion: "",
      departamento: "",
      ciudad: "",
    } as NotRegisteredClientDto;
  };

  return {
    saveNotRegisteredClient,
    getClienteByEmail,
  };
};
