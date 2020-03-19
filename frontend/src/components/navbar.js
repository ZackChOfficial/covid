import React from "react";
import styles from "./css/navbar.module.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function NavBar({ history }) {
  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link
            onClick={() => {
              history.push("/map");
            }}
            className={styles.link}
            to="/map"
          >
            خريطة الاصابات
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            onClick={() => {
              history.push("/sources");
            }}
            to="/sources"
            className={styles.link}
          >
            مصادر مهمة
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            onClick={() => {
              history.push("/questions");
            }}
            to="/questions"
            className={styles.link}
          >
            الاسئلة الشائعة
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            onClick={() => {
              history.push("/protection");
            }}
            to="/protection"
            className={styles.link}
          >
            طرق الوقاية
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            onClick={() => {
              history.push("/home");
            }}
            to="/home"
            className={styles.link}
          >
            الرئيسية
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(NavBar);
