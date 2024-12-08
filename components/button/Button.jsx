import React from "react";
import styles from "./button.module.scss";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";

const Button = ({
  text,
  font = "beVietnamPro",
  type,
  disabled,
  onClick,
  className,
  href,
  newTab
}) => {
  if (href) {
    return (
      <Link
        className={joinClassNames(styles.button, styles[font], className)}
        href={href}
        target={newTab ? "_blank" : undefined}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={joinClassNames(styles.button, styles[font], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;