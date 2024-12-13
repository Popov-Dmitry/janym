"use client";

import styles from "./bag.module.scss";
import React, { useEffect, useState } from "react";
import { useCart } from "@/providers/cart-provider";
import { joinClassNames } from "@/utils/join-class-names";
import Checkbox from "@/components/checkbox/Checkbox";
import Button from "@/components/button/Button";
import { getProductsFromCart } from "@/utils/db-requests-client";

const Bag = () => {
  const { cart, removeItem } = useCart();
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    (async () => {
      const cartDetails = await getProductsFromCart(cart);
      setCartDetails(cartDetails);
    })();
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className={joinClassNames(styles.container, styles.empty)}>
        <div>Bag is empty</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {cartDetails.map((item) => (
        <div className={styles.block} key={item.slug}>
          <div className={styles.imageWrapper}>
            <img src={item.cover} alt={item.title} className={styles.image} />
          </div>
          <div className={styles.details}>
            <div className={styles.top}>
              <div>{item.title}</div>
              <div>${item.price}</div>
            </div>
            <div className={styles.specification}>
              <div>Size: {item.size}</div>
              <div>Material: {item.material}</div>
            </div>
            <div className={styles.remove} onClick={() => removeItem(item.slug)}>
              Remove
            </div>
          </div>
        </div>
      ))}
      <div className={styles.block}>
        <Checkbox text="By selecting this box, I agree to the full terms and conditions of purchase and acknowledge that my order might be subject to local duties/taxes imposed by the country of destination (if applicable) that are my.full responsibility. " />
        <div className={styles.total}>
          Total: ${cartDetails.reduce((prev, curr) => prev + curr.price, 0)}
        </div>
      </div>
      <Button text="Check Out" font="sfPro" />
    </div>
  );
};

export default Bag;