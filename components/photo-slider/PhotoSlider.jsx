"use client";

import styles from "./photo-slider.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { joinClassNames } from "@/utils/join-class-names";

const PhotoSlider = ({ photos, className }) => {
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
        className={joinClassNames(isFullView ? styles.fullView : styles.photoSlider, className)}
        onWheel={handleWheel}
        onScroll={handleScroll}
        ref={ref}
      >
        {photos.map((photo) => (
          <div
            className={isFullView ? undefined : styles.photoWrapper}
            key={photo}
            onClick={() => setIsFullView((prevState) => !prevState)}
          >
            <img
              src={photo}
              alt={""}
              className={isFullView ? styles.fullViewPhoto : styles.photo}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoSlider;