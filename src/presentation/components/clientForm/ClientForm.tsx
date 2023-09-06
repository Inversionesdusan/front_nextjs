import { CuniaGreen16400, colors } from "@/presentation/styles/colors";
import { Box, FormControl, Input, Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { styles } from "./ClientFormStyles";
import { OrderFormValues } from "@/domain/models/forms/OrderForm";

interface ClientFormProps {
  formRegister: UseFormReturn<OrderFormValues, any, undefined>;
}

const ClientForm = ({ formRegister }: ClientFormProps) => {
  const { register, formState } = formRegister;
  const { errors } = formState;

  const { inputStyle, formContainer } = styles();

  return (
    <Box>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(data) => {}}
        style={{ width: "100%" }}
      >
        <Typography sx={{ ...CuniaGreen16400, marginY: "1rem" }}>
          Datos del Cliente
        </Typography>
        <Box sx={formContainer}>
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.email?.message}
          >
            <Input
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
            error={!!errors.nombresCliente?.message}
          >
            <Input
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
            error={!!errors.nroTelefono?.message}
          >
            <Input
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
        </Box>
        <Typography sx={{ ...CuniaGreen16400, marginY: "1rem" }}>
          Datos para el envío
        </Typography>
        <Box sx={formContainer}>
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.direccionEnvio?.message}
          >
            <Input
              id="direccionEnvio"
              type="text"
              aria-describedby="direccionEnvio-error"
              placeholder="Dirección de envío"
              sx={inputStyle}
              {...register("direccionEnvio", {
                required: {
                  value: true,
                  message: "Debes digitar tu dirección para el envío",
                },
                minLength: {
                  value: 5,
                  message: "La direccion debe tener mas de 5 caracteres",
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
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.departamento?.message}
          >
            <Input
              id="departamento"
              type="text"
              aria-describedby="departamento-error"
              placeholder="Departamento"
              sx={inputStyle}
              {...register("departamento", {
                required: {
                  value: true,
                  message: "Debes digitar el departamento para el envío",
                },
                minLength: {
                  value: 4,
                  message: "El departamento debe tener al menos 4 caracteres",
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
              {errors.departamento?.message}
            </span>
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.ciudad?.message}
          >
            <Input
              id="ciudad"
              type="text"
              aria-describedby="ciudad-error"
              placeholder="Ciudad"
              sx={inputStyle}
              {...register("ciudad", {
                required: {
                  value: true,
                  message: "Debes digitar la ciudad para el envío",
                },
                minLength: {
                  value: 4,
                  message: "La ciudad debe tener al menos 4 caracteres",
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
              {errors.ciudad?.message}
            </span>
          </FormControl>
        </Box>
      </form>
    </Box>
  );
};

export default ClientForm;
