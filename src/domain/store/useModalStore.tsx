import { create } from "zustand";

interface DataModalStore {
  open: boolean;
  title: string;
  message: string;
  onAccept?: () => void;
  onCancel?: () => void;
}

interface ModalStore {
  dataModal: DataModalStore;
  updateDataModal: (newDataModal: DataModalStore) => void;
  closeModal: () => void;
}

const initialData: DataModalStore = {
  open: false,
  title: "",
  message: "",
  onAccept: undefined,
  onCancel: undefined,
};

const useModalStore = create<ModalStore>((set) => ({
  dataModal: { ...initialData },
  updateDataModal: (newDataModal: DataModalStore) => {
    set((state) => ({ ...state, dataModal: { ...newDataModal } }));
  },
  closeModal: () => {
    set((state) => ({ ...state, dataModal: { ...initialData } }));
  },
}));

export default useModalStore;
