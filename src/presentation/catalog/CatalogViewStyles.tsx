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
    paddingY: "2rem",
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

  return { container, catalogContainer, titleBox, title, productContainer };
};
