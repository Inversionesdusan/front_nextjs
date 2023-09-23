import { colors } from "@/presentation/styles/colors";
import { SxProps, Theme } from "@mui/material";
export const styles = (type: "Drawer" | "Page") => {
  const container: SxProps<Theme> = {};

  const dataText: SxProps<Theme> = {
    fontFamily: "Montserrat",
    fontSize: {
      xs: "0.9rem",
      sm: "1rem",
      md: type === "Page" ? "1.125rem" : "0.9rem",
    },
    color: colors.solidGreen,
    fontWeight: "700",
    flex: "1",
    width: "100%",
  };

  const compositionTitle: SxProps<Theme> = {
    ...dataText,
    textAlign: "center",
    marginTop: "1rem",
    paddingY: "0.5rem",
    borderTop: `solid 1px ${colors.solidGreen}`,
    borderBottom: `solid 1px ${colors.solidGreen}`,
  };

  const dataRow: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginY: "0.5rem",
  };

  return { container, dataText, compositionTitle, dataRow };
};
