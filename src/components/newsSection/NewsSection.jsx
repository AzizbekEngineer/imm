import React from "react";
import { Link } from "react-router-dom";
import { getNewsById } from "../../static/index";
import "./newsSection.scss";

const sectionItemIds = ["production", "team", "quality"];

const ArrowIcon = ({ size = 16 }) => (
  <svg
    className="news__icon"
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

const NewsSection = () => {
  const items = sectionItemIds
    .map((id) => getNewsById(id))
    .filter(Boolean);

  return (
    <section className="news">
      <div className="news__container container">
        <div className="news__header">
          <div className="news__heading">
            <span className="news__label">Последние новости</span>
            <h2 className="news__title">О компании INTERIOR MEGA MAX</h2>
          </div>

          <Link to="/news" className="news__all-link">
            Все новости
            <ArrowIcon size={16} />
          </Link>
        </div>

        <div className="news__grid">
          {items.map((item) => (
            <Link to={`/news/${item.id}`} className="news__card" key={item.id}>
              <div className="news__image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news__image"
                />
              </div>

              <div className="news__content">
                <div className="news__text">
                  <h3 className="news__card-title">{item.title}</h3>
                  <p className="news__card-text">{item.excerpt}</p>
                </div>

                <ArrowIcon size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;