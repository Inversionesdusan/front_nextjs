import { Box, SxProps, Theme, Typography } from "@mui/material";

export interface AboutUsComponentProps {
  title: string;
  text: string;
  icon?: JSX.Element;
}

const iconStyle: SxProps<Theme> | undefined = {
  fontSize: "4rem",
  color: "white",
};

const AboutUsComponent = ({ title, text, icon }: AboutUsComponentProps) => {
  return (
    <Box
      sx={{
        width: "550px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginX: "auto",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Cunia",
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "1.25rem",
          textAlign: "center",
          marginBottom: "1rem",
          fontWeight: "300",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default AboutUsComponent;
