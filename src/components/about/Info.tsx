import React from "react";
import styles from "./about.module.css";

const Info = () => {
  return (
    <div className={`${styles.about__info} grid`}>
      <div className={styles.about__box}>
        <i className={`bx bx-award ${styles.about__icon}`}></i>
        <h3 className={styles.about__title}>经验</h3>
        <span className={styles.about__subtitle}>3 年开发经验</span>
      </div>
      <div className={styles.about__box}>
        <i className={`bx bx-briefcase-alt ${styles.about__icon}`}></i>
        <h3 className={styles.about__title}>完成的项目</h3>
        <span className={styles.about__subtitle}>20+</span>
      </div>
      <div className={styles.about__box}>
        <i className={`bx bx-support ${styles.about__icon}`}></i>
        <h3 className={styles.about__title}>支持</h3>
        <span className={styles.about__subtitle}>24/7 实时</span>
      </div>
    </div>
  );
};

export default Info;
