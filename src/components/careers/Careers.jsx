import React from 'react'
import img from "../../assets/images/careers.jpeg"

import "./careers.scss"

const vacancies = [
    { title: "Production engineer", href: "/careers/production-engineer" },
    { title: "Quality specialist", href: "/careers/quality-specialist" },
    { title: "Manufacturing operator", href: "/careers/manufacturing-operator" },
]

const Careers = () => {
    return (
        <section
            className="careers"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="careers__overlay" />

            <div className="careers__container container">

                {/* Left text block */}
                <div className="careers__info">
                    <span className="careers__label">Careers</span>
                    <h2 className="careers__title">Build your future with us.</h2>
                    <p className="careers__subtitle">
                        Join a team that shapes the future of automotive interior solutions.
                    </p>

                    <div className="careers__slogan">
                        <span>Great people</span>
                        <span>Build</span>
                        <span>Brighter roads</span>
                    </div>
                </div>

                {/* Right vacancies list */}
                <div className="careers__vacancies">
                    <div className="careers__vacancies-header">
                        <span>Illustrative vacancies</span>
                        <a href="/careers" className="careers__all-link">
                            All vacancies
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
                                    View role
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
    )
}

export default Careers