import ButtonCustom from "@/app/components/basic/ButtonCustom";
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
import { useForm } from "react-hook-form";
import { styles } from "./ModalPasswordStyles";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialFormData: { email: string } = {
  email: "",
};

interface ModalPasswordProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onAccept: (email: string) => void;
  loadingData: boolean;
  openModalPassword: () => void;
}

const ModalPassword = ({
  open,
  title,
  onClose,
  onAccept,
  loadingData,
  openModalPassword,
}: ModalPasswordProps) => {
  const {
    form,
    modalDialog,
    inputStyle,
    linkText,
    dialogTitle,
    dialogContent,
    errorText,
    dialogAActions,
  } = styles();
  const formLogin = useForm<{ email: string }>({
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
          reset({ email: "" });
          onAccept(data.email);
        })}
        style={form}
      >
        <DialogTitle sx={dialogTitle}>{title}</DialogTitle>
        <DialogContent sx={dialogContent}>
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
                  message: "Debes indicar un correo electrónico válido",
                },
              })}
            />
            <span style={errorText}>{errors.email?.message}</span>
          </FormControl>
        </DialogContent>
        <DialogActions sx={dialogAActions}>
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

export default ModalPassword;
