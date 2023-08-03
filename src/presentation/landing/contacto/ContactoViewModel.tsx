import { IDatosEmpresaDto } from "@/domain/models/Dto/IDatosEmpresaDto";
import { IContactoFormValues } from "@/domain/models/forms/IContactForm";
import { IEmpresaServiceReturn } from "@/domain/services/EmpresaService";
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
  handleCloseModal: () => void;
  openModal: boolean;
  dataModal: {
    title: string;
    message: string;
  };
}

const ContactoViewModel = ({ EmpresaService }: IContactoViewModelProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [empresa, setEmpresa] = useState<IDatosEmpresaDto | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<{
    title: string;
    message: string;
  }>({ title: "", message: "" });

  const cargarDatosEmpresa = async () => {
    setLoading(true);
    const datosEmpresa = await EmpresaService.getDatosEmpresa();
    setEmpresa(datosEmpresa);
    setLoading(false);
  };

  const handleOpenModal = (title: string, message: string) => {
    setOpenModal(true);
    setDataModal({ title, message });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitForm = async (
    data: IContactoFormValues,
    resetForm: UseFormReset<IContactoFormValues>,
    dataResetForm: IContactoFormValues
  ) => {
    try {
      setLoading(true);
      console.log("grabando datos del contacto -> ", data);
      setSending(true);
      const resp = await EmpresaService.saveDataContacto(data);
      console.log("resp -> ", resp);
      handleOpenModal(
        "Atención",
        "Se ha guardado la información. En breve te estaremos contactando"
      );
      setSending(false);
      resetForm(dataResetForm);
    } catch (error) {
      handleOpenModal(
        "Advertencia",
        "NO se ha guardado la información. Intente nuevamente"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    empresa,
    cargarDatosEmpresa,
    sending,
    handleSubmitForm,
    handleCloseModal,
    openModal,
    dataModal,
  };
};

export default ContactoViewModel;
