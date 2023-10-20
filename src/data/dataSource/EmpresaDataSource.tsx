import queryClient from "@/domain/configuations/reactQueryConfig";
import { constantes } from "@/domain/constants";
import { ISaveDataContactRequest } from "@/domain/models/requests/ISaveDataContactRequest";
import { IDatosEmpresaResponse } from "@/domain/models/responses/IDatosEmpresaResponse";
import { ISaveDataClientResponse } from "@/domain/models/responses/ISaveDataClientResponse";
import axios, { AxiosRequestConfig } from "axios";

export const GetDatosEmpresa = async (): Promise<IDatosEmpresaResponse> => {
  const fetchDataEmpresa = async () => {
    const request: AxiosRequestConfig = {
      method: "GET",
      baseURL: constantes.paths.BASE_URL_API,
      url: `${constantes.endpoints.empresa}?populate=*`,
    };
    const response = await axios.request<IDatosEmpresaResponse>(request);
    return response.data;
  };

  try {
    const data = await queryClient.fetchQuery(
      "getDatosEmpresa",
      fetchDataEmpresa,
      { staleTime: 86400000, retry: 2 }
    );

    return data;
  } catch (error) {
    throw new Error("Error al obtener datos de la empresa");
  }
};

export const SaveDatosContacto = async (
  dataContacto: ISaveDataContactRequest,
  emailEmpresa: string
) => {
  const request: AxiosRequestConfig = {
    method: "POST",
    baseURL: constantes.paths.BASE_URL_API,
    url: constantes.endpoints.contacto,
    data: { ...dataContacto, emailEmpresa },
  };

  try {
    const { data } = await axios.request<ISaveDataClientResponse>(request);
    if (data.data.id && data.data.id > 0) return "El mensaje ha sido grabado";
  } catch (error) {
    return "Ha ocurrido un error al enviar el mensaje.  Intente nuevamente";
  }
};
