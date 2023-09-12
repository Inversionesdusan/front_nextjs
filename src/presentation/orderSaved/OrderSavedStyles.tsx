import { SxProps, Theme } from "@mui/material";
import { colors } from "../styles/colors";

export const styles = () => {
  const container: SxProps<Theme> = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    paddingY: "1rem",
  };

  const clientDataBox: SxProps<Theme> = {
    marginY: "0.25rem",
  };

  const labelBox: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.25rem",
  };

  const valueField: SxProps<Theme> = {
    borderBottom: "1px solid " + colors.mediumGray,
  };

  const sectionBox: SxProps<Theme> = {
    border: "1px solid " + colors.solidGreen,
    padding: "2rem",
    background: colors.lightGray,
    borderRadius: "30px",
    marginY: "0.5rem",
  };

  return {
    container,
    clientDataBox,
    labelBox,
    sectionBox,
    valueField,
  };
};
