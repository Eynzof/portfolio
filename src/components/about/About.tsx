import React from 'react';
import './about.module.css';
import AboutImg from "../../../assets/about.jpg";

const About = () => {
    return (
        <div>
            <section className="about section" id="about">
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>

                <div className="about__container container grid"></div>
            </section>
        </div>
    );
};

export default About;
