import React from "react";
import styles from "./css/card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}> {props.title}</h1>
      <h1 className={styles.number} style={{ color: props.color }}>
        {props.number}{" "}
      </h1>
      <div
        className={styles.circle}
        style={{ backgroundColor: props.bg, color: props.color }}
      >
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </div>
  );
}
