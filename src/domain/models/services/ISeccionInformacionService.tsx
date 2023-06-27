import { ISeccionInformacionDto } from "../Dto/ISeccionInformacionDto";

export interface ISeccionInformacionService {
  SeccionInformacionService: {
    getDataSeccionInformacion: () => Promise<ISeccionInformacionDto[]>;
  };
}
