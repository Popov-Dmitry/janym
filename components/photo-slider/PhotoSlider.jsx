"use client";

import styles from "./photo-slider.module.scss";
import React, { useRef, useState } from "react";
import { joinClassNames } from "@/utils/join-class-names";
import PhotoViewer from "@/components/photo-viewer/PhotoViewer";

const PhotoSlider = ({ photos, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpenViewer, setIsOpenViewer] = useState(false);
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

  return (
    <>
      <div
        className={joinClassNames(styles.photoSlider, className)}
        onWheel={handleWheel}
        onScroll={handleScroll}
        ref={ref}
      >
        {photos.map((photo) => (
          <div
            className={styles.photoWrapper}
            key={photo}
            onClick={() => setIsOpenViewer(true)}
          >
            <img
              src={photo}
              alt={""}
              className={styles.photo}
            />
          </div>
        ))}
      </div>
      <PhotoViewer
        photo={photos[currentIndex]}
        isOpen={isOpenViewer}
        setIsOpen={setIsOpenViewer}
      />
    </>
  );
};

export default PhotoSlider;