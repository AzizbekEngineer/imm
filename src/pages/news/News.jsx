import React from "react";
import { Link } from "react-router-dom";
import { news } from "../../static/index";

import "./news.scss";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewsCard = ({ item }) => (
  <article className="news-block__card">
    <Link to={`/news/${item.id}`} className="news-block__media">
      <img src={item.image} alt={item.title} loading="lazy" />
      <span className="news-block__tag">{item.tag}</span>
    </Link>

    <div className="news-block__meta">
      <span className="news-block__date">{item.date}</span>
    </div>

    <h3 className="news-block__title">{item.title}</h3>

    <div className="news-block__footer">
      <Link to={`/news/${item.id}`} className="news-block__more">
        Подробнее
      </Link>
      <Link
        to={`/news/${item.id}`}
        className="news-block__arrow"
        aria-label={item.title}
      >
        <ArrowIcon />
      </Link>
    </div>
  </article>
);

const News = () => {
  return (
    <section className="news-block container">
      <div className="news-block__head">
        <h2 className="news-block__heading">
          Последние <span>новости</span>
        </h2>
      </div>

      <div className="news-block__grid">
        {news.map((item) => (
          <NewsCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default News;