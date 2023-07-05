import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import AdsClickTwoToneIcon from "@mui/icons-material/AdsClickTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

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
  const returnIcon = (title: string) => {
    switch (title) {
      case "Misión":
        return <AdsClickTwoToneIcon sx={iconStyle} />;
      case "Visión":
        return <VisibilityTwoToneIcon sx={iconStyle} />;
      case "Valores":
        return <FavoriteTwoToneIcon sx={iconStyle} />;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        width: "90%",
        height: "400px",
        position: "relative",
        marginY: "4rem",
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "75px",
        background: "rgba( 255, 255, 255, 0.5 )",
        backdropFilter: "blur( 9.5px )",
        marginX: "auto",
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "80px",
          width: "80%",
          background:
            "linear-gradient(90deg, rgba(56,59,64,1) 5%, rgba(56,59,64,0) 90%);",
          top: "0",
          left: "0",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "1rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontWeight: "500",
            fontSize: "1.5rem",
            marginLeft: "8rem",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "120px",
          height: "120px",
          position: "absolute",
          background: "rgba(56,59,64,1)",
          top: "0",
          left: "0",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 4px 20px",
          borderRadius: "1rem",
        }}
      >
        {returnIcon(title)}
      </Box>
      <Typography
        sx={{
          position: "relative",
          fontFamily: "Nunito Sans",
          fontSize: "1.25rem",
          color: "rgba(56, 59, 64, 1)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default AboutUsComponent;
