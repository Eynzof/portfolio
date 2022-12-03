import React from "react";
import styles from "./home.module.css";

const Social = () => {
  return (
    <div className={styles.home__social}>
      <a className={styles.home__social__icon} href="/wechat.jpeg">
        <i className="uil uil-comment-medical"></i>
      </a>
      <a
        className={styles.home__social__icon}
        href="https://discordapp.com/users/869126597452627988"
      >
        <i className="uil uil-discord"></i>
      </a>
      <a className={styles.home__social__icon} href="https://github.com/Eynzof">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
