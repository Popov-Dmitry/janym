import React from "react";
import styles from "./product-preview.module.scss";
import AddToBagButton from "@/clientSections/shop/product/AddToBagButton";

const ProductPreview = ({ slug, image, title, price }) => {
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
      <AddToBagButton productId={slug} />
    </div>
  );
};

export default ProductPreview;