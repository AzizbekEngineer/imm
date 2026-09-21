import React, { useState } from 'react'

import "./homeContact.scss"

const contactInfo = [
    {
        label: "Company address",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 21C15.5 17.5 19 14.09 19 10a7 7 0 10-14 0c0 4.09 3.5 7.5 7 11z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
    },
    {
        label: "+998 XX XXX XX XX",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.6 10.8c1.4 2.7 3.5 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4.6c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.1 2.1z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        label: "Company email",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
]

const HomeContact = () => {
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Contact form submitted:", form)
    }

    return (
        <section className="home-contact">
            <div className="home-contact__container container">

                <div className="home-contact__info">
                    <span className="home-contact__label">Contact us</span>
                    <h2 className="home-contact__title">Let&apos;s discuss your next project.</h2>

                    <ul className="home-contact__list">
                        {contactInfo.map((item) => (
                            <li className="home-contact__list-item" key={item.label}>
                                <span className="home-contact__list-icon">{item.icon}</span>
                                <span className="home-contact__list-text">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="home-contact__map">
                    <iframe
                        className="home-contact__map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769723.3586670348!2d70.60036705384373!3d41.09670472433149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4c708e5b54231%3A0x4e71cd6bb0e2df44!2sNamangan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1789802128067!5m2!1sen!2s"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Interior Mega Max location"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeContact