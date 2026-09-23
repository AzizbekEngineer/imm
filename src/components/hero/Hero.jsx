import React from "react";
import img from "../../assets/images/hero.webp";

import "./hero.scss";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero__overlay" />

      <div className="hero__container container">
        <span className="hero__brand">INTERIOR MEGA MAX</span>

        <h1 className="hero__title">
          Точное производство.
          <br />
          Создано для будущего.
        </h1>

        <p className="hero__subtitle">Светлое будущее вашего автомобиля.</p>

        <div className="hero__actions">
          <a href="/production" className="hero__btn hero__btn--primary">
            Наше производство
            <svg
              className="hero__btn-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a href="/quality" className="hero__btn hero__btn--outline">
            Запросить расчёт стоимости
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
