import React from "react";
import styles from "./css/home.module.css";
import Card from "../components/card";
import {
  faProcedures,
  faFirstAid,
  faCheckCircle,
  faDizzy
} from "@fortawesome/free-solid-svg-icons";
import Phone from "../components/phone";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.cardContainer}>
        <Card
          title="الحالات المؤكدة"
          number="38"
          icon={faProcedures}
          bg="#FEEBBF"
          color="#FF9F43"
        />
        <Card
          title="المتعافون"
          number="38"
          icon={faFirstAid}
          bg="#A2E6F4"
          color="#2E86DE"
        />
        <Card
          title="الحالات المستبعدة"
          number="173"
          icon={faCheckCircle}
          bg="#A9EDDB"
          color="#32BEA6"
        />
        <Card
          title="الوفيات"
          number="2"
          icon={faDizzy}
          bg="#BFC4CA"
          color="#4E5366"
        />
      </div>
      <div className={styles.tweets}>scs</div>
      <Phone />
    </div>
  );
}
