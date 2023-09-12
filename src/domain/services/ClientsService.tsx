import { IClientRepositoryReturn } from "@/data/repository/ClientsRepository";
import { NotRegisteredClientDto } from "../models/Dto/NotRegisteredClientDto";
import { ISaveDataNotRegisteredClient } from "../models/requests/ISaveDataNotRegisteredClient";
import { IClientRegisterRequest } from "../models/requests/IClientRegisterRequest";
import { IUserDto } from "../models/Dto/IClientDto";

interface ClientsServiceProps {
  ClientsRepository: IClientRepositoryReturn;
}

export interface IClientsService {
  registerClient: (clientData: IClientRegisterRequest) => Promise<IUserDto>;
  saveNotRegisteredClient: (
    clientData: ISaveDataNotRegisteredClient
  ) => Promise<NotRegisteredClientDto>;
  getClienteByEmail: (email: string) => Promise<NotRegisteredClientDto>;
  loadClientData: (token: string) => Promise<IUserDto>;
}

export const ClientsService = ({ ClientsRepository }: ClientsServiceProps) => {
  const registerClient = async (
    clientData: IClientRegisterRequest
  ): Promise<IUserDto> => {
    return await ClientsRepository.registerClient(clientData);
  };

  const saveNotRegisteredClient = async (
    clientData: ISaveDataNotRegisteredClient
  ): Promise<NotRegisteredClientDto> => {
    return await ClientsRepository.saveNotRegisteredClient(clientData);
  };

  const getClienteByEmail = async (
    email: string
  ): Promise<NotRegisteredClientDto> => {
    return await ClientsRepository.getClienteByEmail(email);
  };

  const loadClientData = async (token: string): Promise<IUserDto> => {
    return await ClientsRepository.loadClientData(token);
  };

  return {
    registerClient,
    saveNotRegisteredClient,
    getClienteByEmail,
    loadClientData,
  };
};
