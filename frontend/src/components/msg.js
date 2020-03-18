import React from "react";
import styles from "./css/msg.module.css";

export default function Msg() {
  return (
    <div className={styles.msg}>
      هذا الموقع غير رسمي ولا يتبع لوزارة الصحة المغربية، بل هو مبادرة تعتمد
      المعطيات الرسمية لمحاربة الشائعات
    </div>
  );
}
