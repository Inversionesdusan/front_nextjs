import { create } from "zustand";
import { CartItem } from "../models/store/CarItem";

interface AppStore {
  shoppingCart: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (productId: number, presentationId: number) => void;
  clearCart: () => void;
  initializeCart: (items: CartItem[]) => void;
}

const useAppStore = create<AppStore>((set) => ({
  shoppingCart: [],
  addItem: (product) => {
    set((state) => {
      return { shoppingCart: [...state.shoppingCart, product] };
    });
  },
  removeItem: (productId, presentationId) => {
    set((state) => ({
      shoppingCart: state.shoppingCart.filter(
        (product) =>
          product.productId !== productId &&
          product.presentationId !== presentationId
      ),
    }));
  },
  clearCart: () => {
    set({ shoppingCart: [] });
  },
  initializeCart: (items: CartItem[]) => {
    set((state) => ({ shoppingCart: [...items] }));
  },
}));

export default useAppStore;
