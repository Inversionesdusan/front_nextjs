import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = (url: string) => {
  const card: SxProps<Theme> = {
    width: "260px",
    borderRadius: "20px",
    paddingY: "1rem",
    paddingX: "1.25rem",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    transition: "all 0.6s ease",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all 0.6s ease",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px",
    },
  };

  const typeLabel: SxProps<Theme> = {
    fontFamily: "Montserrat",
    color: colors.solidGreen,
    fontSize: "1rem",
    fontWeight: "500",
  };

  const nameLabel: SxProps<Theme> = {
    fontFamily: "Cunia",
    color: colors.solidBlack,
    marginY: "0.25rem",
  };

  const productImage: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "230px",
    borderRadius: "10px",
    backgroundImage: `url('https://backendmysql-production.up.railway.app${url}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    marginY: "1rem",
  };

  const priceLabel: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.9rem",
    color: colors.solidGreen,
    fontWeight: "700",
    marginBottom: "1rem",
  };

  const moreButton: SxProps<Theme> = {
    background: colors.mediumGray,
    color: colors.solidGreen,
    width: "100%",
    marginY: "0.24rem",
  };

  const labelMoreButton: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    textAlign: "center",
    fontWeight: "700",
    marginY: "auto",
  };

  const carButton: SxProps<Theme> = {
    background: colors.green,
    color: colors.white,
    width: "100%",
    marginY: "0.25rem",
  };

  const labelCarButton: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    textAlign: "center",
    fontWeight: "700",
    marginY: "auto",
  };

  return {
    card,
    typeLabel,
    nameLabel,
    productImage,
    moreButton,
    labelMoreButton,
    carButton,
    labelCarButton,
    priceLabel,
  };
};
