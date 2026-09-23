import React from "react";
import cert1 from "../../assets/images/sertificate/one.jpg";
import cert2 from "../../assets/images/sertificate/two.jpg";

import "./stage.scss";

const certificates = [
  { image: cert1, label: "Сертификат 01", standard: "IATF 16949:2016" },
  { image: cert2, label: "Сертификат 02", standard: "ISO 9001:2015" },
];

const ArrowIcon = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
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

const Stage = () => {
  return (
    <section className="stage">
      <div className="stage__container container">
        <div className="stage__info">
          <span className="stage__label">Качество и сертификаты</span>

          <h2 className="stage__title">Качество на каждом этапе.</h2>

          <p className="stage__description">
            Мы осуществляем строгий контроль качества на всех этапах
            производства, чтобы обеспечить стабильную надёжность продукции и
            удовлетворённость клиентов.
          </p>

          <a href="/quality" className="stage__link">
            Посмотреть документы о качестве
            <ArrowIcon className="stage__link-icon" />
          </a>
        </div>

        <div className="stage__certificates">
          {certificates.map((cert) => (
            <a
              href="/quality/documents"
              className="stage__cert"
              key={cert.label}
            >
              <div className="stage__cert-image-wrap">
                <img
                  src={cert.image}
                  alt={cert.label}
                  className="stage__cert-image"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stage;
