import { ISeccionInformacionResponse } from "@/domain/models/responses/ISeccionInformacionResponse";

export interface ISeccionInformacionDataSource {
  SeccionInformacionDataSource: {
    getDataSeccionInformacion: () => Promise<ISeccionInformacionResponse>;
  };
}
