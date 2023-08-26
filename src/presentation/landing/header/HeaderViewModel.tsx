"use client";
import { constantes } from "@/domain/constants";
import { CartItem } from "@/domain/models/store/CarItem";
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

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenCart = () => {
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
