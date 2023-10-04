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
import { Controller, UseFormReset, useForm } from "react-hook-form";
import { IClientRegisterRequest } from "@/domain/models/requests/IClientRegisterRequest";
import { constantes } from "@/domain/constants";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const initialFormData: IRegisterFormValues = {
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
    reset: UseFormReset<IRegisterFormValues>,
    handleOpenModal: () => void
  ) => void;
  loadingData: boolean;
  openModalLogin: () => void;
}

const ModalRegistro = ({
  open,
  title,
  onClose,
  onAccept,
  loadingData,
  openModalLogin,
}: ModalRegistroProps) => {
  const { modalDialog, inputStyle, linkText } = styles();
  const formRegister = useForm<IRegisterFormValues>({
    defaultValues: { ...initialFormData },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState, reset, watch, trigger } =
    formRegister;
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
            reset,
            openModalLogin
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
              placeholder={constantes.placeholders.name}
              sx={inputStyle}
              {...register("nombresCliente", {
                required: {
                  value: true,
                  message: constantes.errores.name.required,
                },
                minLength: {
                  value: 3,
                  message: constantes.errores.name.length,
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
              placeholder={constantes.placeholders.lastName}
              sx={inputStyle}
              {...register("apellidosCliente", {
                required: {
                  value: true,
                  message: constantes.errores.lastName.required,
                },
                minLength: {
                  value: 3,
                  message: constantes.errores.lastName.length,
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
              placeholder={constantes.placeholders.email}
              sx={inputStyle}
              {...register("email", {
                required: {
                  value: true,
                  message: constantes.errores.email.required,
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: constantes.errores.email.format,
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
                  message: constantes.errores.generic.numbers,
                },
                minLength: {
                  value: 7,
                  message: constantes.errores.phone.length,
                },
                maxLength: {
                  value: 10,
                  message: constantes.errores.phone.maxLength,
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
          <Controller
            name="clave"
            control={control}
            rules={{
              required: {
                value: true,
                message: constantes.errores.password.required,
              },
              minLength: {
                value: 6,
                message: constantes.errores.password.length,
              },
            }}
            render={({ field }) => (
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.clave?.message}
              >
                <Input
                  id="clave"
                  disabled={loadingData}
                  type="password"
                  aria-describedby="clave-error"
                  placeholder={constantes.placeholders.pass}
                  sx={inputStyle}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
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
            )}
          />

          <Controller
            name="confirmarClave"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Debes digitar la clave para tu usuario",
              },
              minLength: {
                value: 6,
                message: "La clave debe tener al menos 6 dígitos",
              },
              validate: (value) =>
                value === watch("clave") ||
                "Debe ser igual a la contraseña inicial",
            }}
            render={({ field }) => (
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
                  onBlur={field.onBlur}
                  onChange={field.onChange}
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
            )}
          />
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
            onClick={() => {
              reset({ ...initialFormData });
              onClose();
            }}
            disabled={loadingData}
          >
            Cancelar
          </ButtonCustom>
          <ButtonCustom typeButton="modal" type="submit" disabled={loadingData}>
            Aceptar
          </ButtonCustom>
        </DialogActions>
        <div
          onClick={() => {
            onClose();
            openModalLogin();
          }}
          style={linkText}
        >
          Ya estoy registrado
        </div>
      </form>
    </Dialog>
  );
};

export default ModalRegistro;
