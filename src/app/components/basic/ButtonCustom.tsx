"use client";
import { colors } from "@/presentation/styles/colors";
import { Button, ButtonProps } from "@mui/material";

export interface ButtonCustomProps extends ButtonProps {}

const ButtonCustom = (props: ButtonCustomProps) => {
  return (
    <Button
      style={{
        width: "160px",
        height: "50px",
        background: colors.white,
        fontFamily: "Montserrat",
        fontSize: "2.5rem",
        fontWeight: "600",
        color: colors.green,
        borderRadius: "50px",
        textAlign: "center",
        padding: "0.5rem",
      }}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default ButtonCustom;
