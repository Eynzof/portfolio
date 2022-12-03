import React, { useCallback, useEffect } from "react";
import styles from "./scrollup.module.css";

const ScrollUp = () => {
  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY >= 560) {
      const scrollUp = document.getElementById("scroll-up");
      // @ts-ignore
      scrollUp.classList.add("show__scroll");
    } else {
      const scrollUp = document.getElementById("scroll-up");
      // @ts-ignore
      scrollUp.classList.remove("show__scroll");
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
    <a href="#home" className={`${styles.scrollup}`} id="scroll-up">
      <i className={`${styles.scrollup__icon} uil uil-arrow-up`}></i>
    </a>
  );
};

export default ScrollUp;
