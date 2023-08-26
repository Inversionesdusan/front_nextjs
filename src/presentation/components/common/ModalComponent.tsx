import ButtonCustom from "@/app/components/basic/ButtonCustom";
import useModalStore from "@/domain/store/useModalStore";
import { colors } from "@/presentation/styles/colors";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalComponent = () => {
  const { dataModal } = useModalStore();

  return (
    <Dialog
      TransitionComponent={Transition}
      open={dataModal.open}
      onClose={dataModal.onCancel}
      sx={{
        "& .MuiPaper-root": {
          background: colors.lightGray,
          minWidth: "340px",
          width: { md: "550px", xs: "90%" },
          maxWidth: "550px",
          height: "350px",
          maxHeight: "350px",
          borderRadius: {
            xs: "2rem 7rem 2rem 7rem",
            sm: "3rem 10rem 3rem 10rem",
          },
          paddingY: { xs: "3rem", sm: "3rem", md: "3rem" },
          paddingX: { xs: "2rem", sm: "3rem", md: "3rem" },
          overflow: "hidden",
        },
      }}
    >
      {dataModal.title && (
        <DialogTitle
          sx={{
            fontFamily: "Cunia",
            color: colors.green,
            fontSize: "1.25rem",
            padding: 0,
          }}
        >
          {dataModal.title}
        </DialogTitle>
      )}
      <DialogContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "1rem",
            color: colors.black,
            paddingTop: "1rem",
            fontWeight: "500",
            padding: 0,
          }}
        >
          {dataModal.message}
        </Typography>
      </DialogContent>
      <DialogActions>
        {dataModal.onCancel && (
          <ButtonCustom typeButton="modal" invert onClick={dataModal.onCancel}>
            Cancelar
          </ButtonCustom>
        )}
        {dataModal.onAccept && (
          <ButtonCustom typeButton="modal" onClick={dataModal.onAccept}>
            Aceptar
          </ButtonCustom>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;
