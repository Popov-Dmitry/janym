import styles from "./page.module.scss";
import ProductPreview from "@/components/product-preview/ProductPreview";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";
import { getPreviews } from "@/utils/db-requests-server";
import Package from "@/components/package/Package";
import React from "react";

export default async function Home() {
  const products = await getPreviews();

  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <div className={styles.hero}>
          <div className={styles.heroTitleWrapper}>
            <div className={styles.heroTitle}>FW’24</div>
            <div className={styles.heroSubtitle}>
              Janym reimagining Kazakh traditions through a modern lens. Each
              collection tells the story of the country, starting with a
              response to the Aral tragedy.
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
            Handcrafted from black leather and silver-tone metal, double wrap
            bracelet with a combination of ornaments.
          </div>
        </div>
      </div>

      <div className={styles.heroWrapperMobile}>
        <div className={styles.block}>
          <div className={styles.heroTitle}>FW’25</div>
          {/*<div className={styles.heroBottomText}>*/}
          {/*  We’re working to bring our net emissions to zero across our entire*/}
          {/*  carbon footprint.*/}
          {/*</div>*/}
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          // className={isFullView ? styles.fullViewMedia : styles.media}
          className={styles.heroImage}
        >
          <source src="/hero-video-mobile.mp4" type="video/mp4" />
        </video>
        {/*<img src="/hero-mobile.png" alt="" className={styles.heroImage} />*/}
        {/*<div className={styles.black} />*/}
      </div>

      <div className={styles.productsBlock} id="shop">
        <div className={joinClassNames(styles.blockTitle, styles.mobile)}>
          Collection
        </div>
        <div className={joinClassNames(styles.blockTitle, styles.desktop)}>
          Spring-Summer 25
        </div>
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
                The brand takes traditional Kazakh garments and ornaments as a
                basis and deconstructs them, preserving the cultural code.
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
                    <div>
                      We preserve traditions, because they give us the strength
                      and wisdom to build the future.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.colImageWrapper}>
            <div className={styles.colImage}>
              <Image
                src="/about-mobile.png"
                alt=""
                fill
                className={styles.mobile}
              />
              <Image
                src="/about-desktop.png"
                alt=""
                fill
                className={styles.desktop}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.blockFullHeightPr0} id="ecological">
          <div className={styles.twoCols}>
            <div className={styles.leftColWrapper}>
              <div className={styles.blockTitle}>
                Approach to garment Creation
              </div>
              <div className={styles.leftCol}>
                {/* <div
                  className={joinClassNames(
                    styles.leftColCaption,
                    styles.desktop
                  )}
                >
                  Fashion
                </div> */}
                <div className={styles.leftColDescription}>
                  The clothes are made from recycled fabric and dyed using
                  natural dyes such as root, charcoal, etc.
                </div>
                <div className={styles.leftColBottom}>
                  <div className={styles.leftColBottomTexts}>
                    <div className={styles.leftColCaption}>Materials</div>
                    <div className={styles.leftColBottomText}>
                      <div>Cultural heritage</div>
                      <div>Environmental friendliness</div>
                    </div>
                  </div>
                  <div className={styles.leftColBottomTexts}>
                    <div className={styles.leftColCaption}>Colors</div>
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
                The upcoming collection will be made entirely from recycled
                fabrics and dyed with natural ingredients.
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
              <Image
                src="/future-collection-mobile.png"
                alt=""
                fill
                className={styles.mobile}
              />
              <Image
                src="/future-collection-desktop.png"
                alt=""
                fill
                className={styles.desktop}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <div className={joinClassNames(styles.blockTitle)}>
          Package
        </div>
        <div className={styles.packageGrid}>
          <div className={joinClassNames("col-span-12 md:col-span-10")}>
            <div className={styles.packageDescription}>
              To reduce production waste, the same packaging is used
              for different garments, using recycled uncolored material. Only the information sticker differs.
            </div>
          </div>
        </div>
        <div className={joinClassNames(styles.packageInfo)}>
          <div className={joinClassNames(styles.leftColBottomTexts, "md:order-2 md:col-span-4")}>
            <div className={styles.leftColCaption}>Informational band</div>
            <div className={styles.leftColBottomText}>
              <div>Variety of informational band for different products.</div>
            </div>
          </div>
          <div className={joinClassNames(styles.leftColBottomTexts, "md:col-span-8")}>
            <div className={styles.leftColCaption}>Pack</div>
            <div className={styles.leftColBottomText}>
              <div>Recycled uncolored cardboard.</div>
              <div>
                Embossing is used to reduce ink consumption.
              </div>
            </div>
          </div>
        </div>
        <Package />
      </div>
    </div>
  );
}
