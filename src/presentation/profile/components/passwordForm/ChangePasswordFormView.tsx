import { IChangePasswordForm } from "@/domain/models/forms/IChangePasswordForm";
import CardButton from "@/presentation/components/common/CardButton";
import { CuniaGreen16400, colors } from "@/presentation/styles/colors";
import { inputStyle } from "@/presentation/styles/theme";
import { Box, FormControl, Input, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { UseFormReturn } from "react-hook-form";

interface ChangePasswordFormViewProps {
  formPassword: UseFormReturn<IChangePasswordForm, any, undefined>;
  savingData: boolean;
  onClick: () => Promise<void>;
}

const ChangePasswordFormView = ({
  formPassword,
  savingData,
  onClick,
}: ChangePasswordFormViewProps) => {
  const { register, formState } = formPassword;
  const { errors } = formState;

  return (
    <Box>
      <form noValidate autoComplete="off">
        <Grid
          container
          columnSpacing={3}
          rowSpacing={4}
          sx={{ paddingX: "4rem" }}
        >
          <Grid
            xs={6}
            display="flex"
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
          >
            <Typography sx={CuniaGreen16400}>Contraseña Actual</Typography>
          </Grid>
          <Grid
            xs={6}
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
          >
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.currentPassword?.message}
            >
              <Input
                disabled={savingData}
                id="currentPassword"
                type="password"
                aria-describedby="currentPassword-error"
                sx={inputStyle}
                {...register("currentPassword", {
                  required: {
                    value: true,
                    message: "Debes digitar tu contraseña actual",
                  },
                  minLength: {
                    value: 6,
                    message: "La contraseña debe ser de al menos 6 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "La contraseña debe ser de menos de 20 caracteres",
                  },
                })}
              />

              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="currentPassword-error"
              >
                {errors?.currentPassword?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid
            xs={6}
            display="flex"
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
          >
            <Typography sx={CuniaGreen16400}>Nueva contraseña</Typography>
          </Grid>
          <Grid
            xs={6}
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
          >
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.password?.message}
            >
              <Input
                disabled={savingData}
                id="password"
                type="password"
                aria-describedby="password-error"
                sx={inputStyle}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Debes digitar tu nueva contraseña",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "La contraseña nueva debe ser de al menos 6 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "La contraseña nueva debe ser de menos de 20 caracteres",
                  },
                })}
              />

              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="password-error"
              >
                {errors?.password?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid
            xs={6}
            display="flex"
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
          >
            <Typography sx={CuniaGreen16400}>Confirmar contraseña</Typography>
          </Grid>
          <Grid
            xs={6}
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
          >
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.passwordConfirmation?.message}
            >
              <Input
                disabled={savingData}
                id="passwordConfirmation"
                type="password"
                aria-describedby="passwordConfirmation-error"
                sx={inputStyle}
                {...register("passwordConfirmation", {
                  required: {
                    value: true,
                    message: "Debes confirmar la nueva contraseña",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "La contraseña nueva debe ser de al menos 6 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "La contraseña nueva debe ser de menos de 20 caracteres",
                  },
                })}
              />

              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="direccion-error"
              >
                {errors?.passwordConfirmation?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop="1rem"
          >
            <CardButton
              label={"Actualizar contraseña"}
              variant="black"
              onClick={onClick}
              disabled={false}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ChangePasswordFormView;
