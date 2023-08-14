import { SxProps, Theme } from "@mui/material";
import { colors } from "../styles/colors";

export const styles = () => {
  const container: SxProps<Theme> = {
    marginTop: "66px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const catalogContainer: SxProps<Theme> = {
    maxWidth: "1200px",
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  };

  const titleBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    paddingY: "1rem",
    borderBottom: `solid 1px ${colors.solidGreen}`,
  };

  const title: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: "1.5rem",
    color: colors.solidGreen,
  };

  const productContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: "2.5rem",
    flexWrap: "wrap",
    paddingY: "2rem",
  };

  const filterBox: SxProps<Theme> = {
    width: "100%",
    height: "70px",
    //borderBottom: `solid 1px ${colors.solidGreen}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
  };

  const filterText: SxProps<Theme> = {
    borderRadius: "1rem",
    fontFamily: "Montserrat",
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

  const iconEmptyState: SxProps<Theme> = {
    backgroundColor: colors.mediumGray,
    borderRadius: "100%",
    padding: "2rem",
    fontSize: "10rem",
    marginBottom: "2rem",
  };

  const textEmptyState: SxProps<Theme> = {
    fontFamily: "Cunia",
    fontSize: "1.5rem",
  };

  const progress: SxProps<Theme> = {
    color: colors.solidGreen,
    marginBottom: "2rem",
  };

  return {
    filterBox,
    container,
    catalogContainer,
    titleBox,
    title,
    productContainer,
    filterText,
    boxNoData,
    iconEmptyState,
    textEmptyState,
    progress,
  };
};
