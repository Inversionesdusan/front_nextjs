import {
  CuniaGreen16400,
  MonserratGreen16400,
  colors,
} from "@/presentation/styles/colors";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { styles } from "./ClientFormStyles";
import { OrderFormValues } from "@/domain/models/forms/OrderForm";
import useAuthStore from "@/domain/store/useAuthStore";
import Grid from "@mui/material/Unstable_Grid2";
import CardButton from "../common/CardButton";
import { useRouter } from "next/router";
import { inputLabel, inputStyle } from "@/presentation/styles/theme";

interface ClientFormProps {
  formRegister: UseFormReturn<OrderFormValues, any, undefined>;
}

const ClientForm = ({ formRegister }: ClientFormProps) => {
  const { register, formState } = formRegister;
  const { errors } = formState;

  const { formContainer, clientLbelBox } = styles();
  const { authData } = useAuthStore();
  const router = useRouter();

  return (
    <Box>
      <form noValidate autoComplete="off" style={{ width: "100%" }}>
        <Box sx={clientLbelBox}>
          <Typography sx={{ ...CuniaGreen16400, marginY: "1rem" }}>
            Datos del Cliente
          </Typography>

          {authData.dataLoaded && authData.isAuthenticated && (
            <CardButton
              label="Modificar mis datos"
              variant="gray"
              onClick={() => {
                router.push("/perfil");
              }}
              disabled={false}
            />
          )}

          {!authData.isAuthenticated && (
            <CardButton
              label="Ya estoy registrado"
              variant="gray"
              onClick={() => {}}
              disabled={false}
            />
          )}
        </Box>

        <Box sx={formContainer}>
          <Grid container columnSpacing={4} rowSpacing={4}>
            <Grid xs={12} md={6}>
              {/* nombres */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.nombresCliente?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Nombre(s)
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="nombresCliente"
                  type="text"
                  aria-describedby="nombresCliente-error"
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
            </Grid>
            <Grid xs={12} md={6}>
              {/* apellidos */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.apellidosCliente?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Apellido(s)
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="apellidosCliente"
                  type="text"
                  aria-describedby="apellidosCliente-error"
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
            </Grid>
            <Grid xs={12} md={6}>
              {/* email */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.email?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Correo electrónico
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="email"
                  type="email"
                  aria-describedby="email-error"
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
            </Grid>
            <Grid xs={12} md={6}>
              {/* Tipo Documento */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.tipoDocumento?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Tipo Documento
                </InputLabel>
                <Select
                  disabled={authData.isAuthenticated}
                  id="tipoDocumento"
                  value={"CC"}
                  sx={{
                    ...inputStyle,
                    "&.-MuiPopover-paper-MuiMenu-paper": {
                      background: colors.white,
                    },
                  }}
                  {...register("tipoDocumento", {
                    required: {
                      value: true,
                      message: "Debe seleccionar el tipo de documento",
                    },
                  })}
                >
                  <MenuItem value={"CC"} sx={MonserratGreen16400}>
                    Cédula de Ciudadanía
                  </MenuItem>
                  <MenuItem value={"NIT"} sx={MonserratGreen16400}>
                    N.I.T.
                  </MenuItem>
                </Select>

                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="tipoDocumento-error"
                >
                  {errors.tipoDocumento?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* numeroDocumento */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.numeroDocumento?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Número de documento
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="numeroDocumento"
                  type="text"
                  aria-describedby="numeroDocumento-error"
                  sx={inputStyle}
                  {...register("numeroDocumento", {
                    required: {
                      value: true,
                      message: "Debe digitar el número de documento",
                    },
                    minLength: {
                      value: 4,
                      message:
                        "Tu número de documento debe tener más de 4 dígitos",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="numeroDocumento-error"
                >
                  {errors.numeroDocumento?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* nro telefono */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.nroTelefono?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Nro Telefónico / Celular
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="nroTelefono"
                  aria-describedby="nroTelefono-error"
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
            </Grid>
            <Grid xs={12} md={6}>
              {/* direccion cliente */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.direccionCliente?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Dirección
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="direccionCliente"
                  type="text"
                  aria-describedby="direccionCliente-error"
                  sx={inputStyle}
                  {...register("direccionCliente", {
                    required: {
                      value: true,
                      message: "Debes digitar tu dirección",
                    },
                    minLength: {
                      value: 5,
                      message: "La dirección debe tener mas de 5 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "La dirección debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="direccionCliente-error"
                >
                  {errors.direccionCliente?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* complemento direccion cliente */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.complementoCliente?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Complemento Direccion
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="complementoCliente"
                  type="text"
                  aria-describedby="complementoCliente-error"
                  sx={inputStyle}
                  {...register("complementoCliente", {
                    minLength: {
                      value: 5,
                      message: "La dirección debe tener mas de 5 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "La dirección debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="complementoCliente-error"
                >
                  {errors.complementoCliente?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* departamento direccion cliente */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.departamentoCliente?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Departamento
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="departamentoCliente"
                  type="text"
                  aria-describedby="departamentoCliente-error"
                  sx={inputStyle}
                  {...register("departamentoCliente", {
                    required: {
                      value: true,
                      message: "Debe digitar el departamento",
                    },
                    minLength: {
                      value: 5,
                      message: "La dirección debe tener mas de 5 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "La dirección debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="departamentoCliente-error"
                >
                  {errors.departamentoCliente?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* ciudad direccion cliente */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.ciudadCliente?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Ciudad
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="ciudadCliente"
                  type="text"
                  aria-describedby="ciudadCliente-error"
                  sx={inputStyle}
                  {...register("ciudadCliente", {
                    required: {
                      value: true,
                      message: "Debe digitar la ciudad",
                    },
                    minLength: {
                      value: 4,
                      message: "La ciudad debe tener mas de 4 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "La ciudad debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="ciudadCliente-error"
                >
                  {errors.ciudadCliente?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* barrio direccion cliente */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.barrioCliente?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Barrio
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="barrioCliente"
                  type="text"
                  aria-describedby="barrioCliente-error"
                  sx={inputStyle}
                  {...register("barrioCliente", {
                    required: {
                      value: true,
                      message: "Debe digitar el barrio",
                    },
                    minLength: {
                      value: 4,
                      message: "El Barrio debe tener más de 4 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message: "El Barrio debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="barrioCliente-error"
                >
                  {errors.barrioCliente?.message}
                </span>
              </FormControl>
            </Grid>
            {!authData.isAuthenticated && (
              <Grid xs={12} md={6}>
                {/* Usar como dir envio? */}
                <FormControl
                  fullWidth
                  variant="standard"
                  error={!!errors.usarEnvio?.message}
                >
                  <InputLabel sx={inputLabel} shrink>
                    Usar esta dirección para envíos
                  </InputLabel>
                  <Select
                    id="usarEnvio"
                    value={formRegister.getValues().usarEnvio}
                    sx={{
                      ...inputStyle,
                      "&.-MuiPopover-paper-MuiMenu-paper": {
                        background: colors.white,
                      },
                    }}
                    {...register("usarEnvio", {
                      required: {
                        value: true,
                        message:
                          "Debe seleccionar si esta direccion se utiliza para envíos",
                      },
                    })}
                  >
                    <MenuItem value={"S"} sx={MonserratGreen16400}>
                      Si
                    </MenuItem>
                    <MenuItem value={"N"} sx={MonserratGreen16400}>
                      No
                    </MenuItem>
                  </Select>

                  <span
                    style={{
                      color: colors.gray,
                      fontFamily: "Montserrat",
                      fontSize: "0.8rem",
                    }}
                    id="usarEnvio-error"
                  >
                    {errors.usarEnvio?.message}
                  </span>
                </FormControl>
              </Grid>
            )}
          </Grid>
        </Box>
        <Typography sx={{ ...CuniaGreen16400, marginY: "1.5rem" }}>
          Datos para el envío
        </Typography>
        <Box sx={formContainer}>
          <Grid container columnSpacing={4} rowSpacing={4}>
            <Grid xs={12} md={6}>
              {/* direccion envio */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.direccionEnvio?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Dirección Envío
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="direccionEnvio"
                  type="text"
                  aria-describedby="direccionEnvio-error"
                  sx={inputStyle}
                  {...register("direccionEnvio", {
                    required: {
                      value: true,
                      message: "Debes digitar tu dirección de envío",
                    },
                    minLength: {
                      value: 5,
                      message:
                        "La dirección de envío debe tener mas de 5 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "La dirección de envío debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="direccionEnvio-error"
                >
                  {errors.direccionEnvio?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* complemento direccion envío */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.complementoEnvio?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Complemento Dirección envío
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="complementoEnvio"
                  type="text"
                  aria-describedby="complementoEnvio-error"
                  sx={inputStyle}
                  {...register("complementoEnvio", {
                    minLength: {
                      value: 5,
                      message:
                        "Complmente dirección de envío debe tener mas de 5 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "Complemento dirección de envío debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="complementoEnvio-error"
                >
                  {errors.complementoEnvio?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* departamento direccion envio */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.departamentoEnvio?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Departamento envío
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="departamentoEnvio"
                  type="text"
                  aria-describedby="departamentoEnvio-error"
                  sx={inputStyle}
                  {...register("departamentoEnvio", {
                    required: {
                      value: true,
                      message: "Debe digitar el departamento para el envío",
                    },
                    minLength: {
                      value: 5,
                      message:
                        "Departamento de envío debe tener mas de 5 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "Departamento de envío debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="departamentoEnvio-error"
                >
                  {errors.departamentoEnvio?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* ciudad direccion cliente */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.ciudadEnvio?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Ciudad envío
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="ciudadEnvio"
                  type="text"
                  aria-describedby="ciudadEnvio-error"
                  sx={inputStyle}
                  {...register("ciudadEnvio", {
                    required: {
                      value: true,
                      message: "Debe digitar la ciudad para el envío",
                    },
                    minLength: {
                      value: 4,
                      message:
                        "La ciudad de envío debe tener mas de 4 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "La ciudad de envío debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="ciudadEnvio-error"
                >
                  {errors.ciudadEnvio?.message}
                </span>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              {/* barrio direccion cliente */}
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.barrioEnvio?.message}
              >
                <InputLabel sx={inputLabel} shrink>
                  Barrio envío
                </InputLabel>
                <Input
                  disabled={authData.isAuthenticated}
                  id="barrioEnvio"
                  type="text"
                  aria-describedby="barrioEnvio-error"
                  sx={inputStyle}
                  {...register("barrioEnvio", {
                    required: {
                      value: true,
                      message: "Debe digitar el barrio par el envío",
                    },
                    minLength: {
                      value: 4,
                      message:
                        "El Barrio de envío debe tener más de 4 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "El Barrio de envío debe tener menos de 50 caracteres",
                    },
                  })}
                />
                <span
                  style={{
                    color: colors.gray,
                    fontFamily: "Montserrat",
                    fontSize: "0.8rem",
                  }}
                  id="barrioEnvio-error"
                >
                  {errors.barrioEnvio?.message}
                </span>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default ClientForm;
