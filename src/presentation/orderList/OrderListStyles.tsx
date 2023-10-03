import { SxProps, Theme } from "@mui/material";
import { CuniaWhite16400, colors } from "../styles/colors";

export const styles = () => {
  const container: SxProps<Theme> = {
    marginTop: "66px",
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
    gap: { xs: "0.5rem", sm: undefined },
  };

  const titleBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  };

  const title: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem" },
    color: colors.solidGreen,
  };

  const subtitle: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem" },
    color: colors.solidGreen,
  };

  const buyButton: SxProps<Theme> = {
    width: "220px",
    height: "30px",
    background: colors.green,
    padding: "0.25rem",
    borderRadius: "50px",
  };

  const buttonLabel: SxProps<Theme> = {
    color: colors.white,
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    textAlign: "center",
    fontWeight: "700",
    marginY: "auto",
  };

  const tableBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingBottom: "1rem",
    gap: "2rem",
    marginTop: "2rem",
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

  const progress: SxProps<Theme> = {
    color: colors.solidGreen,
    marginBottom: "2rem",
  };

  const textEmptyState: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: "1.5rem",
  };

  const tableContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  };

  const controlsBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    width: "100%",
    height: "60px",
    gap: "3rem",
  };

  const iconEmptyState: SxProps<Theme> = {
    backgroundColor: colors.mediumGray,
    borderRadius: "100%",
    padding: "2rem",
    fontSize: "10rem",
    marginBottom: "2rem",
  };

  const formContainer: SxProps<Theme> = {
    marginTop: "2rem",
  };

  const accordion: SxProps<Theme> = {
    background: "transparent",
    borderRadius: "30px",
    width: "100%",
  };

  const accordionSummary: SxProps<Theme> = {
    background: colors.green,
  };

  const summaryLabel: SxProps<Theme> = {
    ...CuniaWhite16400,
    fontSize: { xs: "0.875rem", sm: "0.925rem", md: "1rem" },
  };

  const details: SxProps<Theme> = {
    background: colors.gradientGray,
    borderRadius: "30px",
    padding: { xs: "1.5rem", sm: "2rem", md: "3rem" },
  };

  return {
    container,
    orderContainer,
    headerBox,
    titleBox,
    title,
    subtitle,
    buyButton,
    buttonLabel,
    tableBox,
    boxNoData,
    progress,
    textEmptyState,
    tableContainer,
    controlsBox,
    iconEmptyState,
    formContainer,
    accordion,
    accordionSummary,
    summaryLabel,
    details,
  };
};
