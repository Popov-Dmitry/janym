import React from "react";
import styles from "./product-preview.module.scss";
import AddToBagButton from "@/clientSections/shop/product/AddToBagButton";
import Link from "next/link";

const ProductPreview = ({ slug, cover, title, price }) => {
  return (
    <div className={styles.productPreview}>
      <Link href={`/shop/${slug}`} className={styles.content}>
        <div className={styles.imageWrapper}>
          <img src={cover} alt={title} className={styles.image} />
        </div>
        <div className={styles.text}>
          <div>{title}</div>
          <div>${price}</div>
        </div>
      </Link>
      <div className={styles.divider} />
      <AddToBagButton productId={slug} />
    </div>
  );
};

export default ProductPreview;