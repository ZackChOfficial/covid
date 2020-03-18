import React from "react";
import styles from "./css/phonecard.module.css";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PhoneCard(props) {
  const click = () => {
    window.open("tel:" + props.tele);
  };
  return (
    <div className={styles.phonecard}>
      <FontAwesomeIcon className={styles.teleicon} icon={faPhoneSquare} />
      <span className={styles.text}>: {props.text}</span>
      <span className={styles.tele} onClick={click}>
        {props.tele}
      </span>
    </div>
  );
}
