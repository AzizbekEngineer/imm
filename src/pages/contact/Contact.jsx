import React, { useRef, useState } from "react"
import img from "../../assets/images/contact.webp"

import "./contact.scss"

const MAP_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769723.3586670348!2d70.60036705384373!3d41.09670472433149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a4c708e5b54231%3A0x4e71cd6bb0e2df44!2sNamangan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1789802128067!5m2!1sen!2s"

const DIRECTIONS_HREF =
    "https://www.google.com/maps/search/?api=1&query=Amir+Timur+48+Namangan+Uzbekistan"

const PHONE = { text: "+998 XX XXX XX XX", href: "tel:+998XXXXXXXXX" }
const EMAIL = { text: "info@company.uz", href: "mailto:info@company.uz" }

const contactItems = [
    {
        label: "Address",
        value: 'LLC "Interior Mega Max"',
        note: "Amir Timur 48, Namangan, Uzbekistan",
    },
    { label: "Phone", value: PHONE.text, href: PHONE.href },
    { label: "Email", value: EMAIL.text, href: EMAIL.href },
    { label: "Business hours", value: "Mon – Fri", note: "09:00 – 18:00" },
]

const topics = ["Seat covers", "Door panels", "Headliners", "Something else"]

const submitRequest = async (formData) => {
    console.log(Object.fromEntries(formData.entries()))
    await new Promise((resolve) => setTimeout(resolve, 800))
}

const ArrowIcon = ({ className }) => (
    <svg
        className={className}
        width="18"
        height="18"
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
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <polygon points="200,80 200,200 80,200" fill="currentColor" opacity="0.25" />
    </svg>
)

const Contact = () => {
    const formRef = useRef(null)
    const [status, setStatus] = useState("idle") // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (status === "sending") return

        setStatus("sending")

        try {
            await submitRequest(new FormData(formRef.current))
            formRef.current.reset()
            setStatus("success")
        } catch (error) {
            setStatus("error")
        }
    }

    return (
        <main className="contact">
            {/* ---------- Hero ---------- */}
            <section
                className="contact__hero"
                style={{ backgroundImage: `url(${img})` }}
            >
                <TriangleMark className="contact__hero-mark" />

                <div className="contact__hero-inner container">
                    <h1 className="contact__hero-title">
                        Let's discuss your project.
                    </h1>
                    <p className="contact__hero-text">
                        Tell us about your automotive interior project. Our team
                        replies within one business day.
                    </p>

                    <div className="contact__hero-links">
                        <a className="contact__hero-link" href={PHONE.href}>
                            {PHONE.text}
                        </a>
                        <a className="contact__hero-link" href={EMAIL.href}>
                            {EMAIL.text}
                        </a>
                    </div>
                </div>
            </section>

            <section className="contact__main">
                <div className="contact__main-inner container">
                    <aside className="contact__info">
                        <h2 className="contact__heading">Contact</h2>

                        <dl className="contact__list">
                            {contactItems.map((item) => (
                                <div className="contact__item" key={item.label}>
                                    <dt className="contact__item-label">{item.label}</dt>
                                    <dd className="contact__item-body">
                                        {item.href ? (
                                            <a href={item.href} className="contact__item-value">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="contact__item-value">
                                                {item.value}
                                            </span>
                                        )}
                                        {item.note && (
                                            <span className="contact__item-note">{item.note}</span>
                                        )}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </aside>

                    <div className="contact__request">
                        <h2 className="contact__heading">Request a quote</h2>
                        <p className="contact__request-text">
                            Pick what you need and describe the job. We'll come
                            back with a price and a timeline.
                        </p>

                        <form
                            className="contact__form"
                            ref={formRef}
                            onSubmit={handleSubmit}
                        >
                            <div className="contact__field">
                                <input
                                    className="contact__input"
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder=" "
                                    required
                                />
                                <label className="contact__label" htmlFor="contact-name">
                                    Name
                                </label>
                            </div>

                            <div className="contact__field">
                                <input
                                    className="contact__input"
                                    id="contact-phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder=" "
                                    required
                                />
                                <label className="contact__label" htmlFor="contact-phone">
                                    Phone
                                </label>
                            </div>

                            <div className="contact__field">
                                <input
                                    className="contact__input"
                                    id="contact-company"
                                    name="company"
                                    type="text"
                                    autoComplete="organization"
                                    placeholder=" "
                                />
                                <label className="contact__label" htmlFor="contact-company">
                                    Company (optional)
                                </label>
                            </div>

                            <div className="contact__field">
                                <input
                                    className="contact__input"
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder=" "
                                />
                                <label className="contact__label" htmlFor="contact-email">
                                    Email (optional)
                                </label>
                            </div>

                            <div className="contact__field contact__field--full">
                                <textarea
                                    className="contact__input contact__textarea"
                                    id="contact-message"
                                    name="message"
                                    rows="4"
                                    placeholder=" "
                                    required
                                />
                                <label className="contact__label" htmlFor="contact-message">
                                    Project details
                                </label>
                            </div>

                            <div className="contact__actions">
                                <button
                                    type="submit"
                                    className="contact__submit"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "Send request"}
                                    {status !== "sending" && (
                                        <ArrowIcon className="contact__submit-icon" />
                                    )}
                                </button>

                                <div aria-live="polite">
                                    {status === "success" && (
                                        <p className="contact__message contact__message--success">
                                            Request sent. We will contact you soon.
                                        </p>
                                    )}
                                    {status === "error" && (
                                        <p className="contact__message contact__message--error">
                                            Could not send the request. Please try again or call us.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="contact__map">
                <iframe
                    className="contact__map-iframe"
                    src={MAP_SRC}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Interior Mega Max location"
                />

                <div className="contact__map-card">
                    <p className="contact__map-name">Interior Mega Max</p>
                    <p className="contact__map-address">
                        Amir Timur 48, Namangan
                    </p>
                    <a
                        className="contact__map-link"
                        href={DIRECTIONS_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get directions
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Contact