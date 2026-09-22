// import React, { useState } from "react"
// import "./news.scss"

// /* ------------------------------------------------------------------ */
// /*  Rasmlar: public/images/news/ papkasiga qo'ying                     */
// /*  (hero.jpg, production.jpg, team.jpg, quality.jpg, process.jpg).    */
// /*  Rasm topilmasa, karta to'q ko'k fon bilan ko'rinadi.               */
// /* ------------------------------------------------------------------ */
// const HERO_IMAGE = "/images/news/hero.jpg"

// const featured = {
//     id: 1,
//     title: "A closer look at production",
//     text: "Exploring our modern production facilities and the people who make it happen.",
//     image: "/images/news/production.jpg",
//     alt: "Production line inside the factory",
//     href: "/news/production",
// }

// const side = [
//     {
//         id: 2,
//         title: "Meet the people behind the process",
//         text: "Our team drives our progress every day.",
//         image: "/images/news/team.jpg",
//         alt: "Three team members in navy uniforms",
//         href: "/news/team",
//     },
//     {
//         id: 3,
//         title: "Our approach to quality",
//         text: "How we ensure precision in every detail.",
//         image: "/images/news/quality.jpg",
//         alt: "Gloved hand inspecting a metal component",
//         href: "/news/quality",
//     },
// ]

// const spotlight = {
//     id: 4,
//     title: "Behind the process",
//     text: "A closer look at the people, technology and daily effort that turn ideas into high-quality automotive interior components. From design to final inspection, it's a journey built on teamwork and a shared commitment to excellence.",
//     image: "/images/news/process.jpg",
//     alt: "Worker inspecting a component at a machine",
//     href: "/news/behind-the-process",
// }

// /* ---------- Kichik komponentlar ---------- */

// const ArrowIcon = () => (
//     <svg
//         className="news-page__arrow"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//     >
//         <path
//             d="M5 12H19M19 12L12 5M19 12L12 19"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </svg>
// )

// const TriangleMark = ({ className }) => (
//     <svg
//         className={className}
//         viewBox="0 0 200 200"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//     >
//         <polygon
//             points="200,0 200,200 0,200"
//             stroke="currentColor"
//             strokeWidth="5"
//             strokeLinejoin="round"
//         />
//         <polygon points="200,70 200,200 70,200" fill="currentColor" opacity="0.35" />
//     </svg>
// )

// const NewsCard = ({ item, variant, linkText = "Read article" }) => {
//     // rasm topilmasa, buzuq belgi o'rniga brend belgisi ko'rinadi
//     const [failed, setFailed] = useState(false)

//     return (
//         <article className={`news-page__card news-page__card--${variant}`}>
//             <div className="news-page__media">
//                 {failed ? (
//                     <TriangleMark className="news-page__placeholder" />
//                 ) : (
//                     <img
//                         src={item.image}
//                         alt={item.alt}
//                         loading="lazy"
//                         onError={() => setFailed(true)}
//                     />
//                 )}
//             </div>

//             <div className="news-page__content">
//                 <h2 className="news-page__card-title">{item.title}</h2>
//                 <p className="news-page__text">{item.text}</p>
//                 <a className="news-page__link" href={item.href}>
//                     {linkText}
//                     <ArrowIcon />
//                 </a>
//             </div>
//         </article>
//     )
// }

// /* ---------- Sahifa ---------- */

// const News = () => {
//     return (
//         <main className="news-page">

//             {/* Hero */}
//             <header
//                 className="news-page__hero"
//                 style={{ backgroundImage: `url(${HERO_IMAGE})` }}
//             >
//                 <TriangleMark className="news-page__hero-mark" />
//                 <div className="news-page__hero-inner container">
//                     <span className="news-page__hero-label">News &amp; Insights</span>
//                     <h1 className="news-page__hero-title">Inside INTERIOR MEGA MAX</h1>
//                     <p className="news-page__hero-text">
//                         Stories about our people, technology and progress.
//                     </p>
//                 </div>
//             </header>

//             {/* Maqolalar */}
//             <section className="news-page__body">
//                 <div className="news-page__grid container">
//                     <NewsCard item={featured} variant="featured" />

//                     <div className="news-page__side">
//                         {side.map((item) => (
//                             <NewsCard item={item} variant="side" key={item.id} />
//                         ))}
//                     </div>

//                     <NewsCard
//                         item={spotlight}
//                         variant="spotlight"
//                         linkText="Read full article"
//                     />
//                 </div>
//             </section>
//         </main>
//     )
// }

// export default News

import React from "react";
import img1 from "../../assets/images/company.png";
import img2 from "../../assets/images/company.png";
import img3 from "../../assets/images/company.png";

import "./news.scss";

const news = [
  {
    id: 1,
    tag: "News",
    date: "August 28, 2026",
    title: "We held an open house for our clients",
    image: img1,
    href: "/news/client-day",
  },
  {
    id: 2,
    tag: "News",
    date: "2026",
    title: "Automechanika 2026",
    image: img2,
    href: "/news/automechanika-2026",
  },
  {
    id: 3,
    tag: "News",
    date: "June 18, 2026",
    title: "A delegation visited our plant",
    image: img3,
    href: "/news/plant-visit",
  },
];

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
    <a href={item.href} className="news-block__media">
      <img src={item.image} alt={item.title} loading="lazy" />
      <span className="news-block__tag">{item.tag}</span>
    </a>

    <div className="news-block__meta">
      <span className="news-block__date">{item.date}</span>
    </div>

    <h3 className="news-block__title">{item.title}</h3>

    <div className="news-block__footer">
      <a href={item.href} className="news-block__more">
        Read more
      </a>
      <a href={item.href} className="news-block__arrow" aria-label={item.title}>
        <ArrowIcon />
      </a>
    </div>
  </article>
);

const News = () => {
  return (
    <section className="news-block container">
      <div className="news-block__head">
        <h2 className="news-block__heading">
          Latest <span>News</span>
        </h2>

        <a href="/news" className="news-block__all">
          All news
          <ArrowIcon />
        </a>
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
