import React from 'react';
import './about.module.css';
import AboutImg from "../../../assets/about.jpg";
import CV from "../../../assets/John-Cv.pdf"

const About = () => {
    return (
        <div>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>

                <div className="about__container container grid">
                    <img src={AboutImg.src} alt="" className="about__img"/>
                    <div className="about__data"></div>
                </div>
            </section>
        </div>
    );
};

export default About;
