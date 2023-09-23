import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";

export const styles = () => {
  const rowContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${colors.gray}`,
    borderRadius: "20px",
    height: "70px",
    paddingX: "2rem",
    marginBottom: "1rem",
    "&:hover": {
      background: colors.lightGray,
    },
  };

  const cell: SxProps<Theme> = {
    marginY: "auto",
  };

  const typeLabel: SxProps<Theme> = {
    ...MontserratGreen14400,
  };

  return {
    rowContainer,
    cell,
  };
};
