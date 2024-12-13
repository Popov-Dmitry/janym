import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" width={36} height={28} alt="logo" />
          <Image src="/janum.svg" width={75} height={28} alt="logo" />
        </Link>
      </div>
      <Link href="/#shop" className={styles.link}>Shop</Link>
      <Link href="/#about" className={styles.link}>About</Link>
      <Link href="/#ecological" className={styles.link}>Ecological</Link>
      <Link href="/bag" className={styles.link}>Bag</Link>
    </div>
  );
};

export default Header;