"use client";
import { constantes } from "@/domain/constants";
import { CartItem } from "@/domain/models/store/CarItem";
import useModalStore from "@/domain/store/useModalStore";
import useAppStore from "@/domain/store/useStore";
import React, { useState } from "react";

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
}

const HeaderViewModel = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { shoppingCart, initializeCart } = useAppStore();
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { closeModal, updateDataModal } = useModalStore();

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenCart = () => {
    console.log(!openCart);
    console.log(shoppingCart);
    if (!openCart && shoppingCart.length === 0)
      return updateDataModal({
        open: true,
        title: "Atención",
        message: "No hay productos en el carrito de compras",
        onAccept: closeModal,
        onCancel: undefined,
      });
    console.log("abrir carrito");
    setOpenCart(!openCart);
  };

  const loadItems = () => {
    const data = JSON.parse(
      localStorage.getItem(constantes.keys.shoppingCar) || "[]"
    ) as CartItem[];
    initializeCart(data);
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
  };
};

export default HeaderViewModel;
