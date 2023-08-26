import Container from "@/DI/Container";
import {
  Box,
  FormControl,
  Input,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { IContactoViewModelReturn } from "./ContactoViewModel";
import { useForm } from "react-hook-form";
import ButtonCustom from "@/app/components/basic/ButtonCustom";
import { IContactoFormValues } from "@/domain/models/forms/IContactForm";
import { colors } from "@/presentation/styles/colors";
import { styles } from "./ContactoViewStyles";

const initialFormData: IContactoFormValues = {
  nombreCliente: "",
  email: "",
  nroTelefono: "",
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
  const theme = useTheme();
  const downXl = useMediaQuery(theme.breakpoints.down("xl"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    container,
    formContainer,
    title,
    subTitle,
    message,
    form,
    inputStyle,
  } = styles(downSm, downMd, downLg, downXl);

  useEffect(() => {
    contactoVideModel.cargarDatosEmpresa();
  }, []);

  const leafComponent = (position: string) => {
    let borderRadius = "";
    let top = undefined;
    let left = undefined;
    let right = undefined;
    let transform = undefined;
    let display = undefined;
    switch (position) {
      case "topLeft":
        borderRadius = "300px 0 300px 0";
        top = downXl ? "274px" : "178px";
        left = "16px";
        display = downLg ? "none" : undefined;
        break;
      case "bottomLeft":
        borderRadius = "300px 0 300px 0";
        top = downXl ? "450px" : "522px";
        left = "0";
        transform = downXl
          ? "translateX(41px) rotate(90deg)"
          : "translateX(98px) rotate(90deg)";
        display = downLg ? "none" : undefined;
        break;
      case "topRigth":
        borderRadius = "0 300px 0 300px";
        top = downXl ? "274px" : "178px";
        right = "16px";
        display = downLg ? "none" : undefined;
        break;
      case "bottomRight":
        borderRadius = "0 300px 0 300px";
        top = downXl ? "450px" : "522px";
        right = "0";
        transform = downXl
          ? "translateX(-41px) rotate(-90deg)"
          : "translateX(-98px) rotate(-90deg)";
        display = downLg ? "none" : undefined;
        break;
      default:
        break;
    }

    return (
      <Box
        sx={{
          height: downXl ? "200px" : "420px",
          width: downXl ? "150px" : "256px",
          background: colors.green,
          position: "absolute",
          top,
          left,
          right,
          borderRadius,
          transform,
          display,
        }}
      ></Box>
    );
  };

  return (
    <>
      <Box sx={container}>
        {leafComponent("topLeft")}
        {leafComponent("topRigth")}
        {leafComponent("bottomLeft")}
        {leafComponent("bottomRight")}
        <Box sx={formContainer}>
          <Typography sx={title}>Contacta con nosotros</Typography>
          <Typography sx={subTitle}>Queremos escucharte</Typography>
          <Typography sx={message}>
            Si quieres informacion sobre cualquiera de nuestros productos o
            estas interesado en su distribucion, rellena este formulario y nos
            pondremos en contacto lo antes posible
          </Typography>
          <Box sx={{ width: downMd ? "80%" : "60%" }}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit((data) => {
                contactoVideModel.handleSubmitForm(
                  data,
                  reset,
                  initialFormData
                );
              })}
              style={form}
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
                    required: {
                      value: true,
                      message: "Debes digitar tu nombre",
                    },
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
                      message:
                        "El Número telefónico debe contener sólo númmeros",
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
                loading={contactoVideModel.sending}
                sx={{ alignSelf: downMd ? "center" : "end", marginY: "1rem" }}
                type="submit"
                typeButton="form"
                disabled={contactoVideModel.sending}
              >
                <Typography>Enviar</Typography>
              </ButtonCustom>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactoView;
