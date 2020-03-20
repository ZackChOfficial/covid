import React from "react";
import styles from "./css/topBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <h1 className={styles.right}>
        مستجدات فيروس كورونا بالمغرب <span className={styles.circle}> </span>
      </h1>
    </div>
  );
}
