import React, { useState } from "react";
import icons from "../../assets/icons/icons.png";

import "./header.scss";
import { MENU } from "../../constants/menu";
import { useLocation, Link } from "react-router-dom";

const languages = ["UZ", "RU", "EN"];

const Header = () => {
  const loc = useLocation();
  const [activeLang, setActiveLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img src={icons} alt="" />
        </Link>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {MENU?.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`header__nav-link ${
                    loc.pathname === link.path ? "header__nav-link--active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobilda til va CTA ham menyu ichida ko'rinsin */}
          <div className="header__nav-mobile-extra">
            <div className="header__lang">
              {languages.map((lang, index) => (
                <React.Fragment key={lang}>
                  <span
                    className={`header__lang-item ${
                      activeLang === lang ? "header__lang-item--active" : ""
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

            <Link to="/contact" className="header__cta" onClick={closeMenu}>
              Запросить цену
            </Link>
          </div>
        </nav>

        <div className="header__lang header__lang--desktop">
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

        <Link to="/contact" className="header__cta header__cta--desktop">
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
        </Link>

        {/* Burger tugma faqat mobil/planshetda ko'rinadi */}
        <button
          className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
