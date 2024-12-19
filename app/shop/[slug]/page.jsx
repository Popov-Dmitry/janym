import React from "react";
import styles from "./product.module.scss";
import PhotoSlider from "@/components/photo-slider/PhotoSlider";
import AddToBagButton from "@/clientSections/shop/product/AddToBagButton";
import { getProduct } from "@/utils/db-requests-server";
import { redirect } from "next/navigation";

const Product = async ({ params }) => {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <PhotoSlider photos={product.images} className={styles.imageWrapper} />
      <div className={styles.content}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.info}>
          <div className={styles.specification}>
            <div>Material: {product.material}</div>
            <div>Supplier color: {product.color}</div>
            <div>Size: {product.size}</div>
          </div>
          <div className={styles.price}>${product.price}</div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.caption}>
            Shipping: Worldwide shipping is free for orders of $ 350 and above. Delivery is carried out within 5-14 days
            from the date of confirmation of the order.
          </div>
          <div className={styles.divider} />
          <AddToBagButton productId={slug} />
        </div>
      </div>
    </div>
  );
};

export default Product;