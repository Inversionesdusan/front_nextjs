import { constantes } from "../constants";
import { CartItem } from "../models/store/CarItem";

const useLocalStorage = () => {
  const getDataShoppingCart = (): string => {
    const data = localStorage.getItem(constantes.keys.shoppingCar) || "";
    return data;
  };

  const saveDataShoppingCart = (
    productId: number,
    presentationId: number,
    quantity: number
  ): CartItem[] => {
    const dataSaved = getDataShoppingCart();
    let arrProds = [];
    if (dataSaved) {
      arrProds = JSON.parse(dataSaved) as {
        productId: number;
        presentationId: number;
        quantity: number;
      }[];
      const idxProd = arrProds.findIndex(
        (prod) =>
          prod.productId === productId && prod.presentationId === presentationId
      );
      if (idxProd >= 0) {
        arrProds[idxProd].presentationId = presentationId;
        arrProds[idxProd].quantity = quantity;
      } else {
        arrProds.push({ productId, presentationId, quantity });
      }
    } else {
      arrProds.push({ productId, presentationId, quantity });
    }
    localStorage.setItem(constantes.keys.shoppingCar, JSON.stringify(arrProds));
    return arrProds;
  };

  return {
    getDataShoppingCart,
    saveDataShoppingCart,
  };
};

export default useLocalStorage;
