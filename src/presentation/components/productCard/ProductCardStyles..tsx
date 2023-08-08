import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = (
  downXl: boolean,
  position: "center" | "topLeft" | "topRigth" | "bottomLeft" | "bottomRigth",
  imageLink?: string
) => {
  const getBorderRadius = (position: string): string => {
    if (position === "center" || downXl) return "50px";
    if (position === "topLeft" || position === "bottomRigth")
      return "0 50px 0 50px";
    if (position === "topRigth" || position === "bottomLeft")
      return "50px 0 50px 0";
    return "50px";
  };

  const cardContainer: SxProps<Theme> = {
    width: downXl ? "312px" : "290px",
    height: "351px",
    background: colors.black,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    justifyContent: "space-between",
    borderRadius: getBorderRadius(position),
    borderStyle: "none",
    borderBottom: "1px solid " + colors.lightGray,
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "scale(1.03)",
      borderBottom: "none",
      boxShadow:
        "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    },
  };

  const productName: SxProps<Theme> = {
    height: "3rem",
    background: colors.green,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const labelProductName: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: downXl ? "1.25rem" : "1.5rem",
    fontWeight: "500",
  };

  const productImage: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "230px",
    flex: 1,
    backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${imageLink}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  const buttonContainer: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const button: SxProps<Theme> = {
    width: "186px",
    height: "48px",
    background: colors.white,
    color: colors.black,
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    position: "relative",
    bottom: "-5px",
    "&:hover": {
      background: colors.lightGray,
      color: colors.black,
    },
  };

  const buttonLabel: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    fontWeight: "500",
  };

  return {
    cardContainer,
    productName,
    labelProductName,
    productImage,
    button,
    buttonLabel,
    buttonContainer,
  };
};
