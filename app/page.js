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

      <div className={styles.blockFullHeightPr0} id="about">
        <div className={styles.twoCols}>
          <div className={styles.leftColWrapper}>
            <div className={styles.blockTitle}>About Janym</div>
            <div className={styles.leftCol}>
              <div className={styles.leftColDescription}>
                Janym creates clothing, jewelry by reinterpreting traditional Kazakh patterns and cuts, with all pieces
                crafted sustainably.
              </div>
              <div className={styles.leftColBottom}>
                <div className={styles.leftColBottomTexts}>
                  <div className={styles.leftColCaption}>Values</div>
                  <div className={styles.leftColBottomText}>
                    <div>Cultural heritage</div>
                    <div>Innovation in tradition</div>
                    <div>Eco-friendliness</div>
                    <div>Social responsibility</div>
                  </div>
                </div>
                <div className={styles.leftColBottomTexts}>
                  <div className={styles.leftColCaption}>Philosophy</div>
                  <div className={styles.leftColBottomText}>
                    <div>
                      Harmonizing nature and modernity while preserving cultural heritage.
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
        <div className={styles.blockFullHeight} id="ecological">
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
                  Our clothing, made from recycled fabrics and dyed with natural dyes, reduces the carbon footprint and
                  supports eco-friendly production.
                </div>
                <div className={styles.leftColBottom}>
                  <div className={styles.leftColCaption}>Materials</div>
                  <div className={styles.leftColCaption}>Use of vegetable dyes and acids</div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-x-20px mt-20px">
                    <div className={styles.leftColBottomText}>
                      <div>Linen</div>
                      <div>Cotton</div>
                      <div>Silk</div>
                    </div>
                    <div className={styles.leftColBottomText}>
                      <div>The desired shade is achieved either with plant-based dyes or through acid treatment.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={joinClassNames(styles.colImage, styles.desktop)}>
              <Image src="/approach-desktop.png" alt="" fill className="py-110px px-90px" />
            </div>
          </div>
        </div>
        <div className={joinClassNames(styles.colImage, styles.mobile)}>
          <Image src="/approach-mobile.png" alt="" fill />
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
