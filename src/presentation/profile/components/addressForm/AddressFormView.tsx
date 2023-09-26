import { IAddressForm } from "@/domain/models/forms/IAddressForm";
import { Box, FormControl, Input, InputLabel } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";
import { inputLabel, inputStyle } from "@/presentation/styles/theme";
import { colors } from "@/presentation/styles/colors";
import CardButton from "@/presentation/components/common/CardButton";

interface AddressFormViewProps {
  formAddressData: UseFormReturn<IAddressForm, any, undefined>;
  savingData: boolean;
  onClick: () => Promise<void>;
}

const AddressFormView = ({
  savingData,
  formAddressData,
  onClick,
}: AddressFormViewProps) => {
  const { register, formState } = formAddressData;
  const { errors } = formState;

  return (
    <Box>
      <form noValidate autoComplete="off">
        <Grid container columnSpacing={6} rowSpacing={4}>
          <Grid xs={12} md={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.direccion?.message}
            >
              <InputLabel htmlFor="direccion" sx={inputLabel} shrink>
                Dirección
              </InputLabel>
              <Input
                disabled={savingData}
                id="direccion"
                type="text"
                aria-describedby="direccion-error"
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
          <Grid xs={12} md={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.complemento?.message}
            >
              <InputLabel htmlFor="complemento" sx={inputLabel} shrink>
                Complemento Dirección
              </InputLabel>
              <Input
                disabled={savingData}
                id="complemento"
                type="text"
                aria-describedby="complemento-error"
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
          <Grid xs={12} md={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors.departamento?.message}
            >
              <InputLabel htmlFor="departamento" sx={inputLabel} shrink>
                Departamento
              </InputLabel>
              <Input
                disabled={savingData}
                id="departamento"
                type="text"
                aria-describedby="departamento-error"
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
          <Grid xs={12} md={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.ciudad?.message}
            >
              <InputLabel htmlFor="ciudad" sx={inputLabel} shrink>
                Ciudad / Municipio
              </InputLabel>
              <Input
                disabled={savingData}
                id="ciudad"
                type="text"
                aria-describedby="ciudad-error"
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
          <Grid xs={12} md={6}>
            <FormControl
              fullWidth
              variant="standard"
              error={!!errors?.barrio?.message}
            >
              <InputLabel htmlFor="barrio" sx={inputLabel} shrink>
                Barrio
              </InputLabel>
              <Input
                disabled={savingData}
                id="barrio"
                type="text"
                aria-describedby="barrio-error"
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
          <Grid
            xs={12}
            display="flex"
            direction="row"
            sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
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

export default AddressFormView;
