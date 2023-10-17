import { colors } from "@/presentation/styles/colors";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./FooterViewStyles";

const FooterView = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { footerContainer, textType, textObjeto, divider, iconContainer } =
    styles(downMd);

  return (
    <Box sx={footerContainer}>
      <img
        src="/images/logos/Isologo.svg"
        alt="Logo Dusan"
        height={downMd ? 48 : 72}
        width={downMd ? 210 : 314}
        color={colors.white}
      />
      <Typography sx={textType}>Sociedad por acciones simplificadas</Typography>
      <Typography sx={textObjeto}>
        Fabricación de abonos y compuestos inorgánicos nitrogenados
      </Typography>
      <hr style={divider} />
      <Typography sx={textObjeto}>
        <a href={"mailto:inversionesdusan.2012@gmail.com"}>
          inversionesdusan.2012@gmail.com
        </a>
      </Typography>
      <Typography sx={textObjeto}>
        <a
          href="https://api.whatsapp.com/send?phone=573012424496"
          target="_blank"
        >
          +57 3012424496
        </a>
      </Typography>
      <Typography sx={textObjeto}>Ibagué - Tolima - Colombia</Typography>
      <Box sx={iconContainer}>
        <img
          src="/icons/icons-instagram.svg"
          alt="Logo instagram"
          height={40}
          width={40}
          color={colors.white}
        />
        <img
          src="/icons/icons-facebook.svg"
          alt="Logo facebook"
          height={40}
          width={40}
          color={colors.white}
        />
      </Box>
    </Box>
  );
};

export default FooterView;
