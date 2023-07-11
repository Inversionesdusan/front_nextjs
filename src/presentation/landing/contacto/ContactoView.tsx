import Container from "@/DI/Container";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { IContactoViewModelReturn } from "./ContactoViewModel";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphoneTwoTone";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import ButtonCustom from "@/app/components/basic/ButtonCustom";
import { IContactoFormValues } from "@/domain/models/forms/IContactForm";
import ModalComponent from "@/presentation/components/common/ModalComponent";

const initialFormData: IContactoFormValues = {
  nombreCliente: "",
  email: "",
  nroTelefono: "",
  asunto: "",
  mensaje: "",
};

const ContactoView = () => {
  const contactoVideModel = Container.resolve(
    "ContactoViewModel"
  ) as IContactoViewModelReturn;

  const formContacto = useForm<IContactoFormValues>({
    defaultValues: { ...initialFormData },
  });

  const { register, control, handleSubmit, formState, reset } = formContacto;
  const { errors } = formState;

  useEffect(() => {
    contactoVideModel.cargarDatosEmpresa();
  }, []);

  return !contactoVideModel.empresa?.imagenContactenos ? (
    <>Cargando...</>
  ) : (
    <>
      <div id="contactenos">
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
            boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
            background: "rgba( 255, 255, 255, 0.5 )",
            backdropFilter: "blur( 9.5px )",
            borderRadius: "1rem",
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: "100%",
              overflow: "hidden",
              borderRadius: "1rem",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_BASE_URL_IMAGES
                }${contactoVideModel.empresa?.imagenContactenos || ""})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "550px",
                borderRadius: "1rem",
              }}
            ></Box>
          </Box>
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
              gap: "3rem",
              width: "100%",
              padding: "4rem",
            }}
          >
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.nombreCliente?.message}
            >
              <InputLabel htmlFor="nombreCliente">Nombre Cliente</InputLabel>
              <Input
                id="nombreCliente"
                type="text"
                aria-describedby="nombreCliente-error"
                {...register("nombreCliente", {
                  required: { value: true, message: "Debe digitar su nombre" },
                  minLength: {
                    value: 5,
                    message: "El nombre debe ser de mas de 3 caracteres",
                  },
                })}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleTwoToneIcon
                      sx={{
                        fontSize: "1.25rem",
                        color: "rgb(56,59,64)",
                        marginRight: "1rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
              <FormHelperText id="nombreCliente-error">
                {errors.nombreCliente?.message}
              </FormHelperText>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.email?.message}
            >
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                type="email"
                aria-describedby="email-error"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Indique su correo electrónico",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Debe indicar un correo eletrónico válido",
                  },
                })}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailTwoToneIcon
                      sx={{
                        fontSize: "1.25rem",
                        color: "rgb(56,59,64)",
                        marginRight: "1rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
              <FormHelperText>{errors.email?.message}</FormHelperText>
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.nroTelefono?.message}
            >
              <InputLabel htmlFor="telefono">
                Nro Telefónico / Celular
              </InputLabel>
              <Input
                id="nroTelefono"
                aria-describedby="nroTelefono-error"
                {...register("nroTelefono", {
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Número telefónico debe contener sólo númmeros",
                  },
                  minLength: {
                    value: 7,
                    message: "Número telefónico debe tener al menos 7 dígitos",
                  },
                  maxLength: {
                    value: 10,
                    message: "Numero telefónico debe hasta 10 dígitos",
                  },
                  validate: {
                    notStart: (valueField) => {
                      return (
                        valueField.startsWith("3") ||
                        "Número telefónico debe iniciar con 3 o con 6"
                      );
                    },
                  },
                })}
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIphoneTwoToneIcon
                      sx={{
                        fontSize: "1.25rem",
                        color: "rgb(56,59,64)",
                        marginRight: "1rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
              <FormHelperText id="nroTelefono-error">
                {errors.nroTelefono?.message}
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="asunto">Asunto</InputLabel>
              <Input
                id="asunto"
                type="text"
                aria-describedby="asunto-error"
                {...register("asunto")}
                startAdornment={
                  <InputAdornment position="start">
                    <CreateTwoToneIcon
                      sx={{
                        fontSize: "1.25rem",
                        color: "rgb(56,59,64)",
                        marginRight: "1rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.mensaje?.message}
            >
              <InputLabel htmlFor="mensaje">Mensaje</InputLabel>
              <Input
                id="mensaje"
                type="text"
                aria-describedby="mensaje-error"
                {...register("mensaje", {
                  required: {
                    value: true,
                    message: "Debe indicar el cuerpo del mensaje",
                  },
                  minLength: {
                    value: 5,
                    message: "Mensaje debe ser mayor a 5 caracteres",
                  },
                })}
                startAdornment={
                  <InputAdornment position="start">
                    <MessageTwoToneIcon
                      sx={{
                        fontSize: "1.25rem",
                        color: "rgb(56,59,64)",
                        marginRight: "1rem",
                      }}
                    />
                  </InputAdornment>
                }
              />
              <FormHelperText>{errors.mensaje?.message}</FormHelperText>
            </FormControl>
            <ButtonCustom type="submit" disabled={contactoVideModel.sending}>
              <Typography>Enviar</Typography>
            </ButtonCustom>
          </form>
          <DevTool control={control} />
        </Box>
      </div>
      <ModalComponent
        title={contactoVideModel.dataModal.title}
        message={contactoVideModel.dataModal.message}
        open={contactoVideModel.openModal}
        onClose={contactoVideModel.handleCloseModal}
        onAccept={contactoVideModel.handleCloseModal}
      />
    </>
  );
};

export default ContactoView;
