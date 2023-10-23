import { IResetPasswordForm } from "@/domain/models/forms/IResetPasswordForm";
import { UseFormReturn, useForm } from "react-hook-form";
import { initialDataPasswordForm } from "../../domain/models/forms/IChangePasswordForm";
import { IAuthService } from "@/domain/services/AuthService";
import { useState } from "react";
import useModalStore from "@/domain/store/useModalStore";
import { initialDataResetPassword } from "../../domain/models/forms/IResetPasswordForm";
import { useRouter } from "next/navigation";

interface ResetPasswordViewModel {
  AuthService: IAuthService;
}

export interface ResetPasswordViewModelReturn {
  formClientData: UseFormReturn<IResetPasswordForm, any, undefined>;
  savingData: boolean;
  handleClick: (code: string) => Promise<void>;
}

const ResetPasswordViewModel = ({ AuthService }: ResetPasswordViewModel) => {
  const router = useRouter();
  const [savingData, setSavingData] = useState<boolean>(false);
  const { updateDataModal, closeModal } = useModalStore();

  const formClientData = useForm<IResetPasswordForm>({
    defaultValues: { ...initialDataPasswordForm },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });

  const handleClick = async (code: string) => {
    await formClientData.trigger();
    if (!formClientData.formState.isValid) {
      updateDataModal({
        open: true,
        title: "Atención",
        message: "Existen errores a corregir en la nueva clave",
        onAccept: closeModal,
      });
      return;
    }
    setSavingData(true);
    updateDataModal({
      open: true,
      title: "Actualización",
      message: "Actualizando contraseña...",
      onAccept: closeModal,
    });
    const values = formClientData.getValues();

    AuthService.updatePassword({
      code,
      password: values.password,
      passwordConfirmation: values.passwordConfirmation,
    })
      .then((resp) => {
        updateDataModal({
          open: true,
          title: "Atención",
          message: "La contraseña ha sido actualizada",
          onAccept: () => {
            formClientData.reset({ ...initialDataResetPassword });
            closeModal();
            router.push("/");
          },
        });
      })
      .catch((error) => {
        updateDataModal({
          open: true,
          title: "Atención",
          message: "El enlace ya no es valido. Debe hacer una nueva solicitud",
          onAccept: closeModal,
        });
      })
      .finally(() => {
        setSavingData(false);
      });
  };

  return { formClientData, savingData, handleClick };
};

export default ResetPasswordViewModel;
