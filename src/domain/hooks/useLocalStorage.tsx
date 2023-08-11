import { constantes } from "../constants";

const useLocalStorage = () => {
  const getDataShoppingCar = (): string => {
    const data = localStorage.getItem(constantes.keys.shoppingCar) || "";
    return data;
  };

  const saveDataShoppingCar = (
    productId: number,
    presentationId: number,
    quantity: number
  ) => {
    const dataSaved = getDataShoppingCar();
    console.log("dataSaved -> ", dataSaved);
    let arrProds = [];
    if (dataSaved) {
      arrProds = JSON.parse(dataSaved) as {
        productId: number;
        presentationId: number;
        quantity: number;
      }[];
      console.log("dataSaved converted-> ", arrProds);
      const idxProd = arrProds.findIndex(
        (prod) =>
          prod.productId === productId && prod.presentationId === presentationId
      );
      console.log("producto encontrado -> ", idxProd, productId, arrProds);
      if (idxProd >= 0) {
        arrProds[idxProd].presentationId = presentationId;
        arrProds[idxProd].quantity = quantity;
        console.log("se actualiza");
      } else {
        console.log("NO se actualiza");
        arrProds.push({ productId, presentationId, quantity });
      }
      console.log("arreglo despues -> ", arrProds);
    } else {
      console.log("NO se ENCONTRO DATA se agrega registro");
      arrProds.push({ productId, presentationId, quantity });
    }
    console.log("se guarda data en localstorage -> ", arrProds);
    localStorage.setItem(constantes.keys.shoppingCar, JSON.stringify(arrProds));
  };

  return {
    getDataShoppingCar,
    saveDataShoppingCar,
  };
};

export default useLocalStorage;
