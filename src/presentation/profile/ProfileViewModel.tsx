import { IUserDto } from "@/domain/models/Dto/IClientDto";
import { IClientsService } from "@/domain/services/ClientsService";
import { useState } from "react";
import useAuthStore, { AuthDataStore } from "../../domain/store/useAuthStore";
import {
  IClientForm,
  initialClientData,
} from "@/domain/models/forms/IClientForm";
import { UseFormReturn, useForm } from "react-hook-form";
import useModalStore from "@/domain/store/useModalStore";
import { getErrorMessage } from "@/domain/helpers/errorMessages";
import { IAddressForm } from "@/domain/models/forms/IAddressForm";
import { initialAddressData } from "../../domain/models/forms/IAddressForm";
import { SelectChangeEvent } from "@mui/material";
import { IClientUpdateRequest } from "@/domain/models/requests/IClientUpdateRequest";
import {
  IChangePasswordForm,
  initialDataPasswordForm,
} from "@/domain/models/forms/IChangePasswordForm";
import { IAuthService } from "@/domain/services/AuthService";
import useLocalStorage from "@/domain/hooks/useLocalStorage";

interface ProfileViewNodelProps {
  ClientsService: IClientsService;
  AuthService: IAuthService;
}

export interface IProfileViewModel {
  loadingData: boolean;
  userData: IUserDto | undefined;
  getUserData: () => void;
  dataLoaded: boolean;
  formClientData: UseFormReturn<IClientForm, any, undefined>;
  savingData: boolean;
  verifyClientDataForm: () => Promise<void>;
  authData: AuthDataStore;
  formAddressData: UseFormReturn<IAddressForm, any, undefined>;
  updateShippingAddress: () => Promise<void>;
  handleSelectChange: (event: SelectChangeEvent) => void;
  disableShipping: boolean;
  direccionEnvio: string;
  updatePassword: () => Promise<void>;
  formPassword: UseFormReturn<IChangePasswordForm, any, undefined>;
}

const ProfileViewModel = ({
  ClientsService,
  AuthService,
}: ProfileViewNodelProps) => {
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserDto | undefined>(undefined);
  const { authData } = useAuthStore();
  const [savingData, setSavingData] = useState<boolean>(false);
  const { updateDataModal, closeModal } = useModalStore();
  const { updateUserData } = useAuthStore();
  const [disableShipping, setDisableShipping] = useState<boolean>(false);
  const [direccionEnvio, setDireccionEnvio] = useState<string>("S");
  const { authenticate } = useAuthStore();
  const { saveUserData } = useLocalStorage();

  const formClientData = useForm<IClientForm>({
    defaultValues: { ...initialClientData },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });

  const formAddressData = useForm<IAddressForm>({
    defaultValues: { ...initialAddressData },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });

  const formPassword = useForm<IChangePasswordForm>({
    defaultValues: { ...initialDataPasswordForm },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    setDireccionEnvio(event.target.value);
    if (event.target.value === "S") {
      const clientData = formClientData.getValues();
      if (clientData) {
        formAddressData.reset({
          direccion: clientData?.direccion || "",
          complemento: clientData?.complemento || "",
          departamento: clientData?.departamento || "",
          ciudad: clientData?.ciudad || "",
          barrio: clientData?.barrio || "",
        });
      }
      setDisableShipping(true);
    } else {
      formAddressData.reset({
        ...initialAddressData,
      });
      setDisableShipping(false);
    }
  };

  const getUserData = async () => {
    try {
      setLoadingData(true);
      setDataLoaded(false);
      const resp = await ClientsService.loadClientData(authData.token);
      setUserData(resp);
      const direccionEnv = resp.direccion_envio;
      formClientData.reset({
        nombres: resp.nombres,
        apellidos: resp.apellidos,
        email: resp.email,
        telefono: resp.telefono,
        tipoDocumento: resp.tipoDocumento,
        numeroDocumento: resp.numeroDocumento,
        digitoVerificacion: resp.digitoVerificacion || "",
        direccion: resp.direccion?.direccion || "",
        complemento: resp.direccion?.complemento || "",
        departamento: resp.direccion?.departamento || "",
        ciudad: resp.direccion?.ciudad || "",
        barrio: resp.direccion?.barrio || "",
      });
      setDireccionEnvio(direccionEnv ? "N" : "S");
      if (direccionEnv) {
        formAddressData.reset({
          direccion: direccionEnv?.direccion || "",
          complemento: direccionEnv?.complemento || "",
          departamento: direccionEnv?.departamento || "",
          ciudad: direccionEnv?.ciudad || "",
          barrio: direccionEnv?.barrio || "",
        });
      }
      setDataLoaded(true);
    } catch (error) {
      setDataLoaded(false);
    } finally {
      setLoadingData(false);
    }
  };

  const updateShippingAddress = async () => {
    await formAddressData.trigger();
    if (!formAddressData.formState.isValid) {
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "Debes digitar toda la información requerida",
        onAccept: closeModal,
      });
    }

    try {
      setLoadingData(true);
      updateDataModal({
        open: true,
        title: "Atención",
        message: "Actualilzando datos de envío...",
        onAccept: undefined,
        onCancel: undefined,
      });

      const data = formAddressData.getValues();
      const resp = await ClientsService.updateClientData(
        authData.token,
        authData.user.userId,
        {
          direccion_envio: {
            direccion: data?.direccion || "",
            complemento: data?.complemento || "",
            departamento: data?.departamento || "",
            ciudad: data?.ciudad || "",
            barrio: data?.barrio || "",
          },
        },
        direccionEnvio
      );

      updateDataModal({
        open: true,
        title: "Atención",
        message: "Datos actualizados correctamente",
        onAccept: closeModal,
      });
    } catch (error) {
      updateDataModal({
        open: true,
        title: "Atención",
        message: getErrorMessage(error),
        onAccept: closeModal,
      });
    } finally {
      setLoadingData(true);
    }
  };

  const verifyClientDataForm = async () => {
    await formClientData.trigger();
    if (!formClientData.formState.isValid) {
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "Debes digitar toda la información requerida",
        onAccept: closeModal,
      });
    }
    try {
      setLoadingData(true);
      updateDataModal({
        open: true,
        title: "Atención",
        message: "Actualilzando información del cliente...",
        onAccept: undefined,
        onCancel: undefined,
      });

      const data = formClientData.getValues();
      const updateObj: IClientUpdateRequest = {
        nombres: data.nombres,
        apellidos: data.apellidos,
        telefono: data.telefono,
        tipo_documento: data.tipoDocumento,
        numero_documento: data.numeroDocumento,
        digito_verificacion: data.digitoVerificacion || undefined,
        direccion: {
          direccion: data?.direccion || "",
          complemento: data?.complemento || "",
          departamento: data?.departamento || "",
          ciudad: data?.ciudad || "",
          barrio: data.barrio || "",
        },
      };
      if (direccionEnvio === "S") {
        updateObj.direccion_envio = undefined;
      }
      const resp = await ClientsService.updateClientData(
        authData.token,
        authData.user.userId,
        updateObj,
        direccionEnvio
      );
      updateUserData({
        userId: authData.user.userId,
        nombres: resp.nombres,
        apellidos: resp.apellidos,
        email: resp.email,
        tipoDocumento: resp.tipoDocumento || "",
        numeroDocumento: resp.numeroDocumento || "",
        digitoVerifica: resp.digitoVerificacion || "",
        tipoUsuario: resp.tipoUsuario,
        telefono: resp.telefono,
      });

      updateDataModal({
        open: true,
        title: "Atención",
        message: "Datos actualizados correctamente",
        onAccept: closeModal,
      });
    } catch (error) {
      updateDataModal({
        open: true,
        title: "Atención",
        message: getErrorMessage(error),
        onAccept: closeModal,
      });
    } finally {
      setLoadingData(false);
    }
  };

  const updatePassword = async () => {
    await formPassword.trigger();
    if (!formPassword.formState.isValid) {
      return updateDataModal({
        open: true,
        title: "Atención",
        message:
          "Digite toda la información necesaria para el cambio de contraseña",
        onAccept: closeModal,
      });
    }
    const data = formPassword.getValues();

    if (data.password !== data.passwordConfirmation) {
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "Contraseña y confirmación de contraseña no concuerdan",
        onAccept: closeModal,
      });
    }
    try {
      setSavingData(true);
      const resp = await AuthService.changePassword(authData.token, {
        ...data,
      });
      authenticate(resp.jwt, {
        userId: resp.id,
        email: resp.email,
        nombres: resp.nombres,
        apellidos: resp.apellidos,
        tipoDocumento: resp.tipoDocumento || "",
        numeroDocumento: resp.numeroDocumento || "",
        digitoVerifica: resp.digitoVerificacion || "",
        tipoUsuario: resp.tipoUsuario,
        telefono: resp.telefono,
      });
      saveUserData(resp.jwt, resp.id);
      formPassword.reset({ ...initialDataPasswordForm });
      updateDataModal({
        open: true,
        title: "Atención",
        message: "La contreseña ha sido cambiada",
        onAccept: closeModal,
      });
    } catch (error) {
      updateDataModal({
        open: true,
        title: "Atención",
        message: getErrorMessage(error),
        onAccept: closeModal,
      });
    } finally {
      setSavingData(false);
    }
  };

  return {
    loadingData,
    userData,
    getUserData,
    dataLoaded,
    formClientData,
    savingData,
    verifyClientDataForm,
    authData,
    formAddressData,
    updateShippingAddress,
    handleSelectChange,
    disableShipping,
    direccionEnvio,
    updatePassword,
    formPassword,
  };
};

export default ProfileViewModel;
