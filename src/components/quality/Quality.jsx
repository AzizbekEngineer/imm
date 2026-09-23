// import React from "react";
// import heroImage from "../../assets/images/quality-hero.png";
// import file1 from "../../assets/sertificate/one.pdf"
// import file2 from "../../assets/sertificate/two.pdf"
// import "./quality.scss";

// const features = [
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path
//           d="M4 20V10M10 20V4M16 20V14M22 20V8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "Контроль процессов",
//     text: "Контролируемые и отслеживаемые процессы для стабильного качества.",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path
//           d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Инспекция",
//     text: "Детальная проверка на ключевых этапах производства.",
//   },
//   {
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <rect x="4" y="4" width="16" height="16" rx="2" />
//         <path d="M8 9h8M8 13h5" strokeLinecap="round" />
//       </svg>
//     ),
//     title: "Прослеживаемость",
//     text: "Полная прослеживаемость от материалов до готовой продукции.",
//   },
// ];

// const certificates = [{ number: "01" }, { number: "02" }];

// const DocIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
//     <path d="M14 3v5h5" />
//     <path d="M9 13h6M9 16h6M9 10h2" strokeLinecap="round" />
//   </svg>
// );

// const DownloadIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path
//       d="M12 3v12m0 0l-4-4m4 4l4-4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path d="M4 19h16" strokeLinecap="round" />
//   </svg>
// );

// const ArrowIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path
//       d="M5 12h14m0 0l-6-6m6 6l-6 6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const Quality = () => {
//   return (
//     <div>
//       <section className="quality-section">
//         <div className="quality-section__image" />
//         <div className="quality-section__overlay" />
//         <div className="quality-section__accent" />

//         <div className="quality-section__content container">
//           <span className="quality-section__label">НАШ ПОДХОД</span>
//           <h2 className="quality-section__title">Качество на каждом этапе.</h2>
//           <p className="quality-section__text">
//             Мы следуем строгим процессам контроля качества на всех этапах
//             производства, чтобы обеспечить стабильную надёжность и
//             удовлетворённость клиентов.
//           </p>
//         </div>
//       </section>

//       <section className="quality-features">
//         <div className="container">
//           <div className="quality-features__grid">
//             {features.map((f, i) => (
//               <div className="feature-card" key={i}>
//                 <div className="feature-card__icon">{f.icon}</div>
//                 <h3 className="feature-card__title">{f.title}</h3>
//                 <p className="feature-card__text">{f.text}</p>
//               </div>
//             ))}
//           </div>

//           <div className="quality-features__cert-header">
//             <h3 className="quality-features__cert-title">
//               Сертификаты и документы
//             </h3>
//             <span className="quality-features__cert-note">
//               Сертификаты компании будут добавлены здесь
//             </span>
//           </div>

//           <div className="quality-features__docs">
//             {certificates.map((c, i) => (
//               <div className="doc-card" key={i}>
//                 <div className="doc-card__icon">
//                   <DocIcon />
//                 </div>
//                 <span className="doc-card__placeholder">
//                   Заглушка документа
//                 </span>
//                 <h4 className="doc-card__name">Сертификат {c.number}</h4>
//                 <a href="#" className="doc-card__download">
//                   <DownloadIcon />
//                   <span>Скачать PDF</span>
//                   <ArrowIcon />
//                 </a>
//               </div>
//             ))}
//           </div>

//           <div className="quality-features__commitment">
//             <div className="quality-features__commitment-icon">
//               <DocIcon />
//             </div>
//             <div className="quality-features__commitment-text">
//               <h4>Наша приверженность качеству</h4>
//               <p>Мы постоянно улучшаем наши процессы и документацию.</p>
//             </div>
//             <div className="quality-features__commitment-shape" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Quality;


import React from "react";
import heroImage from "../../assets/images/quality-hero.png";
import file1 from "../../assets/sertificate/one.pdf";
import file2 from "../../assets/sertificate/two.pdf";
import "./quality.scss";

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M4 20V10M10 20V4M16 20V14M22 20V8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Контроль процессов",
    text: "Контролируемые и отслеживаемые процессы для стабильного качества.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Инспекция",
    text: "Детальная проверка на ключевых этапах производства.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
      </svg>
    ),
    title: "Прослеживаемость",
    text: "Полная прослеживаемость от материалов до готовой продукции.",
  },
];

const certificates = [
  { number: "01", name: "Сертификат качества", file: file1, fileName: "certificate-01.pdf" },
  { number: "02", name: "Сертификат соответствия", file: file2, fileName: "certificate-02.pdf" },
];

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 16h6M9 10h2" strokeLinecap="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="download-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M12 3v12m0 0l-4-4m4 4l4-4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4 19h16" strokeLinecap="round" />
  </svg>
);

const Quality = () => {
  return (
    <div>
      <section className="quality-section">
        <div
          className="quality-section__image"
          style={{ backgroundImage: `linear-gradient(to right, rgba(6,14,24,0.95) 0%, rgba(6,14,24,0.75) 40%, rgba(6,14,24,0.15) 100%), url(${heroImage})` }}
        />
        <div className="quality-section__overlay" />
        <div className="quality-section__accent" />

        

        <div className="quality-section__content container">
          <span className="quality-section__label">НАШ ПОДХОД</span>
          <h2 className="quality-section__title">Качество на каждом этапе.</h2>
          <p className="quality-section__text">
            Мы следуем строгим процессам контроля качества на всех этапах
            производства, чтобы обеспечить стабильную надёжность и
            удовлетворённость клиентов.
          </p>
        </div>
      </section>

      <section className="quality-features">
        <div className="container">
          <div className="quality-features__grid">
            {features.map((f, i) => (
              <div
                className="feature-card"
                key={i}
                style={{ "--delay": `${i * 0.1}s` }}
              >
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__text">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="quality-features__cert-header">
            <h3 className="quality-features__cert-title">
              Сертификаты и документы
            </h3>
            <span className="quality-features__cert-note">
              Официальные документы, подтверждающие качество
            </span>
          </div>

          <div className="quality-features__docs">
            {certificates.map((c, i) => (
              <div
                className="doc-card"
                key={i}
                style={{ "--delay": `${i * 0.12}s` }}
              >
                <div className="doc-card__glow" />
                <div className="doc-card__icon">
                  <DocIcon />
                </div>
                <h4 className="doc-card__name">{c.name}</h4>
                <a
                  href={c.file}
                  download={c.fileName}
                  className="doc-card__download"
                >
                  <span className="doc-card__download-bg" />
                  <DownloadIcon />
                  <span>Скачать PDF</span>
                </a>
              </div>
            ))}
          </div>

          <div className="quality-features__commitment">
            <div className="quality-features__commitment-icon">
              <DocIcon />
            </div>
            <div className="quality-features__commitment-text">
              <h4>Наша приверженность качеству</h4>
              <p>Мы постоянно улучшаем наши процессы и документацию.</p>
            </div>
            <div className="quality-features__commitment-shape" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;