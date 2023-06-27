import { ISeccionInformacionDto } from "@/domain/models/Dto/ISeccionInformacionDto";
import { ISeccionInformacionService } from "@/domain/models/services/ISeccionInformacionService";
import React, { useState } from "react";

const InformacionViewModel = ({
  SeccionInformacionService,
}: ISeccionInformacionService) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [informacion, setInformacion] = useState<ISeccionInformacionDto[]>([]);

  const getInformacion = async () => {
    setLoading(true);
    const resp = await SeccionInformacionService.getDataSeccionInformacion();
    console.log("** respuesta servicio  ->  ", resp);
    setInformacion(resp);
    setLoading(false);
  };

  return { loading, getInformacion, informacion };
};

export default InformacionViewModel;
