import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = (downLg: boolean, downXl: boolean) => {
  const container: SxProps<Theme> = {
    height: downLg ? undefined : "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingY: downLg ? "6rem" : undefined,
    paddingX: "3rem",
    background: "red",
  };

  const leftForm: SxProps<Theme> = {
    width: downXl ? "162px" : "324px",
    height: "138px",
    borderRadius: "285px 285px 600px 600px",
    background: colors.green,
    position: "absolute",
    top: "40%",
    left: downXl ? (downLg ? "1rem" : "4rem") : "2.5rem",
    display: downXl ? (downLg ? "none" : "block") : "block",
  };

  const rightForm: SxProps<Theme> = {
    width: downXl ? "162px" : "324px",
    height: "138px",
    borderRadius: "285px 285px 600px 600px",
    background: colors.green,
    position: "absolute",
    top: "40%",
    right: downXl ? (downLg ? "1rem" : "4rem") : "2.5rem",
    display: downXl ? (downLg ? "none" : "block") : "block",
  };

  const infoContainer: SxProps<Theme> = {
    width: downXl ? "710px " : "810px",
    height: "563px",
    background: colors.green,
    borderRadius: "286px 286px 600px 600px",
  };

  const infoTextContainer: SxProps<Theme> = {
    width: "700px",
    height: "560px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "1rem",
  };

  return { container, leftForm, rightForm, infoContainer, infoTextContainer };
};
