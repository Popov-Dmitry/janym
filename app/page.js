import styles from "./page.module.scss";
import ProductPreview from "@/components/product-preview/ProductPreview";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";
import { getPreviews } from "@/utils/db-requests";

export default async function Home() {
  const products = await getPreviews();
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroTitle}>FW’24</div>
          <div className={styles.heroSubtitle}>Double Wrap Bracelet</div>
          <div className={styles.heroCaption}>
            <div>Janym Sol</div>
            <div>FW’24</div>
          </div>
        </div>
        <img src="/aral-sea-collection.png" alt="" className={styles.heroImage} />
        <div className={styles.heroBottom}>
          <div className={styles.heroBottomCaption}>
            <div>FW’</div>
            <div>24</div>
          </div>
          <div className={styles.heroBottomText}>
            &#34;A brand reinterpreting Kazakh traditions in a modern context. Each collection reflects the nature and
            history of Kazakhstan, with the first one responding to the tragedy of the Aral Sea.&#34;
          </div>
        </div>
      </div>

      <div className={styles.heroWrapperMobile}>
        <div className={styles.block}>
          <div className={styles.heroTitle}>FW’25</div>
          <div className={styles.heroBottomText}>
            We’re working to bring our net emissions to zero across our entire carbon footprint.
          </div>
        </div>
        <img src="/hero-mobile.png" alt="" className={styles.heroImage} />
      </div>

      <div className={styles.block} id="shop">
        <div className={styles.blockTitle}>Autumn-Winter 25</div>
        <div className={styles.products}>
          {products.map((product) => (
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

      <div>
        <div className={styles.ecological} id="ecological">
          <div className={styles.blockTitle}>Approach to garment Creation</div>
          <div className={styles.twoCols}>
            <div className={styles.leftCol}>
              <div className={joinClassNames(styles.leftColCaption, styles.desktop)}>
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
            <div className={joinClassNames(styles.colImage, styles.desktop)}>
              <Image src="/optimizer.png" alt="" fill />
            </div>
          </div>
        </div>
        <div className={joinClassNames(styles.colImage, styles.mobile)}>
          <Image src="/optimizer-mobile.png" alt="" fill />
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.packageGrid}>
          <div className={joinClassNames(styles.blockTitle, "col-span-2")}>
            Package
          </div>
          <div className={styles.desktop}>
            <div className={styles.caption}>AW</div>
            <div className={joinClassNames(styles.blockTitle, "mt-14px")}>
              <div>Saturday</div>
              <div>October 21st</div>
              <div>from 8pm until 1am</div>
            </div>
          </div>
          <div className={styles.desktop}>
            <div className={styles.caption}>Autumn Winter</div>
            <div className={joinClassNames(styles.blockTitle, "mt-14px")}>
              <div>Bene Bene</div>
              <div>Via Giovanni Battista</div>
              <div>20129</div>
            </div>
          </div>
          <div className={styles.desktop}>
            <div className={joinClassNames(styles.caption, styles.packageLastCol)}>
              Personal Investigation
            </div>
          </div>
        </div>
        <div className={styles.desktop}>
          <div className={joinClassNames(styles.packageGrid, "mt-117px")}>
            <div className={joinClassNames(styles.blockTitle, "col-span-2")}>
              One package without paint for different garments
            </div>
            <div className={styles.blockTitle}>1</div>
            <div className={styles.blockTitle}>2</div>
            <div className={joinClassNames(styles.blockTitle, styles.packageLastCol)}>3</div>
          </div>
        </div>
        <div className={joinClassNames(styles.blockTitle, styles.mobile, "mt-16px")}>
          One package without paint for different garments
        </div>
        <div className={joinClassNames(styles.leftCol, styles.mobile)}>
          <div className={joinClassNames(styles.leftColBottom)}>
            <div className={styles.leftColBottomTexts}>
              <div className={styles.leftColCaption}>Info</div>
              <div className={styles.leftColBottomText}>
                <div>Cultural heritage</div>
                <div>Environmental friendliness</div>
              </div>
            </div>
            <div className={styles.leftColBottomTexts}>
              <div className={styles.leftColCaption}>Pack</div>
              <div className={styles.leftColBottomText}>
                <div>Harmony with nature, culture</div>
                <div>Connecting the past and the future</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.desktop}>
          <div className={styles.packageImages}>
            <div className={joinClassNames(styles.packageGrid)}>
              <img src="/package.png" className={"col-span-3"} />
            </div>
            <div className={joinClassNames(styles.packageTags, styles.packageGrid)}>
              <div className={"col-span-2"} />
              <img src="/pants.png" className={styles.packageImage} />
              <img src="/knitwear.png" className={styles.packageImage} />
              <img src="/shirt.png" className={joinClassNames(styles.packageImage, styles.packageLastCol)} />
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.packageMobileGrid}>
            <div className={styles.packageMobileGridLeft}>
              <img src="/pants-horizontal.png" />
              <img src="/skirt-horizontal.png" />
              <img src="/pants-m-horizontal.png" />
            </div>
            <div className={styles.packageMobileImage}>
              <img src="/package-vertical.png" />
              <img src="/pants-m-horizontal.png" className={styles.packageMobileTag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
