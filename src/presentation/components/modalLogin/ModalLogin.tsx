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
import { styles } from "./ModalLoginStyles";
import { UseFormReset, useForm } from "react-hook-form";
import { ILoginFormValues } from "@/domain/models/forms/ILoginForm";
import { ILoginRequest } from "@/domain/models/requests/ILoginRequest";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialFormData: ILoginFormValues = {
  email: "",
  clave: "",
};

interface ModalRegistroProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onAccept: (
    loginData: ILoginRequest,
    reset: UseFormReset<ILoginFormValues>
  ) => void;
  loadingData: boolean;
}

const ModalLogin = ({
  open,
  title,
  onClose,
  onAccept,
  loadingData,
}: ModalRegistroProps) => {
  const { modalDialog, inputStyle } = styles();
  const formLogin = useForm<ILoginFormValues>({
    defaultValues: { ...initialFormData },
    reValidateMode: "onBlur",
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState, reset } = formLogin;
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
          onAccept({ identifier: data.email, password: data.clave }, reset);
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
          <ButtonCustom type="submit" typeButton="modal" disabled={loadingData}>
            Aceptar
          </ButtonCustom>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModalLogin;
