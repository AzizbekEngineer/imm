import React from "react";
import { Link, useParams } from "react-router-dom";
import { getNewsById } from "../../static/index";

import "./newsDetail.scss";

const NewsDetail = () => {
    const { id } = useParams();
    const item = getNewsById(id);

    if (!item) {
        return (
            <section className="news-detail container">
                <p className="news-detail__not-found">Новость не найдена.</p>
                <Link to="/news" className="news-detail__back">
                    ← Все новости
                </Link>
            </section>
        );
    }

    return (
        <section className="news-detail container">
            <Link to="/news" className="news-detail__back">
                ← Все новости
            </Link>

            <div className="news-detail__head">
                <h1 className="news-detail__title">{item.title}</h1>
            </div>

            <div className="news-detail__media">
                <img src={item.image} alt={item.title} />
            </div>

            <div className="news-detail__body">
                <p>{item.content}</p>
            </div>
        </section>
    );
};

export default NewsDetail;