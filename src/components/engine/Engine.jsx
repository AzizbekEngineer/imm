import React from "react";
import img1 from "../../assets/images/proiz1.webp";
import img2 from "../../assets/images/proiz2.webp";
import img3 from "../../assets/images/proiz3.webp";

import "./engine.scss";

const cards = [
  {
    image: img1,
    title: "Технологии и оборудование",
    description:
      "Современное оборудование для точного и эффективного производства.",
    href: "/company",
  },
  {
    image: img2,
    title: "Производственный процесс",
    description:
      "Оптимизированный процесс от проектирования до готового продукта.",
    href: "/news",
  },
  {
    image: img3,
    title: "Каталог продукции",
    description: "Широкий ассортимент компонентов автомобильного интерьера.",
    href: "/production",
  },
];

const Engine = () => {
  return (
    <section className="engine">
      <div className="engine__container container">
        <span className="engine__label">Наше производство</span>

        <h2 className="engine__title">От проектирования до производства.</h2>

        <p className="engine__subtitle">
          Комплексные производственные возможности, стабильное качество и
          внимание к потребностям клиентов.
        </p>

        <div className="engine__grid">
          {cards.map((card) => (
            <a href={card.href} className="engine__card" key={card.title}>
              <div className="engine__card-image-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  className="engine__card-image"
                />
              </div>

              <div className="engine__card-header">
                <h3 className="engine__card-title">{card.title}</h3>

                <svg
                  className="engine__card-arrow"
                  width="18"
                  height="18"
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
              </div>

              <p className="engine__card-description">{card.description}</p>
            </a>
          ))}
        </div>

        <a href="/production" className="engine__link">
          Наши производственные возможности
          <svg
            className="engine__link-icon"
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
      </div>
    </section>
  );
};

export default Engine;
