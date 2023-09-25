import { SxProps, Theme } from "@mui/material";
import { colors } from "../styles/colors";

export const styles = () => {
  const container: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const orderContainer: SxProps<Theme> = {
    maxWidth: "1200px",
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  };

  const headerBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingY: "1rem",
    borderBottom: `solid 1px ${colors.solidGreen}`,
  };

  const titleBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  };

  const title: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: "1.5rem",
    color: colors.solidGreen,
  };

  const subtitle: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: "1.25rem",
    color: colors.solidGreen,
  };

  const detailBox: SxProps<Theme> = {
    width: "100%",
    display: { xs: "block", md: "flex" },
    flexDirection: "row",
    paddingY: "1rem",
  };

  const productDetailBox: SxProps<Theme> = {
    flex: "3",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const summaryBox: SxProps<Theme> = {
    flex: "1",
    paddingLeft: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: { xs: "2rem", md: "0" },
  };

  const boxNoData: SxProps<Theme> = {
    display: "flex",
    width: "100%",
    height: "350px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: colors.solidGreen,
  };

  const textEmptyState: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: "1.5rem",
  };

  const progress: SxProps<Theme> = {
    color: colors.solidGreen,
    marginBottom: "2rem",
  };

  const formSection: SxProps<Theme> = {
    marginTop: "1rem",
    borderTop: `solid 1px ${colors.solidGreen}`,
    display: "flex",
    flexDirection: "column",
  };

  const disclaimer: SxProps<Theme> = {
    marginY: "1rem",
    width: "100%",
    minHeight: "100px",
    background: colors.green,
    borderRadius: "50px",
    paddingX: "0.5rem",
    paddingY: "2.5rem",
  };

  const iconEmptyState: SxProps<Theme> = {
    backgroundColor: colors.mediumGray,
    borderRadius: "100%",
    padding: "2rem",
    fontSize: "10rem",
    marginBottom: "2rem",
  };

  return {
    container,
    orderContainer,
    headerBox,
    titleBox,
    title,
    subtitle,
    detailBox,
    productDetailBox,
    summaryBox,
    boxNoData,
    textEmptyState,
    progress,
    formSection,
    disclaimer,
    iconEmptyState,
  };
};
