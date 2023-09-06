import { IClientRepositoryReturn } from "@/data/repository/ClientsRepository";
import { NotRegisteredClientDto } from "../models/Dto/NotRegisteredClientDto";
import { ISaveDataNotRegisteredClient } from "../models/requests/ISaveDataNotRegisteredClient";

interface ClientsServiceProps {
  ClientsRepository: IClientRepositoryReturn;
}

export interface IClientsService {
  saveNotRegisteredClient: (
    clientData: ISaveDataNotRegisteredClient
  ) => Promise<NotRegisteredClientDto>;
  getClienteByEmail: (email: string) => Promise<NotRegisteredClientDto>;
}

export const ClientsService = ({ ClientsRepository }: ClientsServiceProps) => {
  const saveNotRegisteredClient = async (
    clientData: ISaveDataNotRegisteredClient
  ): Promise<NotRegisteredClientDto> => {
    console.log("entrada al servicio -> ", clientData);
    return await ClientsRepository.saveNotRegisteredClient(clientData);
  };

  const getClienteByEmail = async (
    email: string
  ): Promise<NotRegisteredClientDto> => {
    return await ClientsRepository.getClienteByEmail(email);
  };

  return {
    saveNotRegisteredClient,
    getClienteByEmail,
  };
};
