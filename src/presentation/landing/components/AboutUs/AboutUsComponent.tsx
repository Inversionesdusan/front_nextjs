import {
  Box,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styles } from "./AboutUsComponentStyles";

export interface AboutUsComponentProps {
  title: string;
  subtitle: string;
  text: string;
  icon?: JSX.Element;
}

const iconStyle: SxProps<Theme> | undefined = {
  fontSize: "4rem",
  color: "white",
};

const AboutUsComponent = ({
  title,
  text,
  icon,
  subtitle,
}: AboutUsComponentProps) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    informationContainer,
    textTitle,
    textMessage,
    textTitleWithSubtitle,
    textSubtitle,
  } = styles(downSm, downMd);

  return (
    <Box sx={informationContainer}>
      <Typography sx={subtitle ? textTitleWithSubtitle : textTitle}>
        {title}
      </Typography>
      {subtitle && <Typography sx={textSubtitle}>{subtitle}</Typography>}
      <Typography sx={textMessage}>{text}</Typography>
    </Box>
  );
};

export default AboutUsComponent;
