"use client";
import { constantes } from "@/domain/constants";
import { getErrorMessage } from "@/domain/helpers/errorMessages";
import useLocalStorage from "@/domain/hooks/useLocalStorage";
import { IUserDto } from "@/domain/models/Dto/IClientDto";
import { ILoginFormValues } from "@/domain/models/forms/ILoginForm";
import { IRegisterFormValues } from "@/domain/models/forms/IRegisterForm";
import { IClientRegisterRequest } from "@/domain/models/requests/IClientRegisterRequest";
import { ILoginRequest } from "@/domain/models/requests/ILoginRequest";
import { CartItem } from "@/domain/models/store/CarItem";
import { IAuthService } from "@/domain/services/AuthService";
import { IClientsService } from "@/domain/services/ClientsService";
import useAuthStore from "@/domain/store/useAuthStore";
import useModalStore from "@/domain/store/useModalStore";
import useAppStore from "@/domain/store/useStore";
import { DropDownMenuOpion } from "@/presentation/components/dropdownMenu/DropDownMenu";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { initialFormData } from "../../components/modalRegistro/ModalRegistro";
import { IEmpresaServiceReturn } from "@/domain/services/EmpresaService";
import useCompanyStore from "@/domain/store/useCompanyStore";

export interface IHeaderViewModelReturn {
  initializeCart: (items: CartItem[]) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  shoppingCart: CartItem[];
  open: boolean;
  handleOpenDrawer: () => void;
  handleOpenMenu: () => void;
  loadItems: () => void;
  openCart: boolean;
  handleOpenCart: () => void;
  openModalRegistro: boolean;
  savingData: boolean;
  menuOptionsLogged: DropDownMenuOpion[];
  registerClient: (
    clientData: IClientRegisterRequest,
    reset: UseFormReset<IRegisterFormValues>,
    handleOpenModalRegister: () => void
  ) => Promise<void>;
  loadUserData: () => void;
  openModalLogin: boolean;
  login: (
    loginData: ILoginRequest,
    reset: UseFormReset<ILoginFormValues>,
    handleOpenModalLogin: () => void
  ) => void;
  handleOpenModalLogin: () => void;
  handleOpenModalRegistro: () => void;
  loadCompanyData: () => void;
  openModalPassword: boolean;
  handleOpenModalPassword: () => {};
  resetPassword: (email: string) => {};
}

interface HeaderViewModelProps {
  ClientsService: IClientsService;
  AuthService: IAuthService;
  EmpresaService: IEmpresaServiceReturn;
}

const HeaderViewModel = ({
  ClientsService,
  AuthService,
  EmpresaService,
}: HeaderViewModelProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { shoppingCart, initializeCart } = useAppStore();
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { closeModal, updateDataModal } = useModalStore();
  const [openModalRegistro, setOpenModalRegistro] = useState<boolean>(false);
  const [savingData, setSavingData] = useState<boolean>(false);
  const { authenticate, authData, logout } = useAuthStore();
  const { saveUserData, clearUserData } = useLocalStorage();
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);
  const router = useRouter();
  const { companyData, setCompanyData } = useCompanyStore();
  const [openModalPassword, setOpenModalPassword] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };

  const handleOpenModalRegistro = () => {
    setOpenModalRegistro(!openModalRegistro);
  };

  const handleOpenModalPassword = () => {
    setOpenModalPassword(!openModalPassword);
  };

  const handleOpenCart = () => {
    if (!openCart && shoppingCart.length === 0)
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "No hay productos en el carrito de compras",
        onAccept: closeModal,
        onCancel: undefined,
      });
    setOpenCart(!openCart);
  };

  const loadItems = () => {
    const data = JSON.parse(
      localStorage.getItem(constantes.keys.shoppingCar) || "[]"
    ) as CartItem[];
    initializeCart(data);
  };

  const menuOptionsLogged: DropDownMenuOpion[] = [
    {
      label: "Mis Pedidos",
      handleClickOption: () => router.push("/pedidos/listado"),
    },
    {
      label: "Mis Datos",
      handleClickOption: () => router.push("/perfil"),
    },
    {
      label: "Cerrar Sesión",
      handleClickOption: () => cerrarSesion(),
    },
  ];

  const login = (
    loginData: ILoginRequest,
    reset: UseFormReset<ILoginFormValues>,
    handleOpenModalLogin: () => void
  ) => {
    setSavingData(true);
    AuthService.login(loginData)
      .then((resp) => {
        processUserData(resp, reset, "login", handleOpenModalLogin);
      })
      .catch((error) => {
        processError(error);
      })
      .finally(() => setSavingData(false));
  };

  const registerClient = (
    clientData: IClientRegisterRequest,
    reset: UseFormReset<IRegisterFormValues>,
    handleOpenModalRegister: () => void
  ) => {
    setSavingData(true);
    ClientsService.registerClient(clientData)
      .then((resp) => {
        processUserData(resp, reset, "register", handleOpenModalRegister);
      })
      .catch((error) => {
        processError(error);
      })
      .finally(() => {
        setSavingData(false);
      });
  };

  const processUserData = (
    resp: IUserDto,
    reset: any,
    proceso: "login" | "register",
    handleOpenModal: () => void
  ) => {
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
    reset({ ...initialFormData });
    setSavingData(false);
    saveUserData(resp.jwt, resp.id);
    handleOpenModal();
    if (proceso === "register") {
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "Los datos se han registrado correctamente",
        onAccept: closeModal,
        onCancel: undefined,
      });
    } else {
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "Benvenido, " + resp.nombres,
        onAccept: closeModal,
        onCancel: undefined,
      });
    }
  };

  const processError = (error: any) => {
    clearUserData();
    return updateDataModal({
      open: true,
      title: "Atención",
      message: getErrorMessage(error),
      onAccept: closeModal,
      onCancel: undefined,
    });
  };

  const loadUserData = () => {
    if (
      localStorage.getItem(constantes.keys.user) &&
      authData.dataLoaded === false
    ) {
      const data = JSON.parse(localStorage.getItem(constantes.keys.user)!);
      if (data?.token) {
        ClientsService.loadClientData(data?.token).then((resp) => {
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
        });
      }
    }
  };

  const cerrarSesion = () => {
    updateDataModal({
      open: true,
      title: "Atención",
      message: "Desea cerrar la sesión?",
      onAccept: () => {
        logout();
        localStorage.removeItem(constantes.keys.user);
        closeModal();
        router.push("/");
      },
      onCancel: closeModal,
    });
  };

  const loadCompanyData = () => {
    if (!companyData.dataLoaded) {
      EmpresaService.getDatosEmpresa().then((resp) => {
        setCompanyData({
          nombreEmpresa: resp.nombreEmpresa,
          direccionContacto: resp.direccionContacto,
          telefonoFijo: resp.telefonoFijo,
          telefonoCelular: resp.telefonoCelular,
          email: resp.email,
          ciudad: resp.ciudad,
          departamento: resp.departamento,
          nombreContacto: resp.nombreContacto,
        });
      });
    }
  };

  const resetPassword = (email: string) => {
    setSavingData(true);
    AuthService.resetPassword(email)
      .then((resp) => {
        setOpenModalPassword(false);
        if (resp) {
          updateDataModal({
            open: true,
            title: "Correo enviado",
            message:
              "Se ha eviado un link a la cuenta de correo indicada. (Revisar en la carpeta de spam o correo no deseado)",
            onAccept: () => {
              closeModal();
            },
          });
        }
      })
      .catch((error) => {
        setOpenModalPassword(false);
        updateDataModal({
          open: true,
          title: "Correo NO enviado",
          message:
            "Ha ocurrido un error al procesar la solicitud. intente nuevamente",
          onAccept: () => {
            closeModal();
          },
        });
      })
      .finally(() => {
        setSavingData(false);
      });
  };

  return {
    initializeCart,
    setOpen,
    setOpenMenu,
    openMenu,
    shoppingCart,
    open,
    handleOpenDrawer,
    handleOpenMenu,
    loadItems,
    openCart,
    handleOpenCart,
    openModalRegistro,
    savingData,
    menuOptionsLogged,
    registerClient,
    loadUserData,
    openModalLogin,
    login,
    handleOpenModalLogin,
    handleOpenModalRegistro,
    loadCompanyData,
    openModalPassword,
    handleOpenModalPassword,
    resetPassword,
  };
};

export default HeaderViewModel;
