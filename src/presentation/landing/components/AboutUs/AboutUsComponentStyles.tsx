import { SxProps, Theme } from "@mui/material";

export const styles = (downSm: boolean, downMd: boolean) => {
  const informationContainer: SxProps<Theme> = {
    width: downMd ? "100%" : "550px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginX: "auto",
  };

  const textTitle: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: downSm ? "1.5rem" : downMd ? "1.5rem" : "3rem",
    fontWeight: "700",
    marginBottom: downMd ? "1.5rem" : "1rem",
  };

  const textMessage: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: downSm ? "1rem" : "1.25rem",
    textAlign: "center",
    marginBottom: "1rem",
    fontWeight: "300",
    lineHeight: downSm ? "1.5rem" : undefined,
  };

  return { informationContainer, textTitle, textMessage };
};
