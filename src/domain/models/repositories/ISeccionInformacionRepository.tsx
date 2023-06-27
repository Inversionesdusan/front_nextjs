import { ISeccionInformacionDto } from "../Dto/ISeccionInformacionDto";

export interface ISeccionInformacionRepository {
  SeccionInformacionRepository: {
    getDataSeccionInformacion: () => Promise<ISeccionInformacionDto[]>;
  };
}
