import { constantes } from "../constants";
import { CartItem } from "../models/store/CarItem";

const useLocalStorage = () => {
  const getDataShoppingCart = (): CartItem[] => {
    return JSON.parse(
      localStorage.getItem(constantes.keys.shoppingCar) || "[]"
    ) as CartItem[];
  };

  const saveDataShoppingCart = (cartItem: CartItem): CartItem[] => {
    const dataSaved = getDataShoppingCart() as CartItem[];
    const idxProd = dataSaved.findIndex(
      (prod) =>
        prod.productId === cartItem.productId &&
        prod.presentationId === cartItem.presentationId
    );
    if (idxProd >= 0) {
      dataSaved[idxProd].presentationId = cartItem.presentationId;
      dataSaved[idxProd].quantity = cartItem.quantity;
    } else {
      dataSaved.push({ ...cartItem });
    }
    localStorage.setItem(
      constantes.keys.shoppingCar,
      JSON.stringify(dataSaved)
    );
    return dataSaved;
  };

  const saveAllItemsShoppingCart = (items: CartItem[]) => {
    if (localStorage.getItem(constantes.keys.shoppingCar))
      localStorage.removeItem(constantes.keys.shoppingCar);
    localStorage.setItem(constantes.keys.shoppingCar, JSON.stringify(items));
  };

  const clearShoppingCart = () => {
    localStorage.removeItem(constantes.keys.shoppingCar);
  };

  return {
    getDataShoppingCart,
    saveDataShoppingCart,
    saveAllItemsShoppingCart,
    clearShoppingCart,
  };
};

export default useLocalStorage;
