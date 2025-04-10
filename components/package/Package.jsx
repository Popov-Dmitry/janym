"use client";

import React, { useState } from "react";
import styles from "./package.module.scss";
import { joinClassNames } from "@/utils/join-class-names";
import { swap } from "@/utils/swap";

const initialState = {
  desktop: [
    {
      tag: "/pants.png",
      packageStyle: "col-span-8"
    },
    {
      tag: "/vest.png",
      packageStyle: joinClassNames("col-span-8")
    },
    {
      tag: "/shirt.png",
      packageStyle: joinClassNames("col-span-8")
    }
  ],
  mobile: [
    {
      tag: "/skirt-horizontal.png"
    },
    {
      tag: "/vest-horizontal.png"
    },
    {
      tag: "/shirt-horizontal.png"
    },
    {
      tag: "/pants-horizontal.png"
    }
  ]
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
            <div className="col-span-5" />
            {state.desktop.map((item, i) => (
              <>
                <div
                  key={item.tag}
                  className={`h-100% col-span-2`}
                >
                  <div className={`duration-150 hover:scale-105 h-100% `}>
                    <img
                      src={item.tag}
                      className={`cursor-pointer`}
                      onClick={() => setState({ ...state, desktop: swap(state.desktop, 0, i) })}
                    />
                  </div>
                </div>
                {i === 0 && <div />}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.packageMobileGrid}>
          <div className={styles.packageMobileGridLeft}>
            {state.mobile.filter((_, i) => i !== state.mobile.length - 1).map((item, i) => (
              <img
                key={item.tag}
                src={item.tag}
                onClick={() => setState({ ...state, mobile: swap(state.mobile, state.mobile.length - 1, i) })}
              />
            ))}
          </div>
          <div className={styles.packageMobileImage}>
            <img src="/package-vertical.png" className={state.mobile.packageStyle} />
            <img src={state.mobile[state.mobile.length - 1].tag} className={styles.packageMobileTag} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;