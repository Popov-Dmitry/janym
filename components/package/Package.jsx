"use client";

import React, { useState } from "react";
import styles from "./package.module.scss";
import { joinClassNames } from "@/utils/join-class-names";
import { swap } from "@/utils/swap";

const initialState = {
  desktop: [
    {
      tag: "/pants.png",
      packageStyle: "col-span-3"
    },
    {
      tag: "/knitwear.png",
      packageStyle: joinClassNames("col-span-3", styles.packageRed)
    },
    {
      tag: "/shirt.png",
      packageStyle: joinClassNames("col-span-3", styles.packageGreen)
    }
  ],
  mobile: {
    tag: "/pants-m-horizontal.png"
  }
};

const Package = () => {
  const [state, setState] = useState(initialState);

  return (
    <>
      <div className={styles.desktop}>
        <div className={styles.packageImages}>
          <div className={joinClassNames(styles.packageGrid)}>
            <img src="/package.png" className={state.desktop[0].packageStyle} />
          </div>
          <div className={joinClassNames(styles.packageTags, styles.packageGrid)}>
            <div className="col-span-2" />
            {state.desktop.map((item, i) => (
              <img
                key={item.tag}
                src={item.tag}
                className={joinClassNames(
                  styles.packageImage,
                  i === state.desktop.length - 1 ? styles.packageLastCol : undefined
                )}
                onClick={() => setState({ ...state, desktop: swap(state.desktop, 0, i) })}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.packageMobileGrid}>
          <div className={styles.packageMobileGridLeft}>
            <img
              src="/pants-horizontal.png"
              onClick={() => setState({ ...state, mobile: { tag: "/pants-horizontal.png", packageStyle: styles.packageGreen } })}
            />
            <img
              src="/skirt-horizontal.png"
              onClick={() => setState({ ...state, mobile: { tag: "/skirt-horizontal.png", packageStyle: styles.packageRed } })}
            />
            <img
              src="/pants-m-horizontal.png"
              onClick={() => setState({ ...state, mobile: { tag: "/pants-m-horizontal.png", packageStyle: undefined } })}
            />
          </div>
          <div className={styles.packageMobileImage}>
            <img src="/package-vertical.png" className={state.mobile.packageStyle} />
            <img src={state.mobile.tag} className={styles.packageMobileTag} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;