import { Dayjs } from "dayjs";

export interface IOrderDataForm {
  estado: string;
  pagado: string | null;
  fechaPago: Dayjs | null;
  transaccionPago: string | null;
  fechaEstimadaDespacho: Dayjs | null;
  fechaRealDespacho: Dayjs | null;
  fechaEstimadaEntrega: Dayjs | null;
  fechaRealEntrega: Dayjs | null;
  valorFlete: number | null;
  transportadora: string | null;
}

export const initialOrderDataForm: IOrderDataForm = {
  estado: "Registrado",
  pagado: null,
  fechaPago: null,
  transaccionPago: null,
  fechaEstimadaDespacho: null,
  fechaRealDespacho: null,
  fechaEstimadaEntrega: null,
  fechaRealEntrega: null,
  valorFlete: null,
  transportadora: null,
};
