import { Box, Grow } from "@mui/material";
import { styles } from "./ShoppingCartDetailStyles";
import { useEffect, useState } from "react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import useLocalStorage from "@/domain/hooks/useLocalStorage";
import { CartItem } from "@/domain/models/store/CarItem";
import useAppStore from "@/domain/store/useStore";
import CardButton from "../common/CardButton";
import { useRouter } from "next/navigation";

interface ShoppingCartDetailProps {
  open: boolean;
  handleOpenModal: () => void;
}

const ShoppingCartDetail = ({
  open,
  handleOpenModal,
}: ShoppingCartDetailProps) => {
  const [itemsCart, setItemsCart] = useState<CartItem[]>([]);
  const { saveAllItemsShoppingCart, getDataShoppingCart } = useLocalStorage();
  const { initializeCart } = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (open) {
      loadCartData();
    }
  }, [open]);

  const loadCartData = () => {
    const cartData = getDataShoppingCart();
    setItemsCart(cartData);
    initializeCart(cartData);
  };

  const handleAddQty = (index: number) => {
    if (itemsCart && itemsCart.length > 0) {
      itemsCart[index].quantity = itemsCart[index].quantity + 1;
      saveAllItemsShoppingCart(itemsCart);
    }
    loadCartData();
  };

  const handleRemoveQty = (index: number) => {
    itemsCart[index].quantity = itemsCart[index].quantity - 1;
    if (itemsCart[index].quantity <= 0) {
      itemsCart.splice(index, 1);
      handleOpenModal();
    }
    saveAllItemsShoppingCart(itemsCart);
    loadCartData();
  };

  const createOrder = () => {
    handleOpenModal();
    router.push("/pedidos/detalle");
  };

  const { container, cartContainer } = styles(open);

  return (
    <div style={container}>
      <Grow
        in={open}
        style={{ transformOrigin: "0" }}
        {...(open ? { timeout: 600 } : {})}
      >
        <Box sx={cartContainer}>
          <div
            style={{
              width: "100%",
              zIndex: 1400,
              maxHeight: "500px",
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            {itemsCart.map((item, index) => (
              <ShoppingCartProduct
                index={index}
                key={`Pr${item.presentationId}${item.productId}`}
                product={item}
                handleAddQty={handleAddQty}
                handleRemoveQty={handleRemoveQty}
              />
            ))}
          </div>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingLeft: { xs: "0.75rem", sm: "0" },
              paddingRight: { xs: "0.75rem", sm: "1.5rem" },
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <CardButton
              label="Cancelar"
              onClick={handleOpenModal}
              variant="black"
            />
            <CardButton
              label="Hacer Pedido"
              onClick={createOrder}
              variant="green"
            />
          </Box>
        </Box>
      </Grow>
    </div>
  );
};

export default ShoppingCartDetail;
