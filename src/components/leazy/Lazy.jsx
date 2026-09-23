import React from "react";
import logo from "../../assets/icons/logo.svg";
import "./lazy.scss";

const Lazy = ({ fullscreen = true }) => {
  return (
    <div
      className={`lazy ${fullscreen ? "lazy--fullscreen" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Загрузка"
    >
      <div className="lazy__box">
        <div className="lazy__logo-wrap">
          <span className="lazy__glow" />
          <span className="lazy__ring" />
          <span className="lazy__ring lazy__ring--reverse" />
          <img src={logo} alt="" className="lazy__logo" />
        </div>

        <div className="lazy__bar">
          <span className="lazy__bar-fill" />
        </div>

        <span className="lazy__text">
          Загрузка
          <span className="lazy__dots">
            <i />
            <i />
            <i />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Lazy;
