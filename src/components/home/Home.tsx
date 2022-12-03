import React from "react";
import styles from "./home.module.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Image from "next/image";
import AboutImg from "../../../assets/profile.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className={`${styles.home__container} container grid`}>
        <div className={`${styles.home__content} grid`}>
          <Social />
          <Image
            src={AboutImg.src}
            alt=""
            className={styles.home__img}
            width={300}
            height={300}
          />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
