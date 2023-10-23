import Container from "@/DI/Container";
import { ResetPasswordViewModelReturn } from "./ResetPasswordViewModel";
import { Box, FormControl, Input, Typography } from "@mui/material";
import { CuniaBlack16400, CuniaGreen16400, colors } from "../styles/colors";
import { inputStyle } from "../styles/theme";
import CardButton from "../components/common/CardButton";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/navigation";

interface ResetPasswordViewProps {
  code: string;
}

const ResetPasswordView = ({ code }: ResetPasswordViewProps) => {
  const router = useRouter();
  const model = Container.resolve(
    "ResetPasswordViewModel"
  ) as ResetPasswordViewModelReturn;

  const { register, formState } = model.formClientData;
  const { errors } = formState;
  console.log("code ->", code);
  if (!code) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginY: "5rem",
          marginX: { sx: "1rem", sm: "2rem", md: "3rem" },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            ...CuniaBlack16400,
            maxWidth: {
              xs: "300px",
              sm: "400px",
              md: "600px",
            },
          }}
        >
          No se ha indicado el codigo para reestablecer la contraseña.
        </Typography>
        <Typography
          sx={{
            ...CuniaBlack16400,
            maxWidth: {
              xs: "300px",
              sm: "400px",
              md: "600px",
            },
          }}
        >
          Verifique su correo en la bandeja de entrada o en el correo no deseado
        </Typography>
        <CardButton
          label={"Ir al Home"}
          variant="black"
          onClick={() => {
            router.push("/");
          }}
          disabled={false}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        paddingX: { xs: "1rem", sm: "2rem", md: "3rem" },
        paddingY: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <form noValidate autoComplete="off">
        <Grid
          container
          columnSpacing={3}
          rowSpacing={2}
          sx={{
            paddingX: { xs: "0", sm: "1rem", md: "3rem" },
          }}
        >
          <Grid
            xs={6}
            sm={6}
            display="flex"
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
          >
            <Typography
              sx={{
                ...CuniaGreen16400,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
            >
              Nueva contraseña
            </Typography>
          </Grid>
          <Grid
            xs={6}
            sm={6}
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
                disabled={model.savingData}
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
            sm={6}
            display="flex"
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
          >
            <Typography
              sx={{
                ...CuniaGreen16400,
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              }}
            >
              Confirmar contraseña
            </Typography>
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
                disabled={model.savingData}
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
                id="passwordConfirmation-error"
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
            marginTop="3rem"
          >
            <CardButton
              label={"Actualizar contraseña"}
              variant="black"
              onClick={() => {
                model.handleClick(code).then((resp) => {});
              }}
              disabled={false}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ResetPasswordView;
