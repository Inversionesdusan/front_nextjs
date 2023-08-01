import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = (
  downSm: boolean,
  downMd: boolean,
  downLg: boolean,
  downXl: boolean
) => {
  const container: SxProps<Theme> = {
    height: downLg ? undefined : "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingY: downMd ? undefined : downLg ? "6rem" : undefined,
    paddingX: downMd ? "1.5rem" : "3rem",
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
    width: downSm ? "100%" : downMd ? "90%" : downXl ? "710px " : "810px",
    height: "563px",
    background: colors.green,
    borderRadius: downSm
      ? "50px 50px 50px 50px"
      : downMd
      ? "150px 150px 150px 150px"
      : "286px 286px 600px 600px",
  };

  const infoTextContainer: SxProps<Theme> = {
    width: downSm ? "85%" : downMd ? "70%" : "700px",
    height: downMd ? "530px" : "560px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: downMd ? "translate(-50%, -50%)" : "translate(-50%, -50%)",
    padding: "1rem",
  };

  return { container, leftForm, rightForm, infoContainer, infoTextContainer };
};
