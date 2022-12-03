import React from "react";
import styles from "./skill.module.css";

const Backend = () => {
  return (
    <div className={styles.skills__content}>
      <h3 className={styles.skills__title}>后端</h3>
      <div className={styles.skills__box}>
        <div className={styles.skills__group}>
          <div className={styles.skills__data}>
            <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
            <div>
              <h3 className={styles.skills__name}>PHP</h3>
              <span className={styles.skills__level}>初级</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
            <div>
              <h3 className={styles.skills__name}>Node</h3>
              <span className={styles.skills__level}>初级</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
            <div>
              <h3 className={styles.skills__name}>Python</h3>
              <span className={styles.skills__level}>中级</span>
            </div>
          </div>
        </div>
        <div className={styles.skills__group}>
          <div className={styles.skills__data}>
            <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
            <div>
              <h3 className={styles.skills__name}>MySQL</h3>
              <span className={styles.skills__level}>中级</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skills__name}>Firebase</h3>
              <span className={styles.skills__level}>中级</span>
            </div>
          </div>
          <div className={styles.skills__data}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skills__name}>Java</h3>
              <span className={styles.skills__level}>中级</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
