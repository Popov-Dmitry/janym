"use client";

import React, { useEffect, useState } from "react";

const CartStateContext = React.createContext(undefined);

export function CartProvider(props) {
  const { children } = props;
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [cart, setCart] = useState([]);

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
    if (isCartLoaded) {
      if (typeof window !== 'undefined') {
        localStorage?.setItem("cart", JSON.stringify(cart));
      }
    } else {
      setIsCartLoaded(true);
      if (typeof window !== 'undefined') {
        const storedCart = JSON.parse(localStorage?.getItem("cart"));
        setCart(storedCart ? storedCart : []);
      } else {
        setCart([]);
      }
    }

  }, [cart, isCartLoaded]);

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
