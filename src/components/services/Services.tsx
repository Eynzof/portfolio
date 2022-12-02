import React from 'react';
import styles from './services.module.css';

const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">雇佣我</h2>
            <span className="section__subtitle">我提供的服务</span>
            <div className={`${styles.services__container} container grid`}>
                <div className={styles.services__content}>
                    <div className={styles.services__block}>
                        <i className={`uil uil-web-grid ${styles.services__icon}`}>
                        </i>
                        <h3 className={styles.services__title}>
                            产品 <br/> 设计师
                        </h3>
                    </div>
                    <span className={styles.services__button}>进一步了解 <i
                        className={`uil uil-arrow-right ${styles.services__button__icon}`}></i></span>

                    <div className={styles.services__modal}>
                        <div className={styles.services__modal__content}>
                            <i className={`uil uil-times ${styles.services__modal__close}`}></i>
                            <h3 className={styles.services__modal__title}>产品设计师</h3>
                            <p className={styles.services__modal__description}>Service with more than 3 years of
                                experience.</p>
                            <ul className={`${styles.services__modal__services} grid`}>
                                <li className={`${styles.services__modal__service}`}>
                                    <i className={`${styles.services__modal__icon} uil uil-check-circle`}></i>
                                    <p className={`${styles.services__modal__info}`}>I develop the user interface.</p>
                                </li>

                                <li className={`${styles.services__modal__service}`}>
                                    <i className={`${styles.services__modal__icon} uil uil-check-circle`}></i>
                                    <p className={`${styles.services__modal__info}`}>I develop the user interface.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.services__content}>
                    <div className={styles.services__block}>
                        <i className={`uil uil-arrow ${styles.services__icon}`}>

                        </i>
                        <h3 className={styles.services__title}>
                            UI/UX <br/> 设计师
                        </h3>
                    </div>
                    <span className={styles.services__button}>进一步了解 <i
                        className={`uil uil-arrow-right ${styles.services__button__icon}`}></i></span>

                    <div className={styles.services__modal}>
                        <div className={styles.services__modal__content}>
                            <i className={`uil uil-times ${styles.services__modal__close}`}></i>
                            <h3 className={styles.services__modal__title}>视觉设计师</h3>
                            <p className={styles.services__modal__description}>Service with more than 3 years of
                                experience.</p>
                            <ul className={`${styles.services__modal__services} grid`}>
                                <li className={`${styles.services__modal__service}`}>
                                    <i className={`${styles.services__modal__icon} uil uil-check-circle`}></i>
                                    <p className={`${styles.services__modal__info}`}>I develop the user interface.</p>
                                </li>

                                <li className={`${styles.services__modal__service}`}>
                                    <i className={`${styles.services__modal__icon} uil uil-check-circle`}></i>
                                    <p className={`${styles.services__modal__info}`}>I develop the user interface.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.services__content}>
                    <div className={styles.services__block}>
                        <i className={`uil uil-edit ${styles.services__icon}`}>

                        </i>
                        <h3 className={styles.services__title}>
                            视觉 <br/> 设计师
                        </h3>
                    </div>
                    <span className={styles.services__button}>进一步了解 <i
                        className={`uil uil-arrow-right ${styles.services__button__icon}`}></i></span>

                    <div className={styles.services__modal}>
                        <div className={styles.services__modal__content}>
                            <i className={`uil uil-times ${styles.services__modal__close}`}></i>
                            <h3 className={styles.services__modal__title}>视觉设计师</h3>
                            <p className={styles.services__modal__description}>Service with more than 3 years of
                                experience.</p>
                            <ul className={`${styles.services__modal__services} grid`}>
                                <li className={`${styles.services__modal__service}`}>
                                    <i className={`${styles.services__modal__icon} uil uil-check-circle`}></i>
                                    <p className={`${styles.services__modal__info}`}>I develop the user interface.</p>
                                </li>

                                <li className={`${styles.services__modal__service}`}>
                                    <i className={`${styles.services__modal__icon} uil uil-check-circle`}></i>
                                    <p className={`${styles.services__modal__info}`}>I develop the user interface.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
