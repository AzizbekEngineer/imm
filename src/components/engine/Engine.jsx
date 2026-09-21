import React from 'react'
import img1 from "../../assets/images/engine.png"
import img2 from "../../assets/images/engine.png"
import img3 from "../../assets/images/engine.png"

import "./engine.scss"

const cards = [
    {
        image: img1,
        title: "Technology & equipment",
        description: "Modern machinery for precise and efficient manufacturing.",
        href: "/production/technology",
    },
    {
        image: img2,
        title: "Production process",
        description: "A streamlined process from design to final product.",
        href: "/production/process",
    },
    {
        image: img3,
        title: "Product catalog",
        description: "A wide range of automotive interior components.",
        href: "/production/catalog",
    },
]

const Engine = () => {
    return (
        <section className="engine">
            <div className="engine__container">
                <span className="engine__label">Our production</span>
                <h2 className="engine__title">From engineering to production.</h2>
                <p className="engine__subtitle">
                    Integrated capabilities, consistent quality and a focus on customer needs.
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
                    Explore our capabilities
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
    )
}

export default Engine