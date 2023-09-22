import { colors } from "@/presentation/styles/colors";
import { Button, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

interface CardButtonProperties {
  label: string;
  onClick: () => void;
  variant?: "black" | "green" | "gray";
  disabled?: boolean;
}

const styles = (variant: "black" | "green" | "gray") => {
  const button: SxProps<Theme> = {
    color: variant === "gray" ? colors.gray : colors.white,
    background:
      variant === "black"
        ? colors.black
        : variant === "green"
        ? colors.green
        : colors.mediumGray,
    borderRadius: "50px",
    width: "220px",
    height: "36px",
    padding: "6px 8px",
    transition: "all 0.4s ease",
    "&:hover": {
      background: variant === "gray" ? colors.mediumGray : undefined,
      color: variant !== "gray" ? colors.mediumGray : undefined,
      transition: "all 0.4s ease",
      transform: "scale(1.05)",
    },
  };

  const labelButton: CSSProperties = {
    color: "inherit",
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    fontWeight: "700",
    textAlign: "center",
  };

  return { button, labelButton };
};

const CardButton = ({
  label,
  onClick,
  variant = "black",
  disabled = false,
}: CardButtonProperties) => {
  const { button, labelButton } = styles(variant);

  return (
    <Button sx={button} onClick={onClick} disabled={disabled}>
      <span style={labelButton}>{label}</span>
    </Button>
  );
};

export default CardButton;
