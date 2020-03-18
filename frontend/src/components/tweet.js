import React from "react";
import styles from "./css/tweet.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function EmptyBar() {
  return (
    <div className={styles.tweet}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="map_information"
        options={{ height: 350 }}
      />
    </div>
  );
}
