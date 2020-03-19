import React from "react";
import Image from "./assets/404.png";
import styles from "./css/notfound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <img src={Image} alt="Not Found" />
    </div>
  );
}
