import ButtonCustom from "@/app/components/basic/ButtonCustom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onAccept: () => void;
}

const ModalComponent = ({
  open,
  title,
  message,
  onClose,
  onAccept,
}: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <ButtonCustom onClick={onAccept}>Aceptar</ButtonCustom>
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;
