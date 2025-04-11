"use client";

import styles from "./media-slider.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { joinClassNames } from "@/utils/join-class-names";
import useResponsive from "@/hooks/use-responsive";

const MediaSlider = ({ media, className }) => {
  const { isMobile } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const ref = useRef(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 5) {
      ref.current.scrollBy({ behavior: "smooth", left: ref.current.clientWidth });
    }

    if (touchStart - touchEnd < -5) {
      ref.current.scrollBy({ behavior: "smooth", left: -ref.current.clientWidth });
    }
  }

  const handleWheel = (event) => {
    if (isMobile) {
      if (ref.current && ref.current.scrollLeft === ref.current.clientWidth * (currentIndex)) {
        if (event.deltaX > 0) {
          ref.current.scrollBy({ behavior: "smooth", left: ref.current.clientWidth });
        } else {
          ref.current.scrollBy({ behavior: "smooth", left: -ref.current.clientWidth });
        }
      }
    } else {
      if (ref.current && ref.current.scrollTop === ref.current.clientHeight * (currentIndex)) {
        if (event.deltaY > 0) {
          ref.current.scrollBy({ behavior: "smooth", top: ref.current.clientHeight });
        } else {
          ref.current.scrollBy({ behavior: "smooth", top: -ref.current.clientHeight });
        }
      }
    }
  };

  const handleScroll = () => {
    if (isMobile) {
      if (ref.current) {
        setCurrentIndex(Math.ceil(ref.current.scrollLeft / ref.current.clientWidth));
      }
    } else {
      if (ref.current) {
        setCurrentIndex(Math.ceil(ref.current.scrollTop / ref.current.clientHeight));
      }
    }
  };

  useEffect(() => {
    if (isMobile) {
      if (ref.current && ref.current.scrollLeft === ref.current.clientWidth * (currentIndex)) {
        ref.current.scrollBy({ behavior: "instant", left: currentIndex });
      }
    } else {
      if (ref.current && ref.current.scrollTop === ref.current.clientHeight * (currentIndex)) {
        ref.current.scrollBy({ behavior: "instant", top: currentIndex });
      }
    }
  }, [isFullView]);

  return (
    <div className={isFullView ? styles.fullViewWrapper : undefined}>
      <div
        className={joinClassNames(isFullView ? styles.fullView : styles.mediaSlider, className)}
        onWheel={handleWheel}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={ref}
      >
        {media?.map((item) => (
          <div
            className={isFullView ? styles.fullViewMediaWrapper : styles.mediaWrapper}
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
      <div className={(isFullView || media?.length <= 1) ? "hidden" : styles.progress}>
        {media?.map((item, index) => (
          <div key={item.source} className={index === currentIndex ? styles.currentProgressItem : styles.progressItem} />
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;