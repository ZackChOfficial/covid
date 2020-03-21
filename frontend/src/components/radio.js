import React from "react";
import styles from "./css/radio.module.css";
import hitradio from "./assets/hitradio.png";

export default function Radio() {
  return (
    <div className={styles.radio}>
      <img src={hitradio} alt="hit radio log" />
      <audio controls>
        <source
          src="http://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
