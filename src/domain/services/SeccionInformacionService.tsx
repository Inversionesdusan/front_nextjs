import { ISeccionInformacionDto } from "../models/Dto/ISeccionInformacionDto";
import { ISeccionInformacionRepository } from "../models/repositories/ISeccionInformacionRepository";

export function SeccionInformacionService({
  SeccionInformacionRepository,
}: ISeccionInformacionRepository) {
  const getDataSeccionInformacion = async (): Promise<
    ISeccionInformacionDto[]
  > => {
    return await SeccionInformacionRepository.getDataSeccionInformacion();
  };

  return {
    getDataSeccionInformacion,
  };
}
