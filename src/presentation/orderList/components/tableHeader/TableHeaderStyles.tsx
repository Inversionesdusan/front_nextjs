import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { MontserratWhite16700 } from "../../../styles/colors";

export const styles = () => {
  const container: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${colors.gray}`,
    borderRadius: "20px",
    height: "70px",
    paddingX: "2rem",
    marginBottom: "1rem",
    background: colors.green,
  };

  const cell: SxProps<Theme> = {
    marginY: "auto",
  };

  const title: SxProps<Theme> = {
    ...MontserratWhite16700,
    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
  };

  return {
    container,
    cell,
    title,
  };
};
