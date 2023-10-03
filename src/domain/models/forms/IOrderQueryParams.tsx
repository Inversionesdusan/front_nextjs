import { Dayjs } from "dayjs";

export interface IOrderQueryParams {
  numeroPedido: number | null;
  numeroDocumento: number | null;
  fechaInicial: Dayjs | null;
  fechaFinal: Dayjs | null;
}

export const initialOrdenParms: IOrderQueryParams = {
  numeroPedido: null,
  numeroDocumento: null,
  fechaFinal: null,
  fechaInicial: null,
};
