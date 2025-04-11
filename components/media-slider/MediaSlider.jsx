"use client";

import styles from "./media-slider.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { joinClassNames } from "@/utils/join-class-names";
import useResponsive from "@/hooks/use-responsive";

const MediaSlider = ({ media, className }) => {
  const { isDesktop } = useResponsive();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(-1);
  const ref = useRef(null);
  const mediaRefs = useRef([]);
  const isScrolling = useRef(false);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    if (touchEnd !== -1) {
      if (diff > 5 && currentIndex + 1 < media?.length) {
        mediaRefs.current[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
        setCurrentIndex(currentIndex + 1);
      }

      if (diff < -5 && currentIndex > 0) {
        mediaRefs.current[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
        setCurrentIndex(currentIndex - 1);
      }
    }
    setTouchStart(0);
    setTouchEnd(-1);
  };

  const handleWheel = (event) => {
    if (!isScrolling.current) {
      isScrolling.current = true;
      if (event.deltaY > 0) {
        if (currentIndex + 1 < media?.length) {
          mediaRefs.current[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
        }
      } else {
        if (currentIndex > 0) {
          mediaRefs.current[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
        }
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    }
  };

  const handleScroll = () => {
    if (isDesktop) {
      if (ref.current) {
        setCurrentIndex(Math.ceil(ref.current.scrollTop / ref.current.clientHeight));
      }
    }
  };

  useEffect(() => {
    mediaRefs.current[currentIndex].scrollIntoView();
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
        {media?.map((item, i) => (
          <div
            className={isFullView ? styles.fullViewMediaWrapper : styles.mediaWrapper}
            key={item.source}
            onClick={() => setIsFullView((prevState) => !prevState)}
            ref={ref => (mediaRefs.current[i] = ref)}
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
          <div
            key={item.source}
            className={index === currentIndex ? styles.currentProgressItem : styles.progressItem}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;