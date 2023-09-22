import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

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
    marginTop: "2rem",
    marginBottom: "1rem",
    background: colors.green,
  };

  const cell: SxProps<Theme> = {
    marginY: "auto",
  };

  return {
    container,
    cell,
  };
};
