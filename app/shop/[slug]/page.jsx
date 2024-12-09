import React from "react";
import styles from "./product.module.scss";
import { productMock } from "@/data";
import Button from "@/components/button/Button";
import PhotoSlider from "@/components/photo-slider/PhotoSlider";

const Product = () => {
  return (
    <div className={styles.container}>
      <PhotoSlider photos={productMock.images} className={styles.imageWrapper} />
      {/*<div className={styles.imageWrapper}>*/}
      {/*  <img src={productMock.images[0]} alt={productMock.title} className={styles.image} />*/}
      {/*</div>*/}
      <div className={styles.content}>
        <div className={styles.title}>{productMock.title}</div>
        <div className={styles.description}>{productMock.description}</div>
        <div className={styles.specification}>
          <div>{productMock.material}</div>
          <div>{productMock.color}</div>
          <div>{productMock.size}</div>
        </div>
        <div className={styles.price}>${productMock.price}</div>
        <div className={styles.bottom}>
          <div className={styles.caption}>
            Shipping: Worldwide shipping is free for orders of $ 350 and above. Delivery is carried out within 5-14 days
            from the date of confirmation of the order.
          </div>
          <div className={styles.divider} />
          <Button text="Add to bag" />
        </div>
      </div>
    </div>
  );
};

export default Product;