import ButtonCustom from "@/app/components/basic/ButtonCustom";
import { colors } from "@/presentation/styles/colors";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { styles } from "./ModalRegistroStyles";
import { IRegisterFormValues } from "@/domain/models/forms/IRegisterForm";
import { UseFormReset, useForm } from "react-hook-form";
import { IClientRegisterRequest } from "@/domain/models/requests/IClientRegisterRequest";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialFormData: IRegisterFormValues = {
  nombresCliente: "",
  apellidosCliente: "",
  email: "",
  nroTelefono: "",
  clave: "",
  confirmarClave: "",
};

interface ModalRegistroProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onAccept: (
    clientData: IClientRegisterRequest,
    reset: UseFormReset<IRegisterFormValues>
  ) => void;
  loadingData: boolean;
}

const ModalRegistro = ({
  open,
  title,
  onClose,
  onAccept,
  loadingData,
}: ModalRegistroProps) => {
  const { modalDialog, inputStyle } = styles();
  const formRegister = useForm<IRegisterFormValues>({
    defaultValues: { ...initialFormData },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState, reset } = formRegister;
  const { errors } = formState;

  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
      sx={modalDialog}
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit((data) => {
          onAccept(
            {
              email: data.email,
              username: data.email,
              nombres: data.nombresCliente,
              apellidos: data.apellidosCliente,
              telefono: data.nroTelefono,
              password: data.clave,
            },
            reset
          );
        })}
        style={{ width: "100%", marginBottom: "2rem" }}
      >
        <DialogTitle
          sx={{
            fontFamily: "Cunia",
            color: colors.green,
            fontSize: "1.5rem",
            padding: 0,
            marginBottom: "1rem",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.nombresCliente?.message}
          >
            <Input
              disabled={loadingData}
              id="nombresCliente"
              type="text"
              aria-describedby="nombresCliente-error"
              placeholder="Nombres"
              sx={inputStyle}
              {...register("nombresCliente", {
                required: {
                  value: true,
                  message: "Debes digitar tu(s) nombre(s)",
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
              {errors.nombresCliente?.message}
            </span>
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.apellidosCliente?.message}
          >
            <Input
              disabled={loadingData}
              id="apellidosCliente"
              type="text"
              aria-describedby="apellidosCliente-error"
              placeholder="Apellidos"
              sx={inputStyle}
              {...register("apellidosCliente", {
                required: {
                  value: true,
                  message: "Debes digitar tu(s) apellidos(s)",
                },
                minLength: {
                  value: 3,
                  message:
                    "Tu(s) apellido(s) debe(n) ser de más de 3 caracteres",
                },
              })}
            />
            <span
              style={{
                color: colors.gray,
                fontFamily: "Montserrat",
                fontSize: "0.8rem",
              }}
              id="apellidosCliente-error"
            >
              {errors.apellidosCliente?.message}
            </span>
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.email?.message}
          >
            <Input
              disabled={loadingData}
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
              disabled={loadingData}
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
                  message: "El Número telefónico debe tener al menos 7 dígitos",
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
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.clave?.message}
          >
            <Input
              disabled={loadingData}
              id="clave"
              type="password"
              aria-describedby="clave-error"
              placeholder="Password / Clave"
              sx={inputStyle}
              {...register("clave", {
                required: {
                  value: true,
                  message: "Debes digitar la clave para tu usuario",
                },
                minLength: {
                  value: 6,
                  message: "La clave debe tener al menos 6 dígitos",
                },
              })}
            />
            <span
              style={{
                color: colors.gray,
                fontFamily: "Montserrat",
                fontSize: "0.8rem",
              }}
              id="clave-error"
            >
              {errors.clave?.message}
            </span>
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.confirmarClave?.message}
          >
            <Input
              disabled={loadingData}
              id="confirmarClave"
              type="password"
              aria-describedby="confirmarClave-error"
              placeholder="Confirmar Password / Clave"
              sx={inputStyle}
              {...register("confirmarClave", {
                required: {
                  value: true,
                  message: "Debes digitar la clave para confirmarla",
                },
                minLength: {
                  value: 6,
                  message: "La clave debe tener al menos 6 dígitos",
                },
              })}
            />
            <span
              style={{
                color: colors.gray,
                fontFamily: "Montserrat",
                fontSize: "0.8rem",
              }}
              id="confirmarClave-error"
            >
              {errors.confirmarClave?.message}
            </span>
          </FormControl>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <ButtonCustom
            typeButton="modal"
            invert={true}
            onClick={onClose}
            disabled={loadingData}
          >
            Cancelar
          </ButtonCustom>
          <ButtonCustom typeButton="modal" type="submit" disabled={loadingData}>
            Aceptar
          </ButtonCustom>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalRegistro;
