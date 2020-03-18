import React from "react";
import styles from "./css/mobnavbar.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function MobNavBar() {
  return (
    <div className={styles.navbar}>
      <Router>
        <input type="checkbox" id="check" className={styles.check} />
        <label for="check" className={styles.checkbtn}>
          <FontAwesomeIcon icon={faBars} />
        </label>
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
