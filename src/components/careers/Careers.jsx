import React from "react";
import img from "../../assets/images/careers.jpeg";

import "./careers.scss";

const vacancies = [
  { title: "Инженер производства", href: "/careers/production-engineer" },
  { title: "Специалист по качеству", href: "/careers/quality-specialist" },
  { title: "Оператор производства", href: "/careers/manufacturing-operator" },
];

const Careers = () => {
  return (
    <section className="careers" style={{ backgroundImage: `url(${img})` }}>
      <div className="careers__overlay" />

      <div className="careers__container container">
        {/* Левый текстовый блок */}
        <div className="careers__info">
          <span className="careers__label">Вакансии</span>

          <h2 className="careers__title">
            Постройте своё будущее вместе с нами.
          </h2>

          <p className="careers__subtitle">
            Присоединяйтесь к команде, которая формирует будущее решений для
            автомобильных интерьеров.
          </p>

          <div className="careers__slogan">
            <span>Отличные специалисты</span>
            <span>Создают</span>
            <span>Светлое будущее</span>
          </div>
        </div>

        {/* Правый список вакансий */}
        <div className="careers__vacancies">
          <div className="careers__vacancies-header">
            <span>Примеры вакансий</span>

            <a href="/careers" className="careers__all-link">
              Все вакансии
              <svg
                className="careers__icon"
                width="14"
                height="14"
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
          </div>

          <ul className="careers__vacancy-list">
            {vacancies.map((vacancy) => (
              <li className="careers__vacancy-item" key={vacancy.title}>
                <span className="careers__vacancy-title">{vacancy.title}</span>

                <svg
                  className="careers__icon careers__icon--arrow"
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

                <a href={vacancy.href} className="careers__view-link">
                  Подробнее
                  <svg
                    className="careers__icon"
                    width="14"
                    height="14"
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Careers;
