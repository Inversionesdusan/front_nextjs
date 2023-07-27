import Container from "@/DI/Container";
import { Box, FormControl, Input, Typography } from "@mui/material";
import { useEffect } from "react";
import { IContactoViewModelReturn } from "./ContactoViewModel";
import { useForm } from "react-hook-form";
import ButtonCustom from "@/app/components/basic/ButtonCustom";
import { IContactoFormValues } from "@/domain/models/forms/IContactForm";
import { colors } from "@/presentation/styles/colors";
import { SxProps } from "@mui/material";

const initialFormData: IContactoFormValues = {
  nombreCliente: "",
  email: "",
  nroTelefono: "",
};

const inputStyle: SxProps = {
  fontFamily: "Montserrat",
  fontSize: "1.5rem",
  fontWeight: "300",
  color: colors.white,
  "&.MuiInputBase-root": {
    borderBottomColor: colors.white,
  },
  "&.MuiInputBase-root:hover": {
    borderBottomColor: colors.white,
  },
  "&.MuiInputBase-root:after": {
    borderBottomColor: colors.white,
  },
  "&.MuiInputBase-root:before": {
    borderBottomColor: colors.white,
  },
  "&.MuiInputBase-root:focus": {
    borderBottomColor: colors.white,
  },
  "&.MuiInputBase-root:hover:not(.Mui-disabled):before": {
    borderBottomColor: colors.white,
  },
};

const ContactoView = () => {
  const contactoVideModel = Container.resolve(
    "ContactoViewModel"
  ) as IContactoViewModelReturn;

  const formContacto = useForm<IContactoFormValues>({
    defaultValues: { ...initialFormData },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });

  const { register, control, handleSubmit, formState, reset } = formContacto;
  const { errors } = formState;

  useEffect(() => {
    contactoVideModel.cargarDatosEmpresa();
  }, []);

  const leafComponent = (position: string) => {
    let borderRadius = "";
    let top = undefined;
    let left = undefined;
    let right = undefined;
    let transform = undefined;
    switch (position) {
      case "topLeft":
        borderRadius = "300px 0 300px 0";
        top = "120px";
        left = "16px";
        break;
      case "bottomLeft":
        borderRadius = "300px 0 300px 0";
        top = "522px";
        left = "0";
        transform = "translateX(116px) rotate(90deg)";
        break;
      case "topRigth":
        borderRadius = "0 300px 0 300px";
        top = "120px";
        right = "1rem";
        break;
      case "bottomRight":
        borderRadius = "0 300px 0 300px";
        top = "522px";
        right = "0";
        transform = "translateX(-116px) rotate(-90deg)";
        break;
      default:
        break;
    }

    return (
      <Box
        sx={{
          height: "500px",
          width: "300px",
          background: colors.green,
          position: "absolute",
          top,
          left,
          right,
          borderRadius,
          transform,
        }}
      ></Box>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        padding: "1rem",
        overflow: "hidden",
      }}
    >
      {leafComponent("topLeft")}
      {leafComponent("topRigth")}
      {leafComponent("bottomLeft")}
      {leafComponent("bottomRight")}
      <Box
        sx={{
          position: "absolute",
          width: "60vw",
          height: "780px",
          top: "120px",
          left: "50%",
          transform: "translateX(-50%)",
          background: colors.green,
          borderRadius: "285px 285px 600px 600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "3rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "4rem",
            fontWeight: "300",
            lineHeight: "4rem",
          }}
        >
          Contacta con nosotros
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "3rem",
            fontWeight: "600",
            lineHeight: "3rem",
            marginY: "0.5rem",
          }}
        >
          Queremos escucharte
        </Typography>
        <Typography
          sx={{
            width: "80%",
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "300",
            marginY: "2rem",
          }}
        >
          Si quieres informacion sobre cualquiera de nuestros productos o estas
          interesado en su distribucion, rellena este formulario y nos pondremos
          en contacto lo antes posible
        </Typography>
        <Box sx={{ width: "60%" }}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit((data) => {
              contactoVideModel.handleSubmitForm(data, reset, initialFormData);
            })}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.nombreCliente?.message}
            >
              <Input
                id="nombreCliente"
                type="text"
                aria-describedby="nombreCliente-error"
                placeholder="Nombre"
                sx={inputStyle}
                {...register("nombreCliente", {
                  required: { value: true, message: "Debes digitar tu nombre" },
                  minLength: {
                    value: 5,
                    message: "Tu nombre debe ser de mas de 3 caracteres",
                  },
                })}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="nombreCliente-error"
              >
                {errors.nombreCliente?.message}
              </span>
            </FormControl>

            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.email?.message}
            >
              <Input
                id="email"
                type="email"
                aria-describedby="email-error"
                placeholder="Correo electrónico"
                sx={inputStyle}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Digita tu correo electrónico",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Debes indicar un correo eletrónico válido",
                  },
                })}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
              >
                {errors.email?.message}
              </span>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.nroTelefono?.message}
            >
              <Input
                id="nroTelefono"
                aria-describedby="nroTelefono-error"
                placeholder="Nro Telefónico / Celular"
                sx={inputStyle}
                {...register("nroTelefono", {
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "El Número telefónico debe contener sólo númmeros",
                  },
                  minLength: {
                    value: 7,
                    message:
                      "El Número telefónico debe tener al menos 7 dígitos",
                  },
                  maxLength: {
                    value: 10,
                    message: "El Número telefónico debe hasta 10 dígitos",
                  },
                  validate: {
                    notStart: (valueField) => {
                      return (
                        valueField.startsWith("3") ||
                        "El Número telefónico debe iniciar con 3 o con 6"
                      );
                    },
                  },
                })}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="nroTelefono-error"
              >
                {errors.nroTelefono?.message}
              </span>
            </FormControl>
            <ButtonCustom
              sx={{ alignSelf: "end", marginY: "1rem" }}
              type="submit"
              disabled={contactoVideModel.sending}
            >
              <Typography>Enviar</Typography>
            </ButtonCustom>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactoView;
