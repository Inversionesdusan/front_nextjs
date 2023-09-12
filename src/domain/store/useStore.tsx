import { create } from "zustand";
import { CartItem } from "../models/store/CarItem";
import { IProductoWithPricesDto } from "../models/Dto/IProductoDto";
import { IOrderDto } from "../models/Dto/IOrderDto";

interface AppStore {
  selectedProduct: IProductoWithPricesDto | undefined;
  setSelectedProduct: (product: IProductoWithPricesDto) => void;
  shoppingCart: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (productId: number, presentationId: number) => void;
  clearCart: () => void;
  initializeCart: (items: CartItem[]) => void;
  flujo: "compra" | "carrito" | "";
  setFlujo: (flujo: "compra" | "carrito" | "") => void;
  itemToBuy: CartItem | undefined;
  setItemToBuy: (item: CartItem) => void;
  order: IOrderDto | null;
  setOrder: (order: IOrderDto) => void;
  clearOrder: () => void;
}

const useAppStore = create<AppStore>((set) => ({
  itemToBuy: undefined,
  setItemToBuy: (item: CartItem) => {
    set((state) => ({ ...state, itemToBuy: { ...item } }));
  },
  flujo: "",
  setFlujo: (flujo) => {
    set((state) => ({ ...state, flujo }));
  },
  selectedProduct: undefined,
  setSelectedProduct: (product) => {
    set((state) => ({ ...state, selectedProduct: product }));
  },
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
  order: null,
  setOrder: (order: IOrderDto) => {
    set({ order });
  },
  clearOrder: () => {
    set({ order: null });
  },
}));

export default useAppStore;
