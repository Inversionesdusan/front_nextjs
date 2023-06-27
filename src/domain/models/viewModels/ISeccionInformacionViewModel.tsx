import { ISeccionInformacionDto } from "../Dto/ISeccionInformacionDto";

export interface ISeccionInformacionViewModel {
  loading: boolean;
  informacion: ISeccionInformacionDto[];
  getInformacion: () => Promise<void>;
}
