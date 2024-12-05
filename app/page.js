import { productsPreviewMock } from "@/data";
import ProductPreview from "@/app/components/product-preview/ProductPreview";
import styles from "./page.module.scss";;

export default function Home() {
  return (
    <div>
      {/*<div>*/}
      {/*  <div>*/}
      {/*    <div>FW’24</div>*/}
      {/*    <div>Double Wrap Bracelet</div>*/}
      {/*    <div>*/}
      {/*      <div>Janym Sol</div>*/}
      {/*      <div>FW’24</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className={styles.products}>
        {productsPreviewMock.map((product) => (
          <ProductPreview key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
}
