import React, { useEffect } from "react";
import styles from "./css/topBar.module.css";

export default function TopBar(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className={styles.topBar}>
      <h1 className={styles.left}>{props.date ? props.date.Date : ""} تحديث</h1>
      <h1 className={styles.right}>
        مستجدات فيروس كورونا بالمغرب <span className={styles.circle}> </span>
      </h1>
    </div>
  );
}
