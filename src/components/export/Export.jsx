import React from "react";
import img from "../../assets/images/export.jpeg";
import "./export.scss";

const Export = () => {
    return (
        <section className="export">
            <div className="export__media">
                <img src={img} alt="Worker inspecting an automotive interior component" />
            </div>

            <div className="export__content">
                <p className="export__eyebrow">About INTERIOR MEGA MAX</p>

                <h2 className="export__title">
                    Built on expertise.
                    <br />
                    Focused on your needs.
                </h2>

                <p className="export__text">
                    INTERIOR MEGA MAX is a manufacturing company focused on high-quality
                    automotive interior components. We combine modern technology, skilled
                    people and a customer-oriented approach to create value for a brighter
                    tomorrow.
                </p>

                <a className="export__link" href="/about">
                    <span>About the company</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="M13 6l6 6-6 6" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Export;