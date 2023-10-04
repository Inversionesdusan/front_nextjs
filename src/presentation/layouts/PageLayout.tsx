import { ReactNode } from "react";
import { styles } from "./PageLayoutStyles";
import { Box, Button, Typography } from "@mui/material";
import HeaderView from "../landing/header/HeaderView";
import FooterView from "../landing/footer/FooterView";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  titleButton?: boolean;
  buttonLbl?: string;
  handleClickButton?: () => void;
}

const PageLayout = ({
  children,
  subtitle,
  title,
  handleClickButton,
  buttonLbl,
}: LayoutProps) => {
  const {
    layoutContainer,
    content,
    headerBox,
    titleBox,
    titleSt,
    subtitleSt,
    titleButton,
    buttonLabel,
  } = styles();

  return (
    <Box sx={layoutContainer}>
      <HeaderView
        landing={false}
        openModalLogin={false}
        openModalRegistro={false}
        handleOpenModalLogin={() => {}}
        handleOpenModalRegistro={() => {}}
      />
      <Box sx={content}>
        <Box sx={headerBox}>
          <Box sx={titleBox}>
            {subtitle && <Typography sx={subtitleSt}>{subtitle}</Typography>}
            {title && (
              <Typography variant="h1" sx={titleSt}>
                {title}
              </Typography>
            )}
          </Box>
          {buttonLbl && (
            <Button sx={titleButton} onClick={handleClickButton}>
              <Typography sx={buttonLabel}>{buttonLbl}</Typography>
            </Button>
          )}
        </Box>
        {children}
      </Box>
      <FooterView />
    </Box>
  );
};

export default PageLayout;
