"use client";
import React from "react";

export interface IHeaderViewModelReturn {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  open: Boolean;
  handleClick: (value: React.SetStateAction<HTMLElement | null>) => void;
  handleClose: () => void;
}

const HeaderViewModel = () => {
  return {};
};

export default HeaderViewModel;
