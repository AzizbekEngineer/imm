import React from "react";
import "./result.scss";

const TrophyIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 4h14v8a7 7 0 0 1-14 0V4z" />
    <path d="M9 7H4v2.5A4.5 4.5 0 0 0 8.5 14H9" />
    <path d="M23 7h5v2.5a4.5 4.5 0 0 1-4.5 4.5H23" />
    <path d="M16 19v5" />
    <path d="M12 24h8v4h-8z" />
  </svg>
);

const FactoryIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 27V14l8 5v-5l8 5V5h6v22H4z" />
    <path d="M9 23h2" />
    <path d="M15 23h2" />
    <path d="M22 23h2" />
  </svg>
);

const TeamIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="16" cy="9" r="3.5" />
    <path d="M9.5 25v-3a6.5 6.5 0 0 1 13 0v3z" />
    <circle cx="6.5" cy="12.5" r="2.6" />
    <path d="M2 23v-2.5A4.5 4.5 0 0 1 6.5 16" />
    <circle cx="25.5" cy="12.5" r="2.6" />
    <path d="M30 23v-2.5a4.5 4.5 0 0 0-4.5-4.5" />
  </svg>
);

const CubeIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 3l11 6v14l-11 6-11-6V9z" />
    <path d="M5 9l11 6 11-6" />
    <path d="M16 15v14" />
  </svg>
);

const stats = [
  {
    id: 1,
    icon: <TrophyIcon />,
    value: "15+",
    label: "Лет опыта",
    tone: "accent",
  },
  {
    id: 2,
    icon: <FactoryIcon />,
    value: "500K",
    label: "Производственная мощность",
    tone: "accent",
  },
  {
    id: 3,
    icon: <TeamIcon />,
    value: "250",
    label: "Сотрудников",
    tone: "dark",
  },
  {
    id: 4,
    icon: <CubeIcon />,
    value: "40",
    label: "Категорий продукции",
    tone: "dark",
  },
];

const Result = () => {
  return (
    <section className="result">
      <ul className="result__list container">
        {stats.map((item) => (
          <li className="result__item" key={item.id}>
            <span className={`result__icon result__icon--${item.tone}`}>
              {item.icon}
            </span>
            <div className="result__text">
              <strong className="result__value">{item.value}</strong>
              <span className="result__label">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Result;
