import { productsPreviewMock } from "@/data";
import ProductPreview from "@/app/components/product-preview/ProductPreview";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.fw}>
          <div className={styles.fwTitle}>FW’24</div>
          <div className={styles.fwSubtitle}>Double Wrap Bracelet</div>
          <div className={styles.fwCaption}>
            <div>Janym Sol</div>
            <div>FW’24</div>
          </div>
        </div>
        <img src="/aral-sea-collection.png" alt="" className={styles.fwImage} />
        <div className={styles.fwBottom}>
          <div className={styles.fwBottomCaption}>
            <div>FW’</div>
            <div>24</div>
          </div>
          <div className={styles.fwBottomText}>
            &#34;A brand reinterpreting Kazakh traditions in a modern context. Each collection reflects the nature and
            history of Kazakhstan, with the first one responding to the tragedy of the Aral Sea.&#34;
          </div>
        </div>
      </div>

      <div className={styles.products}>
        {productsPreviewMock.map((product) => (
          <ProductPreview key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
}
