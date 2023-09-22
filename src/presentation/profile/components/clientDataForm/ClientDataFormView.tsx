import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { MonserratGreen16400, colors } from "@/presentation/styles/colors";
import { inputLabel, inputStyle } from "@/presentation/styles/theme";
import Grid from "@mui/material/Unstable_Grid2";
import { UseFormReturn } from "react-hook-form";
import { IClientForm } from "@/domain/models/forms/IClientForm";
import CardButton from "@/presentation/components/common/CardButton";

interface ClientDataFormViewProps {
  formClientData: UseFormReturn<IClientForm, any, undefined>;
  savingData: boolean;
  onClick: () => Promise<void>;
  handleChange: (event: SelectChangeEvent) => void;
  direccionEnvio: string;
}

const ClientDataFormView = ({
  formClientData,
  savingData,
  onClick,
  handleChange,
  direccionEnvio,
}: ClientDataFormViewProps) => {
  const { register, formState } = formClientData;
  const { errors } = formState;

  return (
    <Box>
      <form noValidate autoComplete="off">
        <Grid container columnSpacing={6} rowSpacing={4}>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.nombres?.message}
            >
              <InputLabel htmlFor="nombres" sx={inputLabel}>
                Nombres
              </InputLabel>
              <Input
                disabled={savingData}
                id="nombres"
                type="text"
                aria-describedby="nombres-error"
                placeholder="Nombres"
                sx={inputStyle}
                {...register("nombres", {
                  required: {
                    value: true,
                    message: "Debes digitar tu nombre",
                  },
                  minLength: {
                    value: 3,
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
                id="nombres-error"
              >
                {errors?.nombres?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.apellidos?.message}
            >
              <InputLabel htmlFor="apellidos" sx={inputLabel}>
                Apellidos
              </InputLabel>
              <Input
                disabled={savingData}
                id="apellidos"
                type="text"
                aria-describedby="apellidos-error"
                placeholder="Apellidos"
                sx={inputStyle}
                {...register("apellidos", {
                  required: {
                    value: true,
                    message: "Debes digitar tus apellidos",
                  },
                  minLength: {
                    value: 5,
                    message: "Tus apellidos debe ser de más de 3 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "Tus apellidos deben ser de menos de 50 caracteres",
                  },
                })}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="apellidos-error"
              >
                {errors?.apellidos?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.email?.message}
            >
              <InputLabel htmlFor="email" sx={inputLabel}>
                Email
              </InputLabel>
              <Input
                disabled
                id="email"
                type="text"
                aria-describedby="email-error"
                placeholder="Email"
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
                id="email-error"
              >
                {errors?.email?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.telefono?.message}
            >
              <InputLabel htmlFor="telefono" sx={inputLabel}>
                Teléfono / Celular
              </InputLabel>
              <Input
                disabled={savingData}
                id="telefono"
                type="text"
                aria-describedby="telefono-error"
                placeholder="Teléfono / Celular"
                sx={inputStyle}
                {...register("telefono", {
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
                id="telefono-error"
              >
                {errors?.telefono?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              variant="standard"
              sx={{ width: "100%" }}
              error={!!errors?.tipoDocumento?.message}
            >
              <InputLabel sx={inputLabel}>Tipo Documento</InputLabel>
              <Select
                disabled={savingData}
                id="tipoDocumento"
                value={"CC"}
                label="Tipo Documento"
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
                {errors?.tipoDocumento?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={4}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.numeroDocumento?.message}
            >
              <InputLabel htmlFor="numeroDocumento" sx={inputLabel}>
                Número Documento
              </InputLabel>
              <Input
                disabled={savingData}
                id="numeroDocumento"
                type="text"
                aria-describedby="numeroDocumento-error"
                placeholder="Número Documento"
                sx={inputStyle}
                {...register("numeroDocumento", {
                  required: {
                    value: true,
                    message: "Debe digitar el número de documento",
                  },
                  minLength: {
                    value: 4,
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
                id="numeroDocumento-error"
              >
                {errors?.numeroDocumento?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={2}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.digitoVerificacion?.message}
            >
              <InputLabel htmlFor="digitoVerificacion" sx={inputLabel}>
                DV
              </InputLabel>
              <Input
                disabled={savingData}
                id="digitoVerificacion"
                type="text"
                aria-describedby="digitoVerificacion-error"
                placeholder="DV"
                sx={inputStyle}
                {...register("digitoVerificacion", {
                  minLength: {
                    value: 0,
                    message: "",
                  },
                  maxLength: {
                    value: 1,
                    message: "Debe ser sólo 1 dígito",
                  },
                  pattern: {
                    value: /^[0-9]$/,
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
                id="digitoVerificacion-error"
              >
                {errors?.digitoVerificacion?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.direccion?.message}
            >
              <InputLabel htmlFor="direccion" sx={inputLabel}>
                Dirección
              </InputLabel>
              <Input
                disabled={savingData}
                id="direccion"
                type="text"
                aria-describedby="direccion-error"
                placeholder="Dirección"
                sx={inputStyle}
                {...register("direccion", {
                  required: {
                    value: true,
                    message: "Debes digitar la direccion de domicilio",
                  },
                  minLength: {
                    value: 5,
                    message: "La dirección debe tener mas de 5 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "Tus apellidos deben ser de menos de 50 caracteres",
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
                {errors?.direccion?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.complemento?.message}
            >
              <InputLabel htmlFor="complemento" sx={inputLabel}>
                Complemento Dirección
              </InputLabel>
              <Input
                disabled={savingData}
                id="complemento"
                type="text"
                aria-describedby="complemento-error"
                placeholder="Complemento Dirección"
                sx={inputStyle}
                {...register("complemento")}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="complemento-error"
              >
                {errors?.complemento?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.departamento?.message}
            >
              <InputLabel htmlFor="departamento" sx={inputLabel}>
                Departamento
              </InputLabel>
              <Input
                disabled={savingData}
                id="departamento"
                type="text"
                aria-describedby="departamento-error"
                placeholder="Departamento"
                sx={inputStyle}
                {...register("departamento", {
                  required: {
                    value: true,
                    message: "Digite el nombre del departamento",
                  },
                  minLength: {
                    value: 4,
                    message: "Departamento debe tener mas de 4 caracteres",
                  },
                })}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="departamento-error"
              >
                {errors?.departamento?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.ciudad?.message}
            >
              <InputLabel htmlFor="ciudad" sx={inputLabel}>
                Ciudad / Municipio
              </InputLabel>
              <Input
                disabled={savingData}
                id="ciudad"
                type="text"
                aria-describedby="ciudad-error"
                placeholder="Ciudad / Municipio"
                sx={inputStyle}
                {...register("ciudad", {
                  required: {
                    value: true,
                    message: "Debe digitar tel nombre de la ciudad",
                  },
                  minLength: {
                    value: 5,
                    message:
                      "Nombre de la ciudad debe tener mas de 5 caracteres",
                  },
                })}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="ciudad-error"
              >
                {errors?.ciudad?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.barrio?.message}
            >
              <InputLabel htmlFor="barrio" sx={inputLabel}>
                Barrio
              </InputLabel>
              <Input
                disabled={savingData}
                id="barrio"
                type="text"
                aria-describedby="barrio-error"
                placeholder="Barrio"
                sx={inputStyle}
                {...register("barrio")}
              />
              <span
                style={{
                  color: colors.gray,
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
                }}
                id="barrio-error"
              >
                {errors?.barrio?.message}
              </span>
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel sx={inputLabel}>
                Utilizar esta dirección para envíos
              </InputLabel>
              <Select
                disabled={savingData}
                id="direccionEnvio"
                value={direccionEnvio}
                sx={{
                  ...inputStyle,
                  "&.-MuiPopover-paper-MuiMenu-paper": {
                    background: colors.white,
                  },
                }}
                onChange={handleChange}
              >
                <MenuItem value={"S"} sx={MonserratGreen16400}>
                  Si
                </MenuItem>
                <MenuItem value={"N"} sx={MonserratGreen16400}>
                  No
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            display="flex"
            direction="row"
            justifyContent="flex-end"
          >
            <CardButton
              label={"Guardar datos"}
              variant="black"
              onClick={onClick}
              disabled={savingData}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ClientDataFormView;
