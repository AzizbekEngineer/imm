import React, { useState } from "react";
import icons from "../../assets/icons/icons.png";

import "./header.scss";
import { router } from "../../routes";
import { MENU } from "../../constants/menu";

const languages = ["UZ", "RU", "EN"];

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [activeLang, setActiveLang] = useState("EN");

  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="header__logo">
          <img src={icons} alt="" />
        </a>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {MENU?.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  className={`header__nav-link ${activeLink === link.title ? "header__nav-link--active" : ""
                    }`}
                  onClick={() => setActiveLink(link.title)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__lang">
          {languages.map((lang, index) => (
            <React.Fragment key={lang}>
              <span
                className={`header__lang-item ${activeLang === lang ? "header__lang-item--active" : ""
                  }`}
                onClick={() => setActiveLang(lang)}
              >
                {lang}
              </span>
              {index < languages.length - 1 && (
                <span className="header__lang-divider">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <a href="" to={"/contact"} className="header__cta">
          Запросить цену
          <svg
            className="header__cta-icon"
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
    </header>
  );
};

export default Header;
