"use client";

import styles from "./media-slider.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { joinClassNames } from "@/utils/join-class-names";

const MediaSlider = ({ media, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);
  const ref = useRef(null);

  const handleWheel = (event) => {
    if (ref.current && ref.current.scrollTop === ref.current.clientHeight * (currentIndex)) {
      if (event.deltaY > 0) {
        ref.current.scrollBy({ behavior: "smooth", top: ref.current.clientHeight });
      } else {
        ref.current.scrollBy({ behavior: "smooth", top: -ref.current.clientHeight });
      }
    }
  };

  const handleScroll = () => {
    if (ref.current) {
      setCurrentIndex(Math.ceil(ref.current.scrollTop / ref.current.clientHeight));
    }
  };

  useEffect(() => {
    if (ref.current && ref.current.scrollTop === ref.current.clientHeight * (currentIndex)) {
      ref.current.scrollBy({ behavior: "instant", top: currentIndex });
    }

  }, [isFullView]);

  return (
    <>
      <div
        className={joinClassNames(isFullView ? styles.fullView : styles.mediaSlider, className)}
        onWheel={handleWheel}
        onScroll={handleScroll}
        ref={ref}
      >
        {media?.map((item) => (
          <div
            className={isFullView ? undefined : styles.mediaWrapper}
            key={item.source}
            onClick={() => setIsFullView((prevState) => !prevState)}
          >
            {item.type === "image" ? (
              <img
                src={item.source}
                alt=""
                className={isFullView ? styles.fullViewMedia : styles.media}
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className={isFullView ? styles.fullViewMedia : styles.media}
              >
                <source src={item.source} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MediaSlider;