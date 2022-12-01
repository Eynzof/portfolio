import React from 'react';
import styles from "./skill.module.css";

const Backend = () => {
    return (
        <div className={styles.skills__content}>
            <h3 className={styles.skills__title}></h3>
            <div className={styles.skills__box}>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className="bx bx-badge-check"></i>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;
