"use client";
import { Button, ButtonProps } from "@mui/material";

export interface ButtonCustomProps extends ButtonProps {}

const ButtonCustom = (props: ButtonCustomProps) => {
  return (
    <Button
      style={{
        fontFamily: "Nunito",
        fontWeight: "400",
        color: "rgb(56,59,64)",
        background: "rgba( 0, 0, 0, 0.1 )",
        boxShadow: "5px 5px 8px -4px rgba(0,0,0,0.47)",
        backdropFilter: "blur( 7.5px )",
        borderRadius: "20px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        width: "130px",
        textAlign: "center",
        padding: "0.25rem",
      }}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default ButtonCustom;
