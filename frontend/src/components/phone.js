import React from "react";
import styles from "./css/phone.module.css";
import { Container, Row, Col } from "react-grid-system";
import PhoneCard from "./phonecard";

export default function Phone() {
  return (
    <div className={styles.phone}>
      <Row style={{ backgroundColor: "red", textAlign: "center" }}>
        <Col sm={3}>
          <PhoneCard />
        </Col>
        <Col sm={3}>One of three columns</Col>
        <Col sm={3}>One of three columns</Col>
        <Col sm={3}>One of three columns</Col>
        <Col sm={3}>One of three columns</Col>
        <Col sm={3}>One of three columns</Col>
        <Col sm={3}>One of three columns</Col>
        <Col sm={3}>One of three columns</Col>
      </Row>
    </div>
  );
}
