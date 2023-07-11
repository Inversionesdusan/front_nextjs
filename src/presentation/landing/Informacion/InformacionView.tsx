import Container from "@/DI/Container";
import { ISeccionInformacionViewModel } from "@/domain/models/viewModels/ISeccionInformacionViewModel";
import { useEffect } from "react";
import AboutUsComponent from "../components/AboutUsComponent";
import { Typography } from "@mui/material";
import Slider from "react-slick";

const InformacionView = () => {
  const informacionModel = Container.resolve(
    "InformacionViewModel"
  ) as ISeccionInformacionViewModel;

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
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return informacionModel.loading ? (
    <>Cargando</>
  ) : (
    <div id="nosotros">
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Montserrat",
          marginTop: "4rem",
          marginBottom: "5rem",
          color: "rgb(56,59,64)",
        }}
      >
        Nosotros
      </Typography>
      <Slider {...settings}>
        {informacionModel.informacion.map((info) => (
          <AboutUsComponent
            key={info.id}
            title={info.titulo}
            text={info.informacion}
          />
        ))}
      </Slider>
    </div>
  );
};

export default InformacionView;
