import React, { useEffect, useRef, useState } from 'react'
import img from "../../assets/images/company.png"

import "./company.scss"

const HERO_IMAGE = "/images/company/hero.jpg"

const stats = [
    { end: 15, suffix: "+", label: "Years of experience" },
    { end: 300, suffix: "+", label: "Team members" },
    { end: 120, suffix: "+", label: "Products manufactured" },
    { end: 2, suffix: "", label: "Certified quality systems" },
]

const milestones = [
    { year: "2010", text: "Company founded with a clear vision." },
    { year: "2016", text: "Expanded production capabilities." },
    { year: "2024", text: "Continuing to grow together." },
]

const values = [
    {
        title: "Quality first",
        text: "Every part is checked against the standards our customers and certificates require.",
        icon: (
            <>
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </>
        ),
    },
    {
        title: "Modern technology",
        text: "We invest in equipment and processes that keep production precise and repeatable.",
        icon: (
            <>
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
            </>
        ),
    },
    {
        title: "Our people",
        text: "Skilled, motivated teams are the reason our components are made right the first time.",
        icon: (
            <>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </>
        ),
    },
    {
        title: "Continuous improvement",
        text: "We keep refining our processes to raise reliability with every production batch.",
        icon: (
            <>
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </>
        ),
    },
]

const process = [
    { title: "Design", text: "We study the part and agree on drawings and requirements." },
    { title: "Materials", text: "Raw materials are selected and inspected on arrival." },
    { title: "Production", text: "Components are manufactured on modern equipment." },
    { title: "Quality control", text: "Each batch is tested before it leaves the plant." },
    { title: "Delivery", text: "Orders are packed and delivered on the agreed schedule." },
]

const ArrowIcon = ({ className }) => (
    <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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

const TriangleMark = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <polygon
            points="200,0 200,200 0,200"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
        />
        <polygon
            points="200,70 200,200 70,200"
            fill="currentColor"
            opacity="0.35"
        />
    </svg>
)

const useCountUp = (end, duration = 1400) => {
    const ref = useRef(null)
    const [value, setValue] = useState(0)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setValue(end)
            return
        }

        let frame
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()

            const start = performance.now()
            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1)
                const eased = 1 - Math.pow(1 - progress, 3)
                setValue(Math.round(end * eased))
                if (progress < 1) frame = requestAnimationFrame(tick)
            }
            frame = requestAnimationFrame(tick)
        }, { threshold: 0.4 })

        observer.observe(el)

        return () => {
            observer.disconnect()
            cancelAnimationFrame(frame)
        }
    }, [end, duration])

    return [ref, value]
}

const StatItem = ({ end, suffix, label }) => {
    const [ref, value] = useCountUp(end)

    return (
        <div className="company__stat" ref={ref}>
            <span className="company__stat-value">
                {value}
                {suffix}
            </span>
            <span className="company__stat-label">{label}</span>
        </div>
    )
}


const Company = () => {
    return (
        <main className="company">

            {/* Hero */}
            <section
                className="company__hero"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="company__hero-inner container">
                    <span className="company__hero-label">About the company</span>
                    <h1 className="company__hero-title">
                        Built on people.
                        <br />
                        Driven by precision.
                    </h1>
                    <p className="company__hero-text">
                        We manufacture modern automotive interior components through
                        technology, quality and close collaboration with our customers.
                    </p>
                </div>
            </section>

            <section className="company__stats-wrap">
                <div className="container">
                    <div className="company__stats">
                        {stats.map((item) => (
                            <StatItem key={item.label} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="company__about">
                <div className="company__about-inner container">
                    <div className="company__mission">
                        <h2 className="company__heading">Our mission</h2>
                        <p className="company__mission-text">
                            To create value for our customers by manufacturing high-quality
                            automotive interior components, through continuous improvement,
                            modern technology and our people.
                        </p>
                    </div>

                    <div className="company__journey">
                        <h2 className="company__heading">Our journey</h2>
                        <ol className="company__timeline">
                            {milestones.map((item) => (
                                <li className="company__milestone" key={item.year}>
                                    <span className="company__dot" />
                                    <span className="company__year">{item.year}</span>
                                    <p className="company__milestone-text">{item.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="company__values">
                <div className="container">
                    <div className="company__section-head">
                        <h2 className="company__heading company__heading--lg">
                            What we stand for
                        </h2>
                        <p className="company__section-text">
                            Four principles guide how we work with our customers and with
                            each other.
                        </p>
                    </div>

                    <div className="company__values-grid">
                        {values.map((item) => (
                            <article className="company__value" key={item.title}>
                                <svg
                                    className="company__value-icon"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    {item.icon}
                                </svg>
                                <h3 className="company__value-title">{item.title}</h3>
                                <p className="company__value-text">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="company__process">
                <div className="container">
                    <div className="company__section-head">
                        <h2 className="company__heading company__heading--lg">
                            From drawing to delivery
                        </h2>
                        <p className="company__section-text">
                            Every order follows the same five steps, so the result stays
                            consistent from the first batch to the last.
                        </p>
                    </div>

                    <ol className="company__steps">
                        {process.map((item, index) => (
                            <li className="company__step" key={item.title}>
                                <span className="company__step-number">{index + 1}</span>
                                <div className="company__step-body">
                                    <h3 className="company__step-title">{item.title}</h3>
                                    <p className="company__step-text">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CTA */}
            <section className="company__cta">
                <TriangleMark className="company__cta-mark" />
                <div className="company__cta-inner container">
                    <div className="company__cta-info">
                        <h2 className="company__cta-title">Let's build what's next.</h2>
                        <p className="company__cta-text">
                            Stronger partnerships. A brighter future for your car.
                        </p>
                    </div>

                    <a href="/contact" className="company__cta-button">
                        Contact us
                        <ArrowIcon className="company__cta-icon" />
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Company