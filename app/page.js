import { productsPreviewMock } from "@/data";
import ProductPreview from "@/app/components/product-preview/ProductPreview";
import styles from "./page.module.scss";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";

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

      <div className={styles.block} id="shop">
        <div className={styles.blockTitle}>Autumn-Winter 25</div>
        <div className={styles.products}>
          {productsPreviewMock.map((product) => (
            <ProductPreview key={product.title} {...product} />
          ))}
        </div>
      </div>

      <div className={styles.blockFullHeight} id="about">
        <div className={styles.blockTitle}>About Janym</div>
        <div className={styles.twoCols}>
          <div className={styles.leftCol}>
            <div className={styles.leftColDescription}>
              Ethnicity, avant-garde, romanticism,
              irony, deconstructivism,
              craftsmanship, environmentalism
            </div>
            <div className={styles.leftColBottom}>
              <div className={styles.leftColBottomTexts}>
                <div className={styles.leftColCaption}>Values</div>
                <div className={styles.leftColBottomText}>
                  <div>Cultural heritage</div>
                  <div>Environmental friendliness</div>
                </div>
              </div>
              <div className={styles.leftColBottomTexts}>
                <div className={styles.leftColCaption}>Philosophy</div>
                <div className={styles.leftColBottomText}>
                  <div>Harmony with nature, culture</div>
                  <div>Connecting the past and the future</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.colImage}>
            <Image src="/about.png" alt="" fill />
          </div>
        </div>
      </div>

      <div className={styles.ecological} id="ecological">
        <div className={styles.blockTitle}>Approach to garment Creation</div>
        <div className={styles.twoCols}>
          <div className={styles.leftCol}>
            <div className={styles.leftColCaption}>
              Fashion
            </div>
            <div className={joinClassNames(styles.leftColDescription, "mt-16px")}>
              By focusing on recycled,
              renewable materials, clean electricity, and low-carbon shipping
            </div>
            <div className={joinClassNames(styles.leftColBottom, "pb-40px")}>
              <div className={styles.leftColBottomTexts}>
                <div className={styles.leftColCaption}>Values</div>
                <div className={styles.leftColBottomText}>
                  <div>Cultural heritage</div>
                  <div>Environmental friendliness</div>
                </div>
              </div>
              <div className={styles.leftColBottomTexts}>
                <div className={styles.leftColCaption}>Philosophy</div>
                <div className={styles.leftColBottomText}>
                  <div>Harmony with nature, culture</div>
                  <div>Connecting the past and the future</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.colImage}>
            <Image src="/optimizer.png" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
