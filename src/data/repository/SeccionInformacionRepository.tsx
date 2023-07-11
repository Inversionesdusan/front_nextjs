import { ISeccionInformacionDto } from "@/domain/models/Dto/ISeccionInformacionDto";
import { ISeccionInformacionDataSource } from "@/domain/models/dataSources/ISeccionInformacionDataSource";

export function SeccionInformacionRepository({
  SeccionInformacionDataSource,
}: ISeccionInformacionDataSource) {
  const getDataSeccionInformacion = async (): Promise<
    ISeccionInformacionDto[]
  > => {
    const response =
      await SeccionInformacionDataSource.GetDataSeccionInformacion();
    let secciones: ISeccionInformacionDto[] = [];
    if (response.meta.pagination.total === 0) return secciones;
    secciones = response.data.map((seccion) => {
      const newSeccion: ISeccionInformacionDto = {
        id: seccion.id,
        titulo: seccion.attributes.titulo,
        informacion: seccion.attributes.informacion,
        estado: seccion.attributes.estado,
      };
      return newSeccion;
    });
    return secciones;
  };

  return {
    getDataSeccionInformacion,
  };
}
