import React, { useCallback, useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#about");

  const onScroll = useCallback(() => {
    const header = document.getElementById("header");
    if (scrollY >= 80) {
      // @ts-ignore
      header.classList.add("scroll__header");
    } else {
      // @ts-ignore
      header.classList.remove("scroll__header");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      // @ts-ignore
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <span className={styles.nav__logo}>Enzo Li</span>
        </Link>
        <div
          className={
            Toggle
              ? `${styles.nav__menu} ${styles.show__menu}`
              : `${styles.nav__menu}`
          }
        >
          <ul className={`${styles.nav__list} grid`}>
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home"
                    ? `${styles.nav__link} ${styles.active__link}`
                    : `${styles.nav__link}`
                }
              >
                <i className={`uil uil-estate ${styles.nav__icon}`}></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? `${styles.nav__link} ${styles.active__link}`
                    : `${styles.nav__link}`
                }
              >
                <i className={`uil uil-user ${styles.nav__icon}`}></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? `${styles.nav__link} ${styles.active__link}`
                    : `${styles.nav__link}`
                }
              >
                <i className={`uil uil-file-alt ${styles.nav__icon}`}></i>{" "}
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? `${styles.nav__link} ${styles.active__link}`
                    : `${styles.nav__link}`
                }
              >
                <i className={`uil uil-briefcase ${styles.nav__icon}`}></i>{" "}
                Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? `${styles.nav__link} ${styles.active__link}`
                    : `${styles.nav__link}`
                }
              >
                <i className={`uil uil-scenery ${styles.nav__icon}`}></i>{" "}
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? `${styles.nav__link} ${styles.active__link}`
                    : `${styles.nav__link}`
                }
              >
                <i className={`uil uil-message ${styles.nav__icon}`}></i>{" "}
                Contact
              </a>
            </li>
          </ul>

          <i
            className={`uil uil-times ${styles.nav__close}`}
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className={styles.nav__toggle} onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
