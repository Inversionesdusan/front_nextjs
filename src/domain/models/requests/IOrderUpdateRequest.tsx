export interface IOrderUpdateRequest {
  data: {
    estado?: string;
    transportadora?: string;
    valorFlete?: number;
    pagado?: string;
    fechaPago?: string;
    transaccionPago?: string;
    fechaRealDespacho?: string;
    fechaRealEntrega?: string;
  };
}
