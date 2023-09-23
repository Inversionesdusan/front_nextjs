import { SxProps, Theme } from "@mui/material";
import { CuniaGreen16400, colors } from "../styles/colors";

export const styles = () => {
  const container: SxProps<Theme> = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    paddingY: "1rem",
    marginBottom: "5rem",
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
    paddingY: { xs: "1.25rem", sm: "2rem" },
    paddingX: { xs: "1.25rem", sm: "2rem" },
    background: colors.lightGray,
    borderRadius: "30px",
    marginY: "0.5rem",
  };

  const sectionTitle: SxProps<Theme> = {
    ...CuniaGreen16400,
    marginTop: { xs: "1rem", sm: "1.5rem" },
    fontSize: { xs: "0.875rem", sm: "1rem" },
  };

  return {
    container,
    clientDataBox,
    labelBox,
    sectionBox,
    valueField,
    sectionTitle,
  };
};
