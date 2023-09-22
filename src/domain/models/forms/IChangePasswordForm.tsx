export interface IChangePasswordForm {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}

export const initialDataPasswordForm: IChangePasswordForm = {
  currentPassword: "",
  password: "",
  passwordConfirmation: "",
};
