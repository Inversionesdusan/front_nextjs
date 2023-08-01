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
  };

  const textBoxContainer: SxProps<Theme> = {
    textAlign: "center",
    transform: downLg ? "translateY(-1rem)" : "translateY(-1.5rem)",
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

  const catologContainer: SxProps<Theme> = {
    flex: downLg ? undefined : 3,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: downLg ? "0" : "66px",
    height: downXl ? undefined : "100vh",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  };

  return {
    container,
    textBox,
    textBoxContainer,
    title,
    subtitle,
    catologContainer,
  };
};
