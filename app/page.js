import styles from "./page.module.scss";
import ProductPreview from "@/components/product-preview/ProductPreview";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";
import { getPreviews } from "@/utils/db-requests-server";
import Package from "@/components/package/Package";

export default async function Home() {
  const products = await getPreviews();

  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroTitleWrapper}>
            <div className={styles.heroTitle}>FW’24</div>
            <div className={styles.heroSubtitle}>
              Janym reimagining Kazakh traditions through a modern lens. Each collection tells the story of the country,
              starting with
              a response to the Aral tragedy.
            </div>
          </div>
          {/*<div className={styles.heroCaption}>*/}
          {/*  <div>Janym Sol</div>*/}
          {/*  <div>FW’24</div>*/}
          {/*</div>*/}
        </div>
        <div className={styles.heroImage}>
          <Image src="/aral-sea-collection.png" alt="" fill />
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.heroBottomSpace} />
          <div className={styles.heroBottomCaption}>
            Handcrafted from black leather and silver-tone metal, double wrap bracelet with a combination of ornaments.
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
        <div className={styles.black} />
      </div>

      <div className={styles.productsBlock} id="shop">
        <div className={joinClassNames(styles.blockTitle, styles.mobile)}>Collection</div>
        <div className={joinClassNames(styles.blockTitle, styles.desktop)}>Spring-Summer 25</div>
        <div className={styles.products}>
          {products?.map((product) => (
            <ProductPreview key={product.title} {...product} />
          ))}
        </div>
      </div>

      <div className={styles.blockFullHeight} id="about">
        <div className={styles.twoCols}>
          <div className={styles.leftColWrapper}>
            <div className={styles.blockTitle}>About Janym</div>
            <div className={styles.leftCol}>
              <div className={styles.leftColDescription}>
                The brand takes traditional Kazakh garments and ornaments as a basis and deconstructs them, preserving
                the cultural code.
              </div>
              <div className={styles.leftColBottom}>
                <div className={styles.leftColBottomTexts}>
                  <div className={styles.leftColCaption}>Values</div>
                  <div className={styles.leftColBottomText}>
                    <div>Conservation of culture and nature</div>
                    <div>Supporting local artisans</div>
                    <div>Adaptability and practicality</div>
                  </div>
                </div>
                <div className={styles.leftColBottomTexts}>
                  <div className={styles.leftColCaption}>Philosophy</div>
                  <div className={styles.leftColBottomText}>
                    <div>We preserve traditions, because they give us the strength and wisdom to build the future.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.colImageWrapper}>
            <div className={styles.colImage}>
              <Image src="/about-mobile.png" alt="" fill className={styles.mobile} />
              <Image src="/about-desktop.png" alt="" fill className={styles.desktop} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.blockFullHeightPr0} id="ecological">
          <div className={styles.twoCols}>
            <div className={styles.leftColWrapper}>
              <div className={styles.blockTitle}>Approach to garment Creation</div>
              <div className={styles.leftCol}>
                <div className={joinClassNames(styles.leftColCaption, styles.desktop)}>
                  Fashion
                </div>
                <div className={styles.leftColDescription}>
                  The clothes are made from recycled fabric and dyed using natural dyes such as root, charcoal, etc.
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

      <div className={styles.blockFullHeightPr0}>
        <div className={styles.twoCols}>
          <div className={styles.leftColWrapper}>
            <div className={styles.blockTitle}>Our future collection</div>
            <div className={styles.leftCol}>
              <div className={styles.leftColDescription}>
                The upcoming collection will be made entirely from recycled fabrics and dyed with natural ingredients.
              </div>
              <div className={styles.leftColBottom}>
                <div className={styles.leftColBottomTexts}>
                  <div className={styles.leftColCaption}>Clothing</div>
                  <div className={styles.leftColBottomText}>
                    <div>Made from recycled natural fabric</div>
                  </div>
                </div>
                <div className={styles.leftColBottomTexts}>
                  <div className={styles.leftColCaption}>Accessories</div>
                  <div className={styles.leftColBottomText}>
                    <div>Made of sterling silver and leather</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.colImageWrapper}>
            <div className={styles.colImage}>
              <Image src="/future-collection-mobile.png" alt="" fill className={styles.mobile} />
              <Image src="/future-collection-desktop.png" alt="" fill className={styles.desktop} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.packageGrid}>
          <div className={joinClassNames(styles.blockTitle, "col-span-5")}>
            Package
          </div>
          <div className={joinClassNames(styles.desktop, "col-span-3")}>
            <div className={styles.caption}>AW</div>
            <div className={joinClassNames(styles.packageColCaption, "mt-20px")}>
              <div>Saturday</div>
              <div>October 21st</div>
              <div>from 8pm until 1am</div>
            </div>
          </div>
          <div className={joinClassNames(styles.desktop, "col-span-2")}>
            <div className={styles.caption}>Autumn Winter</div>
            <div className={joinClassNames(styles.packageColCaption, "mt-20px")}>
              <div>Bene Bene</div>
              <div>Via Giovanni Battista</div>
              <div>20129</div>
            </div>
          </div>
          <div className={joinClassNames(styles.desktop, "col-span-2")}>
            <div className={styles.caption}>
              Personal Investigation
            </div>
          </div>
        </div>
        <div className={styles.desktop}>
          <div className={joinClassNames(styles.packageGrid, "mt-117px")}>
            <div className={joinClassNames(styles.packageColCaption, "col-span-5")}>
              One package without paint for different garments
            </div>
            <div className={joinClassNames(styles.packageColCaption, "col-span-3")}>1</div>
            <div className={joinClassNames(styles.packageColCaption, "col-span-2")}>2</div>
            <div className={joinClassNames(styles.packageColCaption, "col-span-2")}>3</div>
          </div>
        </div>
        <div className={joinClassNames(styles.blockTitle, styles.mobile)}>
          To reduce production waste, the same packaging is used for different garments, using recycled uncolored
          material. Only the information sticker differs
        </div>
        <div className={joinClassNames(styles.leftCol, styles.mobile)}>
          <div className={joinClassNames(styles.leftColBottom)}>
            <div className={styles.leftColBottomTexts}>
              <div className={styles.leftColCaption}>Info sticker</div>
              <div className={styles.leftColBottomText}>
                <div>Made of recycled cardboard, natural coloring applied. 100% recyclable</div>
              </div>
            </div>
            <div className={styles.leftColBottomTexts}>
              <div className={styles.leftColCaption}>Pack</div>
              <div className={styles.leftColBottomText}>
                <div>Recycled uncolored cardboard.</div>
                <div>Embossing is used to reduce ink consumption</div>
              </div>
            </div>
          </div>
        </div>
        <Package />
      </div>
    </div>
  );
}
