import { Meta } from "../commons/MetaResponse";
import { IOrderQueryResponseData } from "./IOrderQueryResponse";

export interface IOrderUpdateResponse {
  data: IOrderQueryResponseData;
  meta: Meta;
}
