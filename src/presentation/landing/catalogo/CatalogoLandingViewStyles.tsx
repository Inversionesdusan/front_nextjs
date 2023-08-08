import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = (downSm: boolean, downLg: boolean, downXl: boolean) => {
  const container: SxProps<Theme> = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: downLg ? "column" : "row",
    paddingY: downLg ? "6rem" : "3rem",
    paddingX: "3rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "2rem",
  };

  const textBox: SxProps<Theme> = {
    width: "100%",
    maxWidth: "500px",
    height: downLg ? undefined : "500px",
    background: colors.green,
    flex: downLg ? undefined : 2,
    borderTopRightRadius: "230px",
    borderBottomLeftRadius: "230px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingY: downLg ? "3rem" : undefined,
    transition: "all 0.5s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow:
        "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
    },
  };

  const textBoxContainer: SxProps<Theme> = {
    textAlign: "center",
    transform: downLg ? "translateY(-1rem)" : "translateY(-1.5rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const title: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: downSm ? "1.25rem" : downLg ? "2rem" : "3rem",
    fontWeight: "300",
  };

  const subtitle: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: downSm ? "1.25rem" : downLg ? "2rem" : "3rem",
    fontWeight: "700",
    lineHeight: downSm ? "1.25rem" : downLg ? "2rem" : "3rem",
  };

  const button: SxProps<Theme> = {
    display: {
      xs: "none",
      md: "flex",
      alignSelf: "center",
      marginTop: "2rem",
    },
  };

  const catologContainer: SxProps<Theme> = {
    flex: downLg ? undefined : 3,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: downLg ? "0" : "66px",
    flexWrap: "wrap",
    gap: "3rem",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1164px",
  };

  return {
    container,
    textBox,
    textBoxContainer,
    title,
    subtitle,
    catologContainer,
    button,
  };
};
