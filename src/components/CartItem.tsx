import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack } from "react-bootstrap";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quanity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
};

export default CartItem;
