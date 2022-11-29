import React from 'react';
import styles from './header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link href="/">
                    <span className={styles.nav__logo}>Smith</span>
                </Link>
                <div className="nav__menu">
                    <ul className={`${styles.nav__list} grid`}>
                        <li className="nav__item">
                            <Link href="#home" className={`${styles.nav__link} ${styles.active__link}`}>
                                <i className={`uil uil-estate ${styles.nav__icon}`}></i> Home
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link href="#about" className={styles.nav__link}>
                                <i className={`uil uil-user ${styles.nav__icon}`}></i> About
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link href="#skills" className={styles.nav__link}>
                                <i className={`uil uil-file-alt ${styles.nav__icon}`}></i> Skills
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link href="#services" className={styles.nav__link}>
                                <i className={`uil uil-briefcase ${styles.nav__icon}`}></i> Services
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link href="#portfolio" className={styles.nav__link}>
                                <i className={`uil uil-scenery ${styles.nav__icon}`}></i> Portfolio
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link href="#contact" className={styles.nav__link}>
                                <i className={`uil uil-message ${styles.nav__icon}`}></i> Contact
                            </Link>
                        </li>
                    </ul>


                    <i className={`uil uil-times ${styles.nav__close}`}></i>

                    <div className={styles.nav__toggle}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;