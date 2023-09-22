export interface IAddressForm {
  direccion: string;
  complemento: string;
  departamento: string;
  ciudad: string;
  barrio: string;
}

export const initialAddressData: IAddressForm = {
  direccion: "",
  complemento: "",
  departamento: "",
  ciudad: "",
  barrio: "",
};
