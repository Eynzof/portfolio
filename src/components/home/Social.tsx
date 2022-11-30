import React from 'react';
import styles from './home.module.css';

const Social = () => {
    return (
        <div className={styles.home__social}>
            <a className={styles['home__social-icon']} target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a className={styles['home__social-icon']} target="_blank">
                <i className="uil uil-dribbble"></i>
            </a>
            <a className={styles['home__social-icon']} target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
};

export default Social;
