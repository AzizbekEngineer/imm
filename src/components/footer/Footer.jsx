import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import icons from "../../assets/icons/logo.svg";
import "./footer.scss";

const footerLinks = [
  {
    title: "Компания",
    links: [
      { label: "О компании", href: "/company" },
      { label: "Новости", href: "/news" },
      { label: "Вакансии", href: "/careers" },
      { label: "Производство", href: "/production" },
      { label: "Контакты", href: "/contact" },
    ],
  },
  {
    title: "Производство",
    links: [
      { label: "Технологии и оборудование", href: "/company" },
      { label: "Производственный процесс", href: "/news" },
      { label: "Каталог продукции", href: "/production" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="8" cy="8.5" r="1.2" fill="currentColor" />
        <path
          d="M8 11v6M12 11v6M12 13.5c0-1.5 1-2.5 2.5-2.5S17 12 17 13.5V17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "998",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: "", phone: "998", email: "", message: "" });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <img
                src={icons}
                alt="Interior Mega Max"
                className="footer__logo-icon"
              />
            </a>

            <p className="footer__description">
              Точное производство компонентов автомобильного интерьера,
              созданных для надёжности и дорог будущего.
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

          {/* Колонки ссылок */}
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

          {/* Контактная форма */}
          <div className="footer__contact">
            <form className="footer__form" onSubmit={handleSubmit}>
              <h3 className="footer__form-title">Оставьте сообщение</h3>

              <input
                type="text"
                name="name"
                className="footer__input"
                placeholder="Имя"
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
                placeholder="Электронная почта"
                value={form.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                className="footer__input footer__textarea"
                placeholder="Сообщение"
                rows={3}
                value={form.message}
                onChange={handleChange}
              />

              <button type="submit" className="footer__submit">
                Отправить
              </button>
            </form>
          </div>
        </div>

        {/* Нижняя панель */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            © {new Date().getFullYear()} Interior Mega Max. Все права защищены.
          </span>

          <div className="footer__bottom-links">
            <a href="/privacy-policy">Политика конфиденциальности</a>
            <a href="/terms">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
