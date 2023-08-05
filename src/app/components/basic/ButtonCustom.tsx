"use client";
import { colors } from "@/presentation/styles/colors";
import { Button, ButtonProps, CircularProgress } from "@mui/material";

export interface ButtonCustomProps extends ButtonProps {
  typeButton: "form" | "modal";
  loading?: boolean;
  invert?: boolean;
}

const ButtonCustom = (props: ButtonCustomProps) => {
  return (
    <Button
      disabled={props.loading}
      sx={{
        transition: "all 0.6s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "rgba(0,0,0,0.16) 0px 2px 4px",
        },
      }}
      style={{
        width: "160px",
        height: "50px",
        background:
          props.typeButton === "form"
            ? colors.lightGray
            : props.invert
            ? colors.gray
            : colors.green,
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
            color:
              props.typeButton === "form"
                ? colors.green
                : props.invert
                ? colors.solidGreen
                : colors.white,
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
