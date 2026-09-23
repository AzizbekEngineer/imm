import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/careers.jpeg";
import { vacancies } from "../../static/index";

import "./careers.scss";

const ArrowIcon = ({ className, size = 14 }) => (
  <svg
    className={className}
    width={size}
    height={size}
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
);

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
        </div>

        <div className="careers__vacancies">
          <div className="careers__vacancies-header">
            <span>Примеры вакансий</span>

            <Link to="/vacancies" className="careers__all-link">
              Все вакансии
              <ArrowIcon className="careers__icon" size={14} />
            </Link>
          </div>

          <ul className="careers__vacancy-list">
            {vacancies.map((vacancy) => (
              <li className="careers__vacancy-item" key={vacancy.id}>
                <span className="careers__vacancy-title">{vacancy.title}</span>
                <Link to={`/vacancies/${vacancy.id}`} className="careers__view-link">
                  Подробнее
                  <ArrowIcon className="careers__icon" size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Careers;