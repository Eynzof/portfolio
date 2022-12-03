import React from "react";
import styles from "./skill.module.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">技能</h2>
      <span className="section__subtitle">我的技术栈</span>
      <div className={`${styles.skills__container} container grid`}>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
