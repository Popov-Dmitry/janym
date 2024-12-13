"use client";

import React, { useEffect, useState } from "react";

const CartStateContext = React.createContext(undefined);

const initCartState = () => {
  if (typeof window !== 'undefined') {
    const storedCart = JSON.parse(localStorage?.getItem("cart"));

    return storedCart ? storedCart : [];
  }

  return  [];
};

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(initCartState());

  const addItem = (item) => {
    setCart(prev => ([...prev, item]));
  };

  const removeItem = (item) => {
    setCart(prev => prev.filter((id) => id !== item));
  };

  const isInCart = (item) => {
    return cart.find((id) => id === item);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage?.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartStateContext.Provider value={{ cart, addItem, removeItem, isInCart }}>
      {children}
    </CartStateContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
