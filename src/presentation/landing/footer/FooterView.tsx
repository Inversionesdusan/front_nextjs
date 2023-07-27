import { colors } from "@/presentation/styles/colors";
import { Box, Typography } from "@mui/material";
import logo from "../../../../public/images/logos/Isologo.svg";
import instagram from "../../../../public/icons/icons-instagram.svg";
import facebook from "../../../../public/icons/icons-facebook.svg";
import Image from "next/image";

const FooterView = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "344px",
        background: colors.black,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingY: "",
      }}
    >
      <Image src={logo} alt="Logo Dusan" height={72} color={colors.white} />
      <Typography
        sx={{
          color: colors.white,
          fontFamily: "Montserrat",
          fontSize: "1.25rem",
          marginTop: "1rem",
          fontWeight: "300",
        }}
      >
        Sociedad por acciones simplificadas
      </Typography>
      <Typography
        sx={{
          color: colors.white,
          fontFamily: "Montserrat",
          fontSize: "1.25rem",
          fontWeight: "300",
        }}
      >
        Fabricación de abonos y compuestos inorgánicos nitrogenados
      </Typography>
      <hr
        style={{
          background: colors.white,
          width: "800px",
          padding: "0",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontWeight: "300",
        }}
      />
      <Typography
        sx={{
          color: colors.white,
          fontFamily: "Montserrat",
          fontSize: "1.25rem",
          fontWeight: "300",
        }}
      >
        <a href={"mailto:inversionesdusan.2012@gmail.com"}>
          inversionesdusan.2012@gmail.com
        </a>
      </Typography>
      <Typography
        sx={{
          color: colors.white,
          fontFamily: "Montserrat",
          fontSize: "1.25rem",
          fontWeight: "300",
        }}
      >
        +57 3012424496
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          marginTop: "1rem",
        }}
      >
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
