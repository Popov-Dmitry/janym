"use client";

import React from "react";
import Button from "@/components/button/Button";
import { useCart } from "@/providers/cart-provider";

const AddToBagButton = ({ productId }) => {
  const { addItem, removeItem, isInCart } = useCart();

  const onClick = () => {
    if (isInCart(productId)) {
      removeItem(productId);
    } else {
      addItem(productId);
    }
  }

  return (
    <Button
      text={isInCart(productId) ? "Remove from bag" : "Add to bag"}
      onClick={onClick}
    />
  );
};

export default AddToBagButton;