import {
  CuniaBlack20400,
  MontserratGreen16700,
  colors,
} from "@/presentation/styles/colors";
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

  const regularText: SxProps<Theme> = {
    ...MontserratGreen16700,
    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
    fontWeight: { xs: "400", sm: "700" },
  };

  const strongText: SxProps<Theme> = {
    ...CuniaBlack20400,
    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.5rem" },
  };

  return {
    rowContainer,
    cell,
    regularText,
    strongText,
  };
};
