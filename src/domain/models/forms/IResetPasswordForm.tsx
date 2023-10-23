export interface IResetPasswordForm {
  password: string;
  passwordConfirmation: string;
}

export const initialDataResetPassword: IResetPasswordForm = {
  password: "",
  passwordConfirmation: "",
};
