import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

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
          <a className={styles.footer__social__link} href="/wechat.jpeg">
            <i className="uil uil-comment-medical"></i>
          </a>
          <a
            className={styles.footer__social__link}
            href="https://discordapp.com/users/869126597452627988"
          >
            <i className="uil uil-discord"></i>
          </a>
          <a
            className={styles.footer__social__link}
            href="https://github.com/Eynzof"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className={`${styles.footer__copy}`}>
          &#169; Enzo Li. All rights reserved
        </span>
        <div className={`${styles.footer__vercel}`}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.footer__link}`}
          >
            Powered by
            <Image
              className={`${styles.footer__vercel__logo}`}
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
