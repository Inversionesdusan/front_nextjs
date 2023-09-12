import { NotRegisteredClientDto } from "@/domain/models/Dto/NotRegisteredClientDto";
import { IClientRegisterRequest } from "@/domain/models/requests/IClientRegisterRequest";
import { ISaveDataNotRegisteredClient } from "@/domain/models/requests/ISaveDataNotRegisteredClient";
import { IClientRegisterResponse } from "@/domain/models/responses/IClientRegisterResponse";
import { IGetClientByEmailResponse } from "@/domain/models/responses/IGetClientByEmailResponse";
import { IUserDto } from "@/domain/models/Dto/IClientDto";
import { IClientDataQueryResponse } from "@/domain/models/responses/IClientDataQueryResponse";

interface IClientRepositoryProps {
  ClientesDataSource: {
    registerClient: (
      clientData: IClientRegisterRequest
    ) => Promise<IClientRegisterResponse>;
    saveNotRegisteredClient: (
      clientData: ISaveDataNotRegisteredClient
    ) => Promise<number>;
    getClienteByEmail: (email: string) => Promise<IGetClientByEmailResponse>;
    loadClientData: (token: string) => Promise<IClientDataQueryResponse>;
  };
}

export interface IClientRepositoryReturn {
  registerClient: (clientData: IClientRegisterRequest) => Promise<IUserDto>;
  saveNotRegisteredClient: (
    clientData: ISaveDataNotRegisteredClient
  ) => Promise<NotRegisteredClientDto>;
  getClienteByEmail: (email: string) => Promise<NotRegisteredClientDto>;
  loadClientData: (token: string) => Promise<IUserDto>;
}

export const ClientsRepository = ({
  ClientesDataSource,
}: IClientRepositoryProps) => {
  const saveNotRegisteredClient = async (
    clientData: ISaveDataNotRegisteredClient
  ): Promise<NotRegisteredClientDto> => {
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

  const registerClient = async (
    clientData: IClientRegisterRequest
  ): Promise<IUserDto> => {
    const response = await ClientesDataSource.registerClient(clientData);
    return {
      jwt: response.jwt,
      id: response.user.id,
      nombres: response.user.nombres,
      apellidos: response.user.apellidos,
      email: response.user.email,
      telefono: response.user.telefono,
      tipoDocumento: response.user.tipo_documento,
      numeroDocumento: response.user.numero_documento,
      digitoVerificacion: response.user.digito_verificacion,
      blocked: response.user.blocked,
      confirmed: response.user.confirmed,
    };
  };

  const loadClientData = async (token: string): Promise<IUserDto> => {
    const response = await ClientesDataSource.loadClientData(token);
    return {
      jwt: token,
      id: response.id,
      nombres: response.nombres,
      apellidos: response.apellidos,
      email: response.email,
      telefono: response.telefono,
      tipoDocumento: response.tipo_documento,
      numeroDocumento: response.numero_documento,
      digitoVerificacion: response.digito_verificacion,
      blocked: response.blocked,
      confirmed: response.confirmed,
    };
  };

  return {
    saveNotRegisteredClient,
    getClienteByEmail,
    registerClient,
    loadClientData,
  };
};
