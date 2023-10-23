export interface IResetPasswordRequest {
  code: string;
  password: string;
  passwordConfirmation: string;
}
