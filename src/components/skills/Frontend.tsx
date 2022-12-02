import React from 'react';
import styles from './skill.module.css'

const Frontend = () => {
    return (
        <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>前端</h3>
            <div className={styles.skills__box}>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>HTML</h3>
                            <span className={styles.skills__level}>初级</span>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>CSS</h3>
                            <span className={styles.skills__level}>中级</span>
                        </div>
                    </div>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>JavaScript</h3>
                            <span className={styles.skills__level}>中级</span>
                        </div>
                    </div>

                </div>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>Git</h3>
                            <span className={styles.skills__level}>中级</span>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>Bootstrap</h3>
                            <span className={styles.skills__level}>中级</span>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.skills__icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>React</h3>
                            <span className={styles.skills__level}>中级</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;
