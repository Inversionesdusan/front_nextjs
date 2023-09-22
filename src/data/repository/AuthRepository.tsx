import { IUserDto } from "@/domain/models/Dto/IClientDto";
import { IChangePasswordRequest } from "@/domain/models/requests/IChangePasswordRequest";
import { ILoginRequest } from "@/domain/models/requests/ILoginRequest";
import { IClientRegisterResponse } from "@/domain/models/responses/IClientRegisterResponse";

interface AuthRepositoryProps {
  AuthDataSource: {
    login: (loginData: ILoginRequest) => Promise<IClientRegisterResponse>;
    changePassword: (
      token: string,
      data: IChangePasswordRequest
    ) => Promise<IClientRegisterResponse>;
  };
}

export interface IAuthRepository {
  login: (loginData: ILoginRequest) => Promise<IUserDto>;
  changePassword: (
    token: string,
    data: IChangePasswordRequest
  ) => Promise<IUserDto>;
}

export const AuthRepository = ({ AuthDataSource }: AuthRepositoryProps) => {
  const login = async (loginData: ILoginRequest): Promise<IUserDto> => {
    const response = await AuthDataSource.login(loginData);
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
      tipoUsuario: response.user.tipo_usuario || "",
      direccion: response.user.direccion,
      direccion_envio: response.user.direccion_envio,
    };
  };

  const changePassword = async (
    token: string,
    data: IChangePasswordRequest
  ) => {
    const response = await AuthDataSource.changePassword(token, data);
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
      tipoUsuario: response.user.tipo_usuario || "",
      direccion: response.user.direccion,
      direccion_envio: response.user.direccion_envio,
    };
  };

  return {
    login,
    changePassword,
  };
};
