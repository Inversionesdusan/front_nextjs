import { IAuthRepository } from "@/data/repository/AuthRepository";
import { ILoginRequest } from "../models/requests/ILoginRequest";
import { IUserDto } from "../models/Dto/IClientDto";
import { IChangePasswordRequest } from "../models/requests/IChangePasswordRequest";
import { IResetPasswordRequest } from "../models/requests/IResetPasswordRequest";

interface AuthServiceProps {
  AuthRepository: IAuthRepository;
}

export interface IAuthService {
  login: (loginData: ILoginRequest) => Promise<IUserDto>;
  changePassword: (
    token: string,
    data: IChangePasswordRequest
  ) => Promise<IUserDto>;
  resetPassword: (email: string) => Promise<boolean>;
  updatePassword: (resetData: IResetPasswordRequest) => Promise<IUserDto>;
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

  const resetPassword = async (email: string) => {
    return await AuthRepository.resetPassword(email);
  };

  const updatePassword = async (resetData: IResetPasswordRequest) => {
    return await AuthRepository.updatePassword(resetData);
  };

  return {
    login,
    changePassword,
    resetPassword,
    updatePassword,
  };
};
