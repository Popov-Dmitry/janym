"use client";

import styles from "./bag.module.scss";
import React, { useEffect, useState } from "react";
import { useCart } from "@/providers/cart-provider";
import { joinClassNames } from "@/utils/join-class-names";
import Checkbox from "@/components/checkbox/Checkbox";
import Button from "@/components/button/Button";
import { getProductsFromCart } from "@/utils/db-requests-client";
import Link from "next/link";

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
        <React.Fragment key={item.id}>
          <Link href={`/shop/${item.slug}`} className={styles.mobile}>
            <div className={styles.top}>
              <div>{item.title}</div>
              <div className={styles.removeMobile} onClick={() => removeItem(item.slug)}>
                X
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.leftColMobile}>
                <div className={styles.specification}>
                  <div>Size: {item.size}</div>
                  <div>Material: {item.material}</div>
                </div>
                <div className={styles.priceMobile}>${item.price}</div>
              </div>
              <div className={styles.imageWrapper}>
                <img src={item.cover} alt={item.title} className={styles.image} />
              </div>
            </div>
          </Link>
          <div className={styles.desktop}>
            <div className={styles.section}>
              <Link href={`/shop/${item.slug}`} className={styles.imageWrapper}>
                <img src={item.cover} alt={item.title} className={styles.image} />
              </Link>
              <div className={styles.details}>
                <Link href={`/shop/${item.slug}`} className={styles.top}>
                  <div>{item.title}</div>
                  <div>${item.price}</div>
                </Link>
                <div className={styles.specification}>
                  <div>Size: {item.size}</div>
                  <div>Material: {item.material}</div>
                </div>
                <div className={styles.remove} onClick={() => removeItem(item.slug)}>
                  Remove
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className={styles.bottom}>
        <Checkbox
          text="By selecting this box, I agree to the full terms and conditions of purchase and acknowledge that my order might be subject to local duties/taxes imposed by the country of destination (if applicable) that are my.full responsibility. " />
        <div className={styles.total}>
          <span className={styles.desktop}>
            Total: ${cartDetails.reduce((prev, curr) => prev + curr.price, 0)}
          </span>
          <span className={styles.mobile}>
            ${cartDetails.reduce((prev, curr) => prev + curr.price, 0)} (Total)
          </span>
        </div>
      </div>
      <Button text="Check Out" font="sfPro" />
    </div>
  );
};

export default Bag;