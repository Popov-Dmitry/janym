import styles from "./photo-viewer.module.scss";

import React from "react";

const PhotoViewer = ({ photo, isOpen, setIsOpen }) => {
  if (!isOpen || !photo) {
    return null;
  }

  return (
    <div className={styles.container} onClick={() => setIsOpen(false)}>
      <img src={photo} className={styles.image} />
    </div>
  );
};

export default PhotoViewer;