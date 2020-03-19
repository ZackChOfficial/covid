import React from "react";
import styles from "./css/mobnavbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

function MobNavBar({ history }) {
  return (
    <div className={styles.navbar}>
      <input type="checkbox" id="check" className={styles.check} />
      <label htmlFor="check" className={styles.checkbtn}>
        <FontAwesomeIcon icon={faBars} />
      </label>
      <ul className={styles.ul}>
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
              history.push("/map");
            }}
            to="/map"
            className={styles.link}
          >
            خريطة الاصابات
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(MobNavBar);
