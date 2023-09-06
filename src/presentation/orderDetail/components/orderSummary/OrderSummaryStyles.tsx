import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
import { CuniaWhite16400 } from "../../../styles/colors";

export const styles = () => {
  const summaryContainer: SxProps<Theme> = {
    width: "100%",
    minHeight: "100px",
    background: colors.green,
    borderRadius: "50px",
    paddingX: "0.5rem",
    paddingY: "1rem",
  };

  const summaryTitle: SxProps<Theme> = {
    ...CuniaWhite16400,
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  return {
    summaryContainer,
    summaryTitle,
  };
};
