import React from "react";
import img from "../../assets/images/export.webp";
import "./export.scss";

const Export = () => {
  return (
    <section className="export">
      <div className="export__media">
        <img
          src={img}
          alt="Сотрудник проверяет компонент автомобильного интерьера"
        />
      </div>

      <div className="export__content">
        <p className="export__eyebrow">О компании INTERIOR MEGA MAX</p>

        <h2 className="export__title">
          Основано на опыте.
          <br />
          Ориентировано на ваши потребности.
        </h2>

        <p className="export__text">
          INTERIOR MEGA MAX — производственная компания, специализирующаяся на
          высококачественных компонентах автомобильного интерьера. Мы объединяем
          современные технологии, опытных специалистов и клиентоориентированный
          подход, чтобы создавать ценность для светлого будущего.
        </p>

        <a className="export__link" href="/company">
          <span>О компании</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Export;
