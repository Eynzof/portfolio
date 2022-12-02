import React, { useState } from "react";
import "./qualification.module.css";
import styles from "./qualification.module.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">工作经验</h2>
      <span className="section__subtitle">个人历程</span>

      <div className={`${styles.qualification__container} container`}>
        <div className={`${styles.qualification__tabs}`}>
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? `${styles.qualification__button} ${styles.qualification__active} button__flex`
                : `${styles.qualification__button} button__flex`
            }
          >
            <i
              className={`${styles.qualification__icon} uil uil-graduation-cap`}
            ></i>{" "}
            经验
          </div>

          <div
            onClick={() => toggleTab(2)}
            className={
              toggleState === 2
                ? `${styles.qualification__button} ${styles.qualification__active} button__flex`
                : `${styles.qualification__button} button__flex`
            }
          >
            <i
              className={`${styles.qualification__icon} uil uil-briefcase-alt`}
            ></i>{" "}
            教育
          </div>
        </div>

        <div className={`${styles.qualification__sections}`}>
          <div
            className={
              toggleState === 1
                ? `${styles.qualification__content} ${styles.qualification__content__active}`
                : `${styles.qualification__content}`
            }
          >
            <div className={`${styles.qualification__data}`}>
              <div>
                <h3 className={`${styles.qualification__title}`}>全栈工程师</h3>
                <span className={`${styles.qualification__subtitle}`}>
                  自由职业
                </span>
                <div className={`${styles.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>

              <div className={`${styles.qualification__lr}`}>
                <span className={`${styles.qualification__rounder}`}></span>
                <span className={`${styles.qualification__line}`}></span>
              </div>
            </div>

            <div className={`${styles.qualification__data}`}>
              <div></div>

              <div className={`${styles.qualification__lr}`}>
                <span className={`${styles.qualification__rounder}`}></span>
                <span className={`${styles.qualification__line}`}></span>
              </div>

              <div>
                <h3 className={`${styles.qualification__title}`}>游戏制作人</h3>
                <span className={`${styles.qualification__subtitle}`}>
                  欢聚时代 - 多玩
                </span>
                <div className={`${styles.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>
            </div>

            <div className={`${styles.qualification__data}`}>
              <div>
                <h3 className={`${styles.qualification__title}`}>技术总监</h3>
                <span className={`${styles.qualification__subtitle}`}>
                  Masonic 游戏制作团队
                </span>
                <div className={`${styles.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i> 2014 - present
                </div>
              </div>

              <div className={`${styles.qualification__lr}`}>
                <span className={`${styles.qualification__rounder}`}></span>
                <span className={`${styles.qualification__line}`}></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? `${styles.qualification__content} ${styles.qualification__content__active}`
                : `${styles.qualification__content}`
            }
          >
            <div className={`${styles.qualification__data}`}>
              <div>
                <h3 className={`${styles.qualification__title}`}>本科在读</h3>
                <span className={`${styles.qualification__subtitle}`}>
                  信息管理与信息系统专业
                </span>
                <div className={`${styles.qualification__calendar}`}>
                  <i className="uil uil-calendar-alt"></i> 2021 - present
                </div>
              </div>

              <div className={`${styles.qualification__lr}`}>
                <span className={`${styles.qualification__rounder}`}></span>
                <span className={`${styles.qualification__line}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
