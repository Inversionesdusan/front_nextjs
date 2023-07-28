import Container from "@/DI/Container";
import { ISeccionInformacionViewModel } from "@/domain/models/viewModels/ISeccionInformacionViewModel";
import { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import AboutUsComponent from "../components/AboutUsComponent";
import { styles } from "./InformacionViewStyles";

const InformacionView = () => {
  const informacionModel = Container.resolve(
    "InformacionViewModel"
  ) as ISeccionInformacionViewModel;

  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  const { container, leftForm, rightForm, infoContainer, infoTextContainer } =
    styles(downLg, downXl);

  useEffect(() => {
    informacionModel.getInformacion();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <></>,
    prevArrow: <></>,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return informacionModel.loading ? (
    <>Cargando</>
  ) : (
    <Box sx={container}>
      <Box sx={leftForm}></Box>
      <Box sx={infoContainer}></Box>
      <Box sx={infoTextContainer}>
        <Slider {...settings}>
          {informacionModel.informacion.map((info) => (
            <AboutUsComponent
              key={info.id}
              title={info.titulo}
              text={info.informacion}
            />
          ))}
        </Slider>
      </Box>
      <Box sx={rightForm}></Box>
    </Box>
  );
};

export default InformacionView;
