import { IAuthRepository } from "@/data/repository/AuthRepository";
import { ILoginRequest } from "../models/requests/ILoginRequest";
import { IUserDto } from "../models/Dto/IClientDto";
import { IChangePasswordRequest } from "../models/requests/IChangePasswordRequest";

interface AuthServiceProps {
  AuthRepository: IAuthRepository;
}

export interface IAuthService {
  login: (loginData: ILoginRequest) => Promise<IUserDto>;
  changePassword: (
    token: string,
    data: IChangePasswordRequest
  ) => Promise<IUserDto>;
}

export const AuthService = ({ AuthRepository }: AuthServiceProps) => {
  const login = async (loginData: ILoginRequest): Promise<IUserDto> => {
    return await AuthRepository.login(loginData);
  };

  const changePassword = async (
    token: string,
    data: IChangePasswordRequest
  ) => {
    return await AuthRepository.changePassword(token, data);
  };

  return {
    login,
    changePassword,
  };
};
