import { IDatosEmpresaDto } from "@/domain/models/Dto/IDatosEmpresaDto";
import { IContactoFormValues } from "@/domain/models/forms/IContactForm";
import { IEmpresaServiceReturn } from "@/domain/services/EmpresaService";
import useCompanyStore from "@/domain/store/useCompanyStore";
import useModalStore from "@/domain/store/useModalStore";
import { useState } from "react";
import { UseFormReset } from "react-hook-form";

interface IContactoViewModelProps {
  EmpresaService: IEmpresaServiceReturn;
}

export interface IContactoViewModelReturn {
  loading: boolean;
  empresa: IDatosEmpresaDto;
  cargarDatosEmpresa: () => void;
  sending: boolean;
  handleSubmitForm: (
    data: IContactoFormValues,
    resetForm: UseFormReset<IContactoFormValues>,
    dataResetForm: IContactoFormValues
  ) => Promise<string>;
}

const ContactoViewModel = ({ EmpresaService }: IContactoViewModelProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [empresa, setEmpresa] = useState<IDatosEmpresaDto | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const { updateDataModal, closeModal } = useModalStore();
  const { companyData } = useCompanyStore();

  const cargarDatosEmpresa = async () => {
    setLoading(true);
    try {
      const datosEmpresa = await EmpresaService.getDatosEmpresa();
      setEmpresa(datosEmpresa);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (title: string, message: string) => {
    updateDataModal({
      open: true,
      title,
      message,
      onAccept: closeModal,
    });
  };

  const handleSubmitForm = async (
    data: IContactoFormValues,
    resetForm: UseFormReset<IContactoFormValues>,
    dataResetForm: IContactoFormValues
  ) => {
    try {
      setSending(true);
      const resp = await EmpresaService.saveDataContacto(
        data,
        companyData.companyData.email
      );
      handleOpenModal(
        "Atención",
        "Se ha guardado la información. En breve te estaremos contactando"
      );
      resetForm(dataResetForm);
    } catch (error) {
      handleOpenModal(
        "Advertencia",
        "NO se ha guardado la información. Intente nuevamente"
      );
    } finally {
      setSending(false);
    }
  };

  return {
    loading,
    empresa,
    cargarDatosEmpresa,
    sending,
    handleSubmitForm,
  };
};

export default ContactoViewModel;
