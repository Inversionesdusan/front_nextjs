import { IAuthRepository } from "@/data/repository/AuthRepository";
import { ILoginRequest } from "../models/requests/ILoginRequest";
import { IUserDto } from "../models/Dto/IClientDto";

interface AuthServiceProps {
  AuthRepository: IAuthRepository;
}

export interface IAuthService {
  login: (loginData: ILoginRequest) => Promise<IUserDto>;
}

export const AuthService = ({ AuthRepository }: AuthServiceProps) => {
  const login = async (loginData: ILoginRequest): Promise<IUserDto> => {
    return await AuthRepository.login(loginData);
  };

  return {
    login,
  };
};
