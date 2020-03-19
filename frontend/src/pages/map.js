import React from "react";
import Styles from "./css/map.module.css";

export default function Map() {
  return (
    <div className={Styles.mapcontainer}>
      <iframe
        width="90"
        height="400px"
        title="map"
        src="https://mehdibo.github.io/coronamap-ma/"
        className={Styles.map}
      ></iframe>
    </div>
  );
}
