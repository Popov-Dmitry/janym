"use client";

import styles from "./checkbox.module.scss";
import React, { useState } from "react";

const Checkbox = ({ text, checked = false, onChange }) => {
  const [_checked, setChecked] = useState(checked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  }

  return (
    <label className={styles.container}>{text}
      <input type="checkbox" checked={_checked} onChange={handleChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;