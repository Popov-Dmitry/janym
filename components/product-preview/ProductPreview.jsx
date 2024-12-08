import React from "react";
import styles from "./product-preview.module.scss";
import Button from "@/components/button/Button";

const ProductPreview = ({ image, title, price }) => {
  return (
    <div className={styles.productPreview}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.text}>
          <div>{title}</div>
          <div>${price}</div>
        </div>
      </div>
      <div className={styles.divider} />
      <Button text="Add to bag" />
    </div>
  );
};

export default ProductPreview;