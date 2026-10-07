import React, { useRef, useState } from "react";
import img from "../../assets/images/contact.webp";

import "./contact.scss";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48172.508871030994!2d71.56191760087279!3d41.008148736174086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b1b132e8431%3A0x60c8d9d7fd9469b7!2sDavlatobod%20tumani%20hokimligi!5e0!3m2!1sen!2s!4v1791364368790!5m2!1sen!2s";

const DIRECTIONS_HREF =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48172.508871030994!2d71.56191760087279!3d41.008148736174086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b1b132e8431%3A0x60c8d9d7fd9469b7!2sDavlatobod%20tumani%20hokimligi!5e0!3m2!1sen!2s!4v1791364368790!5m2!1sen!2s";

const PHONE_NUMBERS = [
  "+998(55) 255 22 77",
  "+998(50) 553 07 69",
  "+998(93) 400 75 34",
];

// "+998(55) 255 22 77" -> "tel:+998552552277"
const toTelHref = (phone) => `tel:+${phone.replace(/\D/g, "")}`;

const PHONES = PHONE_NUMBERS.map((text) => ({ text, href: toTelHref(text) }));

const EMAIL = {
  text: "info@interiormegamax.uz",
  href: "mailto:info@interiormegamax.uz",
};

const contactItems = [
  {
    label: "Адрес",
    value: 'ООО "Interior Mega Max"',
    note: "Наманганская область, г. Наманган, Давлатабадский район, МСГ Тадбиркор, ул. 7-Нурабад, дом 50",
  },
  { label: "Телефон", phones: PHONES },
  { label: "Эл. почта", value: EMAIL.text, href: EMAIL.href },
  { label: "Часы работы", value: "Пн – Пт", note: "09:00 – 18:00" },
];

const topics = [
  "Чехлы для сидений",
  "Дверные панели",
  "Потолочная обшивка",
  "Другое",
];

const submitRequest = async (formData) => {
  console.log(Object.fromEntries(formData.entries()));
  await new Promise((resolve) => setTimeout(resolve, 800));
};

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
);

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
    <polygon
      points="200,80 200,200 80,200"
      fill="currentColor"
      opacity="0.25"
    />
  </svg>
);

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      await submitRequest(new FormData(formRef.current));
      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="contact">
      {/* ---------- Hero ---------- */}
      <section
        className="contact__hero"
        style={{ backgroundImage: `url(${img})` }}
      >
        <TriangleMark className="contact__hero-mark" />

        <div className="contact__hero-inner container">
          <h1 className="contact__hero-title">Обсудим ваш проект.</h1>
          <p className="contact__hero-text">
            Расскажите о вашем проекте по салону автомобиля. Наша команда
            ответит в течение одного рабочего дня.
          </p>

          <div className="contact__hero-links">
            {PHONES.map((phone) => (
              <a
                key={phone.text}
                className="contact__hero-link"
                href={phone.href}
              >
                {phone.text}
              </a>
            ))}
            <a className="contact__hero-link" href={EMAIL.href}>
              {EMAIL.text}
            </a>
          </div>
        </div>
      </section>

      <section className="contact__main">
        <div className="contact__main-inner container">
          <aside className="contact__info">
            <h2 className="contact__heading">Контакты</h2>

            <dl className="contact__list">
              {contactItems.map((item) => (
                <div className="contact__item" key={item.label}>
                  <dt className="contact__item-label">{item.label}</dt>
                  <dd className="contact__item-body">
                    {item.phones ? (
                      <span className="contact__item-phones">
                        {item.phones.map((phone) => (
                          <a
                            key={phone.text}
                            href={phone.href}
                            className="contact__item-value"
                          >
                            {phone.text}
                          </a>
                        ))}
                      </span>
                    ) : item.href ? (
                      <a href={item.href} className="contact__item-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__item-value">{item.value}</span>
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
            <h2 className="contact__heading">Запросить расчёт</h2>
            <p className="contact__request-text">
              Выберите, что вам нужно, и опишите задачу. Мы вернёмся с ценой и
              сроками.
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
                  Имя
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
                  Телефон
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
                  Компания (необязательно)
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
                  Эл. почта (необязательно)
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
                  Описание проекта
                </label>
              </div>

              <div className="contact__actions">
                <button
                  type="submit"
                  className="contact__submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Отправка..." : "Отправить заявку"}
                  {status !== "sending" && (
                    <ArrowIcon className="contact__submit-icon" />
                  )}
                </button>

                <div aria-live="polite">
                  {status === "success" && (
                    <p className="contact__message contact__message--success">
                      Заявка отправлена. Мы скоро свяжемся с вами.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="contact__message contact__message--error">
                      Не удалось отправить заявку. Попробуйте ещё раз или
                      позвоните нам.
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
          title="Расположение Interior Mega Max"
        />

        <div className="contact__map-card">
          <p className="contact__map-name">Interior Mega Max</p>
          <p className="contact__map-address">
            Наманган вилояти Наманган шахри Давлатобод тумани Тадбиркор МФЙ
            7-Нуробод кўчаси 50-уй
          </p>
          <a
            className="contact__map-link"
            href={DIRECTIONS_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Построить маршрут
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
