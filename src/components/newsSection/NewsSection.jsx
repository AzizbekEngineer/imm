import React from 'react'
import img from "../../assets/images/news.png"
import "./newsSection.scss"

const news = [
    {
        title: "A closer look at production",
        text: "Exploring our modern production facilities and processes.",
        href: "/news/production",
        image: img,
    },
    {
        title: "Meet the people behind the process",
        text: "Our team drives our progress every day.",
        href: "/news/team",
        image: img,
    },
    {
        title: "Our approach to quality",
        text: "How we ensure precision in every detail.",
        href: "/news/quality",
        image: img,
    },
]

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
)

const NewsSection = () => {
    return (
        <section className="news">
            <div className="news__container container">

                <div className="news__header">
                    <div className="news__heading">
                        <span className="news__label">Latest news</span>
                        <h2 className="news__title">Inside INTERIOR MEGA MAX</h2>
                    </div>

                    <a href="/news" className="news__all-link">
                        All news
                        <ArrowIcon size={16} />
                    </a>
                </div>

                <div className="news__grid">
                    {news.map((item) => (
                        <a href={item.href} className="news__card" key={item.title}>
                            <div className="news__image-wrap">
                                <img src={item.image} alt={item.title} className="news__image" />
                            </div>

                            <div className="news__content">
                                <div className="news__text">
                                    <h3 className="news__card-title">{item.title}</h3>
                                    <p className="news__card-text">{item.text}</p>
                                </div>

                                <ArrowIcon size={18} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsSection