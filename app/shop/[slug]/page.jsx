import React from "react";
import styles from "./product.module.scss";
import { productMock } from "@/data";
import PhotoSlider from "@/components/photo-slider/PhotoSlider";
import AddToBagButton from "@/clientSections/shop/product/AddToBagButton";

const Product = () => {
  return (
    <div className={styles.container}>
      <PhotoSlider photos={productMock.images} className={styles.imageWrapper} />
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
          <AddToBagButton productId={productMock.slug} />
        </div>
      </div>
    </div>
  );
};

export default Product;