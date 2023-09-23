import {
  CuniaBlack16400,
  MontserratGreen14400,
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
    paddingX: { xs: "1rem", sm: "2rem" },
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
    fontSize: { xs: "0.75rem", sm: "0.875rem" },
  };

  const dataText: SxProps<Theme> = {
    ...MontserratGreen16700,
    fontSize: { xs: "0.75rem", md: "1rem" },
    //fontWeight: { xs: "400", sm: "700" },
  };

  const priceLabel: SxProps<Theme> = {
    ...CuniaBlack16400,
    fontSize: { xs: "0.75rem", md: "1rem" },
    textAlign: "right",
  };

  return {
    rowContainer,
    cell,
    typeLabel,
    dataText,
    priceLabel,
  };
};
