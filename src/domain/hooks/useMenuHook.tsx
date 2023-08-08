import { DropDownMenuOpion } from "@/presentation/components/dropdownMenu/DropDownMenu";
import { useState } from "react";

const useMenuHook = () => {
  const [openModalRegistro, setOpenModalRegistro] = useState<boolean>(false);
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);

  const handleOpenModalRegistro = () => {
    setOpenModalRegistro(!openModalRegistro);
  };

  const handleOpenModalLogin = () => {
    setOpenModalLogin(!openModalLogin);
  };

  const menuOptions: DropDownMenuOpion[] = [
    {
      label: "Registrarme",
      handleClickOption: handleOpenModalRegistro,
    },
    {
      label: "Ingresar",
      handleClickOption: handleOpenModalLogin,
    },
  ];

  return {
    menuOptions,
    handleOpenModalLogin,
    openModalLogin,
    handleOpenModalRegistro,
    openModalRegistro,
  };
};

export default useMenuHook;
