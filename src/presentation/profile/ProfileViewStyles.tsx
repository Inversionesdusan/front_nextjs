import { SxProps, Theme } from "@mui/material";
import { colors } from "../styles/colors";

export const styles = () => {
  const container: SxProps<Theme> = {
    width: "100%",
    paddingY: "2rem",
  };

  const accordion: SxProps<Theme> = {
    background: "transparent",
    borderRadius: "30px",
  };

  const accordionSummary: SxProps<Theme> = {
    background: colors.green,
  };

  const details: SxProps<Theme> = {
    background: colors.gradientGray,
    borderRadius: "30px",
    padding: "3rem",
  };

  const gridCellLeft: SxProps<Theme> = {
    paddingRight: "1.5rem",
  };

  const gridCellRight: SxProps<Theme> = {
    paddingLeft: "1.5rem",
  };

  const boxNoData: SxProps<Theme> = {
    display: "flex",
    width: "100%",
    height: "250px",
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

  return {
    container,
    accordion,
    accordionSummary,
    details,
    gridCellLeft,
    gridCellRight,
    boxNoData,
    progress,
    textEmptyState,
  };
};
