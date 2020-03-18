import React from "react";
import styles from "./css/navbar.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Router>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              خريطة الاصابات
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              مصادر مهمة
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              الاسئلة الشائعة
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/about" className={styles.link}>
              طرق الوقاية
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboard" className={styles.link}>
              الرئيسية
            </Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}
