import React from "react";
import styles from "./product.module.scss";
import PhotoSlider from "@/components/photo-slider/PhotoSlider";
import AddToBagButton from "@/clientSections/shop/product/AddToBagButton";
import { getProduct } from "@/utils/db-requests";
import { redirect } from "next/navigation";

const Product = async ({ params }) => {
  const product = await getProduct(params.slug);

  if (!product) {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <PhotoSlider photos={product.images} className={styles.imageWrapper} />
      <div className={styles.content}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.specification}>
          <div>{product.material}</div>
          <div>{product.color}</div>
          <div>{product.size}</div>
        </div>
        <div className={styles.price}>${product.price}</div>
        <div className={styles.bottom}>
          <div className={styles.caption}>
            Shipping: Worldwide shipping is free for orders of $ 350 and above. Delivery is carried out within 5-14 days
            from the date of confirmation of the order.
          </div>
          <div className={styles.divider} />
          <AddToBagButton productId={product.slug} />
        </div>
      </div>
    </div>
  );
};

export default Product;