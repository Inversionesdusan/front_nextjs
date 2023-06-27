"use client";

import { Button, ButtonProps } from "@mui/material";
import React from "react";

export interface ButtonCustomProps extends ButtonProps {
  label: string;
}

const ButtonCustom = ({ onClick, label }: ButtonCustomProps) => {
  return (
    <Button
      sx={{
        background: "blue",
        color: "white",
        borderRadius: "10px",
        width: "100px",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonCustom;
