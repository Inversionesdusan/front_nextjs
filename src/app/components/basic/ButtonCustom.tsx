"use client";
import { colors } from "@/presentation/styles/colors";
import { Button, ButtonProps, CircularProgress } from "@mui/material";

export interface ButtonCustomProps extends ButtonProps {
  typeButton: "form" | "modal";
  loading?: boolean;
}

const ButtonCustom = (props: ButtonCustomProps) => {
  return (
    <Button
      disabled={props.loading}
      style={{
        width: "160px",
        height: "50px",
        background: props.typeButton === "form" ? colors.white : colors.green,
        fontFamily: "Montserrat",
        fontSize: props.typeButton === "form" ? "2.5rem" : "1rem",
        fontWeight: "600",
        color: props.typeButton === "form" ? colors.green : colors.white,
        borderRadius: "50px",
        textAlign: "center",
        padding: "0.5rem",
      }}
      onClick={props.onClick}
      {...props}
    >
      {props.loading ? (
        <CircularProgress
          sx={{
            color: props.typeButton === "form" ? colors.green : colors.white,
            height: "60%",
            transform: "scale(80%)",
          }}
        />
      ) : (
        props.children
      )}
    </Button>
  );
};

export default ButtonCustom;
