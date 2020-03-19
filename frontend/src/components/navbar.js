import React from "react";
import styles from "./css/navbar.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function NavBar({history}) {
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
          <li className={styles.li} >
            <Link onClick={() => {history.push("/questions")}} className={styles.link}>
              الاسئلة الشائعة
            </Link>
          </li>
          <li className={styles.li}>
            <Link onClick={() => {history.push("/protection")}} className={styles.link}>
              طرق الوقاية
            </Link>
          </li>
          <li className={styles.li}>
            <Link onClick={() => {history.push("/home")}} className={styles.link}>
              الرئيسية
            </Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}

export default withRouter(NavBar);
