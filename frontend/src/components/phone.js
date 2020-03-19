import React from "react";
import styles from "./css/phone.module.css";
import { Row, Col } from "react-grid-system";
import PhoneCard from "./phonecard";

export default function Phone() {
  return (
    <div className={styles.phone}>
      <Row nogutter>
        <Col xs={12} sm={12} md={6} lg={6} xl={3}>
          <PhoneCard tele="0801004747" text="الو اليقظة الوبائية" />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={3}>
          <PhoneCard tele="190" text="الشرطة" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={3}>
          <PhoneCard tele="150" text="الاسعاف" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={3}>
          <PhoneCard tele="141" text="المساعدة الطبية الاستعجالية" />
        </Col>
      </Row>
    </div>
  );
}
