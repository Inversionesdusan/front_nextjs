import { Meta } from "../commons/MetaResponse";
import { NotRegisteredClientResponseAttributes } from "./NotRegisteredClientResponse";

export interface IGetClientByEmailResponse {
  data: GetClientByEmailData[];
  meta: Meta;
}

interface GetClientByEmailData {
  id: number;
  attributes: NotRegisteredClientResponseAttributes;
}
