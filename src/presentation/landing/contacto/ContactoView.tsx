import Container from "@/DI/Container";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { IContactoViewModelReturn } from "./ContactoViewModel";

const ContactoView = () => {
  const contactoVideModel = Container.resolve(
    "ContactoViewModel"
  ) as IContactoViewModelReturn;

  useEffect(() => {
    contactoVideModel.cargarDatosEmpresa();
  }, []);

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Montserrat",
          marginTop: "4rem",
          marginBottom: "5rem",
          color: "rgb(56,59,64)",
        }}
      >
        Contactenos
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <p>{contactoVideModel.empresa?.direccionContacto || ""}</p>
      </Box>
    </>
  );
};

export default ContactoView;
