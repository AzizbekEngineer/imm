// import React, { useState } from 'react'
// import PhoneInput from "react-phone-input-2"
// import "react-phone-input-2/lib/style.css"
// import icons from "../../assets/icons/icons.png"
// import "./footer.scss"

// const footerLinks = [
//     {
//         title: "Company",
//         links: [
//             { label: "About us", href: "/company" },
//             { label: "News", href: "/news" },
//             { label: "Careers", href: "/careers" },
//         ],
//     },
//     {
//         title: "Production",
//         links: [
//             { label: "Technology & equipment", href: "/production/technology" },
//             { label: "Production process", href: "/production/process" },
//             { label: "Product catalog", href: "/production/catalog" },
//         ],
//     },
//     {
//         title: "Quality",
//         links: [
//             { label: "Quality control", href: "/quality" },
//             { label: "Certificates", href: "/quality/documents" },
//         ],
//     },
// ]

// const socials = [
//     {
//         label: "Instagram",
//         href: "https://instagram.com",
//         icon: (
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
//                 <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
//                 <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
//             </svg>
//         ),
//     },
//     {
//         label: "Facebook",
//         href: "https://facebook.com",
//         icon: (
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                     d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9c0-.3.2-.5.5-.5H14z"
//                     fill="currentColor"
//                 />
//             </svg>
//         ),
//     },
//     {
//         label: "LinkedIn",
//         href: "https://linkedin.com",
//         icon: (
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
//                 <circle cx="8" cy="8.5" r="1.2" fill="currentColor" />
//                 <path d="M8 11v6M12 11v6M12 13.5c0-1.5 1-2.5 2.5-2.5S17 12 17 13.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//             </svg>
//         ),
//     },
// ]

// const Footer = () => {
//     const [form, setForm] = useState({
//         name: "",
//         phone: "998",
//         email: "",
//         message: "",
//     })

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // TODO: shu yerda API'ga yuboring
//         console.log(form)
//         setForm({ name: "", phone: "998", email: "", message: "" })
//     }

//     return (
//         <footer className="footer">
//             <div className="footer__container container">

//                 {/* Top area */}
//                 <div className="footer__top">

//                     {/* Brand */}
//                     <div className="footer__brand">
//                         <a href="/" className="footer__logo">
//                             <img src={icons} alt="Interior Mega Max" className="footer__logo-icon" />
//                             <div className="footer__logo-text">
//                                 <span className="footer__logo-title">
//                                     INTERIOR<br />MEGA MAX
//                                 </span>
//                                 <span className="footer__logo-slogan">
//                                     Bright future of your car.
//                                 </span>
//                             </div>
//                         </a>

//                         <p className="footer__description">
//                             Precision manufacturing of automotive interior components,
//                             built for reliability and tomorrow's roads.
//                         </p>

//                         {/* Contact info (formaga joy bo'lishi uchun shu yerga ko'chirildi) */}
//                         <ul className="footer__contact-list">
//                             <li>
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M12 21C15.5 17.5 19 14.09 19 10a7 7 0 10-14 0c0 4.09 3.5 7.5 7 11z"
//                                         stroke="currentColor"
//                                         strokeWidth="1.8"
//                                     />
//                                     <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
//                                 </svg>
//                                 <span>Company address</span>
//                             </li>
//                             <li>
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M6.6 10.8c1.4 2.7 3.5 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4.6c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.1 2.1z"
//                                         stroke="currentColor"
//                                         strokeWidth="1.8"
//                                     />
//                                 </svg>
//                                 <span>+998 XX XXX XX XX</span>
//                             </li>
//                             <li>
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
//                                     <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" />
//                                 </svg>
//                                 <span>Company email</span>
//                             </li>
//                         </ul>

//                         <div className="footer__socials">
//                             {socials.map((social) => (
//                                 <a
//                                     href={social.href}
//                                     className="footer__social-link"
//                                     key={social.label}
//                                     aria-label={social.label}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     {social.icon}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Link columns */}
//                     <div className="footer__columns">
//                         {footerLinks.map((col) => (
//                             <div className="footer__column" key={col.title}>
//                                 <span className="footer__column-title">{col.title}</span>
//                                 <ul className="footer__column-list">
//                                     {col.links.map((link) => (
//                                         <li key={link.label}>
//                                             <a href={link.href} className="footer__column-link">
//                                                 {link.label}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Contact form */}
//                     <div className="footer__contact">
//                         <form className="footer__form" onSubmit={handleSubmit}>
//                             <h3 className="footer__form-title">Leave a message</h3>

//                             <input
//                                 type="text"
//                                 name="name"
//                                 className="footer__input"
//                                 placeholder="Name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 required
//                             />

//                             <PhoneInput
//                                 country="uz"
//                                 value={form.phone}
//                                 onChange={(phone) => setForm({ ...form, phone })}
//                                 containerClass="footer__phone"
//                                 inputClass="footer__phone-input"
//                                 buttonClass="footer__phone-button"
//                                 dropdownClass="footer__phone-dropdown"
//                             />

//                             <input
//                                 type="email"
//                                 name="email"
//                                 className="footer__input"
//                                 placeholder="Email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                             />

//                             <textarea
//                                 name="message"
//                                 className="footer__input footer__textarea"
//                                 placeholder="Message"
//                                 rows={4}
//                                 value={form.message}
//                                 onChange={handleChange}
//                             />

//                             <button type="submit" className="footer__submit">
//                                 Send
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Bottom bar */}
//                 <div className="footer__bottom">
//                     <span className="footer__copyright">
//                         © {new Date().getFullYear()} Interior Mega Max. All rights reserved.
//                     </span>

//                     <div className="footer__bottom-links">
//                         <a href="/privacy-policy">Privacy policy</a>
//                         <a href="/terms">Terms of use</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer


import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import icons from "../../assets/icons/icons.png"
import "./footer.scss"

const footerLinks = [
    {
        title: "Company",
        links: [
            { label: "About us", href: "/company" },
            { label: "News", href: "/news" },
            { label: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Production",
        links: [
            { label: "Technology & equipment", href: "/production/technology" },
            { label: "Production process", href: "/production/process" },
            { label: "Product catalog", href: "/production/catalog" },
        ],
    },
    {
        title: "Quality",
        links: [
            { label: "Quality control", href: "/quality" },
            { label: "Certificates", href: "/quality/documents" },
        ],
    },
]

const socials = [
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9c0-.3.2-.5.5-.5H14z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="8" cy="8.5" r="1.2" fill="currentColor" />
                <path d="M8 11v6M12 11v6M12 13.5c0-1.5 1-2.5 2.5-2.5S17 12 17 13.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
]

const Footer = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "998",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setForm({ name: "", phone: "998", email: "", message: "" })
    }

    return (
        <footer className="footer">
            <div className="footer__container container">

                <div className="footer__top">

                    <div className="footer__brand">
                        <a href="/" className="footer__logo">
                            <img src={icons} alt="Interior Mega Max" className="footer__logo-icon" />
                        </a>

                        <p className="footer__description">
                            Precision manufacturing of automotive interior components,
                            built for reliability and tomorrow's roads.
                        </p>

                        <div className="footer__socials">
                            {socials.map((social) => (
                                <a
                                    href={social.href}
                                    className="footer__social-link"
                                    key={social.label}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="footer__columns">
                        {footerLinks.map((col) => (
                            <div className="footer__column" key={col.title}>
                                <span className="footer__column-title">{col.title}</span>
                                <ul className="footer__column-list">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href} className="footer__column-link">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact form */}
                    <div className="footer__contact">
                        <form className="footer__form" onSubmit={handleSubmit}>
                            <h3 className="footer__form-title">Leave a message</h3>

                            <input
                                type="text"
                                name="name"
                                className="footer__input"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <PhoneInput
                                country="uz"
                                disableCountryGuess
                                countryCodeEditable={false}
                                value={form.phone}
                                onChange={(phone) => setForm({ ...form, phone })}
                                containerClass="footer__phone"
                                inputClass="footer__phone-input"
                                buttonClass="footer__phone-button"
                                dropdownClass="footer__phone-dropdown"
                            />

                            <input
                                type="email"
                                name="email"
                                className="footer__input"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                className="footer__input footer__textarea"
                                placeholder="Message"
                                rows={3}
                                value={form.message}
                                onChange={handleChange}
                            />

                            <button type="submit" className="footer__submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <span className="footer__copyright">
                        © {new Date().getFullYear()} Interior Mega Max. All rights reserved.
                    </span>

                    <div className="footer__bottom-links">
                        <a href="/privacy-policy">Privacy policy</a>
                        <a href="/terms">Terms of use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer