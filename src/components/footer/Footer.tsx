import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className={`${styles.footer__container} container`}>
        <h1 className={`${styles.footer__title}`}>Enzo</h1>
        <ul className={`${styles.footer__list}`}>
          <li>
            <a href="#about" className={`${styles.footer__link}`}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className={`${styles.footer__link}`}>
              Project
            </a>
          </li>
        </ul>
        <div className={`${styles.footer__social}`}>
          <a className={styles.home__social__icon} target="_blank">
            <i className="uil uil-instagram"></i>
          </a>
          <a className={styles.home__social__icon} target="_blank">
            <i className="uil uil-dribbble"></i>
          </a>
          <a className={styles.home__social__icon} target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
