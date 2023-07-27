import Container from "@/DI/Container";
import { ISeccionInformacionViewModel } from "@/domain/models/viewModels/ISeccionInformacionViewModel";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { colors } from "@/presentation/styles/colors";
import Slider from "react-slick";
import AboutUsComponent from "../components/AboutUsComponent";

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
    nextArrow: <></>,
    prevArrow: <></>,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return informacionModel.loading ? (
    <>Cargando</>
  ) : (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "324px",
          height: "138px",
          borderRadius: "285px 285px 600px 600px",
          background: colors.green,
          position: "absolute",
          top: "40%",
          left: "2rem",
        }}
      ></Box>
      <Box
        sx={{
          width: "810px",
          height: "563px",
          background: colors.green,
          borderRadius: "286px 286px 600px 600px",
        }}
      ></Box>
      <Box
        sx={{
          width: "700px",
          height: "560px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "1rem",
        }}
      >
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
      <Box
        sx={{
          width: "324px",
          height: "138px",
          borderRadius: "285px 285px 600px 600px",
          background: colors.green,
          position: "absolute",
          top: "40%",
          right: "2rem",
        }}
      ></Box>
    </Box>
  );
};

export default InformacionView;
