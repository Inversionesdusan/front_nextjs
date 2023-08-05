import { colors } from "@/presentation/styles/colors";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "../../../../public/images/logos/Isologo.svg";
import instagram from "../../../../public/icons/icons-instagram.svg";
import facebook from "../../../../public/icons/icons-facebook.svg";
import Image from "next/image";
import { styles } from "./FooterViewStyles";

const FooterView = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const { footerContainer, textType, textObjeto, divider, iconContainer } =
    styles(downMd);

  return (
    <Box sx={footerContainer}>
      <Image
        src={logo}
        alt="Logo Dusan"
        height={downMd ? 48 : 72}
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
      <Box sx={iconContainer}>
        <Image
          src={instagram}
          alt="Logo instagram"
          height={40}
          color={colors.white}
        />
        <Image
          src={facebook}
          alt="Logo facebook"
          height={40}
          color={colors.white}
        />
      </Box>
    </Box>
  );
};

export default FooterView;
