// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import img1 from "../../assets/images/product1.avif";
// import img2 from "../../assets/images/product2.png";
// import products, { ALL_CATEGORY, categories } from "../../static/index";

// import "./production.scss";

// const steps = [
//   {
//     title: "Инжиниринг",
//     text: "Превращаем потребности клиентов в оптимальные конструкторские решения.",
//     icon: (
//       <>
//         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//         <circle cx="12" cy="12" r="3" />
//       </>
//     ),
//   },
//   {
//     title: "Производство",
//     text: "Эффективные и надёжные производственные процессы.",
//     icon: (
//       <>
//         <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
//         <path d="M17 18h1M12 18h1M7 18h1" />
//       </>
//     ),
//   },
//   {
//     title: "Контроль качества",
//     text: "Обеспечиваем качество в каждой детали.",
//     icon: (
//       <>
//         <circle cx="11" cy="11" r="8" />
//         <path d="M21 21l-4.35-4.35" />
//       </>
//     ),
//   },
// ];

// const technology = [
//   {
//     id: 1,
//     title: "Центры ЧПУ-обработки",
//     text: "Высокоточная обработка сложных деталей.",
//     image: img1,
//     alt: "Станок с ЧПУ в производственном цехе",
//     href: "/production/cnc-machining",
//   },
//   {
//     id: 2,
//     title: "Литьевые машины",
//     text: "Эффективное производство качественных пластиковых деталей.",
//     image: img2,
//     alt: "Литьевые машины в цехе",
//     href: "/production/injection-molding",
//   },
// ];

// const Icon = ({ children, size = 24 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-hidden="true"
//   >
//     {children}
//   </svg>
// );

// const ArrowIcon = ({ className }) => (
//   <svg
//     className={className}
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-hidden="true"
//   >
//     <path
//       d="M5 12H19M19 12L12 5M19 12L12 19"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const TriangleMark = ({ className }) => (
//   <svg
//     className={className}
//     viewBox="0 0 200 200"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-hidden="true"
//   >
//     <polygon
//       points="200,0 200,200 0,200"
//       stroke="currentColor"
//       strokeWidth="5"
//       strokeLinejoin="round"
//     />
//     <polygon
//       points="200,70 200,200 70,200"
//       fill="currentColor"
//       opacity="0.35"
//     />
//   </svg>
// );

// const Photo = ({ src, alt, className = "" }) => {
//   const [failed, setFailed] = useState(false);

//   return (
//     <div className={`production-page__photo ${className}`}>
//       {failed ? (
//         <TriangleMark className="production-page__placeholder" />
//       ) : (
//         <img
//           src={src}
//           alt={alt}
//           loading="lazy"
//           onError={() => setFailed(true)}
//         />
//       )}
//     </div>
//   );
// };

// const Production = () => {
//   const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

//   const visibleProducts =
//     activeCategory === ALL_CATEGORY
//       ? products
//       : products.filter((item) => item.category === activeCategory);

//   return (
//     <main className="production-page">
//       <header
//         className="production-page__hero"
//         style={{ backgroundImage: `url(${img1})` }}
//       >
//         <div className="production-page__hero-inner container">
//           <span className="production-page__hero-label">Наше производство</span>
//           <h1 className="production-page__hero-title">
//             От идеи до готового продукта.
//           </h1>
//           <p className="production-page__hero-text">
//             Комплексные возможности, стабильное качество и ориентация на
//             потребности клиентов.
//           </p>
//         </div>
//       </header>

//       <section className="production-page__steps-wrap">
//         <div className="container">
//           <ol className="production-page__steps">
//             {steps.map((item, index) => (
//               <React.Fragment key={item.title}>
//                 <li className="production-page__step">
//                   <span className="production-page__step-icon">
//                     <Icon>{item.icon}</Icon>
//                   </span>
//                   <div className="production-page__step-body">
//                     <h2 className="production-page__step-title">
//                       {item.title}
//                     </h2>
//                     <p className="production-page__step-text">{item.text}</p>
//                   </div>
//                 </li>
//                 {index < steps.length - 1 && (
//                   <li
//                     className="production-page__step-arrow"
//                     aria-hidden="true"
//                   >
//                     <ArrowIcon />
//                   </li>
//                 )}
//               </React.Fragment>
//             ))}
//           </ol>
//         </div>
//       </section>

//       <section className="production-page__tech">
//         <div className="container">
//           <h2 className="production-page__heading">
//             Технологии и оборудование
//           </h2>

//           <div className="production-page__tech-grid">
//             {technology.map((item) => (
//               <a
//                 className="production-page__tech-card"
//                 href={item.href}
//                 key={item.id}
//               >
//                 <Photo
//                   src={item.image}
//                   alt={item.alt}
//                   className="production-page__photo--wide"
//                 />
//                 <div className="production-page__card-footer">
//                   <div className="production-page__card-text">
//                     <h3 className="production-page__card-title">
//                       {item.title}
//                     </h3>
//                     <p className="production-page__card-desc">{item.text}</p>
//                   </div>
//                   <span className="production-page__card-arrow">
//                     <ArrowIcon />
//                   </span>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="production-page__catalog">
//         <div className="container">
//           <h2 className="production-page__heading">Каталог продукции</h2>

//           <div className="production-page__toolbar">
//             <div
//               className="production-page__tabs"
//               role="group"
//               aria-label="Фильтр продукции по категории"
//             >
//               {categories.map((category) => (
//                 <button
//                   type="button"
//                   key={category}
//                   className={
//                     "production-page__tab" +
//                     (category === activeCategory
//                       ? " production-page__tab--active"
//                       : "")
//                   }
//                   aria-pressed={category === activeCategory}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <Link to="/products" className="production-page__all-link">
//               Все продукты
//               <ArrowIcon className="production-page__all-icon" />
//             </Link>
//           </div>

//           <div className="production-page__products">
//             {visibleProducts.map((item) => (
//               <Link
//                 className="production-page__product"
//                 to={item.href}
//                 key={item.id}
//               >
//                 <Photo
//                   src={item.image}
//                   alt={item.name}
//                   className="production-page__photo--product"
//                 />
//                 <span className="production-page__product-tag">
//                   {item.category}
//                 </span>
//                 <div className="production-page__card-footer">
//                   <div className="production-page__card-text">
//                     <h3 className="production-page__card-title">{item.name}</h3>
//                     <p className="production-page__card-desc">{item.spec}</p>
//                   </div>
//                   <span className="production-page__card-arrow">
//                     <ArrowIcon />
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="production-page__download">
//             <a
//               href="/catalog.pdf"
//               className="production-page__download-info"
//               download
//             >
//               <span className="production-page__download-icon">
//                 <Icon size={26}>
//                   <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                   <polyline points="14 2 14 8 20 8" />
//                   <line x1="16" y1="13" x2="8" y2="13" />
//                   <line x1="16" y1="17" x2="8" y2="17" />
//                   <line x1="10" y1="9" x2="8" y2="9" />
//                 </Icon>
//               </span>
//               <span className="production-page__download-text">
//                 <span className="production-page__download-title">
//                   Скачать каталог
//                 </span>
//                 <span className="production-page__download-desc">
//                   Скачайте наш последний каталог продукции (PDF)
//                 </span>
//               </span>
//             </a>

//             <a href="/contact" className="production-page__quote">
//               Запросить расчёт стоимости
//               <ArrowIcon className="production-page__quote-icon" />
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Production;


import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/product1.avif";
import img2 from "../../assets/images/product2.png";
import products, { ALL_CATEGORY, categories } from "../../static/index";

import "./production.scss";

const steps = [
  {
    title: "Инжиниринг",
    text: "Превращаем потребности клиентов в оптимальные конструкторские решения.",
    icon: (
      <>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Производство",
    text: "Эффективные и надёжные производственные процессы.",
    icon: (
      <>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
        <path d="M17 18h1M12 18h1M7 18h1" />
      </>
    ),
  },
  {
    title: "Контроль качества",
    text: "Обеспечиваем качество в каждой детали.",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
  },
];

const technology = [
  {
    id: 1,
    title: "Центры ЧПУ-обработки",
    text: "Высокоточная обработка сложных деталей.",
    image: img1,
    alt: "Станок с ЧПУ в производственном цехе",
    href: "/production/cnc-machining",
  },
  {
    id: 2,
    title: "Литьевые машины",
    text: "Эффективное производство качественных пластиковых деталей.",
    image: img2,
    alt: "Литьевые машины в цехе",
    href: "/production/injection-molding",
  },
];

const Icon = ({ children, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {children}
  </svg>
);

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
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <polygon
      points="200,70 200,200 70,200"
      fill="currentColor"
      opacity="0.35"
    />
  </svg>
);

/* ---------- Scroll-reveal hook ---------- */
// Adds an `is-visible` class once the element enters the viewport.
// Falls back to immediately-visible for reduced-motion users.
const useReveal = (options = {}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Photo = ({ src, alt, className = "" }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`production-page__photo ${className}`}>
      {failed ? (
        <TriangleMark className="production-page__placeholder" />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

const Production = () => {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const visibleProducts =
    activeCategory === ALL_CATEGORY
      ? products
      : products.filter((item) => item.category === activeCategory);

  const [heroRef, heroVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [techRef, techVisible] = useReveal();
  const [catalogRef, catalogVisible] = useReveal();
  const [downloadRef, downloadVisible] = useReveal();

  const handleCategoryClick = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  return (
    <main className="production-page">
      <header
        ref={heroRef}
        className={
          "production-page__hero" +
          (heroVisible ? " production-page__hero--visible" : "")
        }
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="production-page__hero-inner container">
          <span className="production-page__hero-label">Наше производство</span>
          <h1 className="production-page__hero-title">
            От идеи до готового продукта.
          </h1>
          <p className="production-page__hero-text">
            Комплексные возможности, стабильное качество и ориентация на
            потребности клиентов.
          </p>
        </div>
      </header>

      <section
        ref={stepsRef}
        className={
          "production-page__steps-wrap" +
          (stepsVisible ? " production-page__steps-wrap--visible" : "")
        }
      >
        <div className="container">
          <ol className="production-page__steps">
            {steps.map((item, index) => (
              <React.Fragment key={item.title}>
                <li
                  className="production-page__step"
                  style={{ "--reveal-delay": `${index * 110}ms` }}
                >
                  <span className="production-page__step-icon">
                    <Icon>{item.icon}</Icon>
                  </span>
                  <div className="production-page__step-body">
                    <h2 className="production-page__step-title">
                      {item.title}
                    </h2>
                    <p className="production-page__step-text">{item.text}</p>
                  </div>
                </li>
                {index < steps.length - 1 && (
                  <li
                    className="production-page__step-arrow"
                    aria-hidden="true"
                  >
                    <ArrowIcon />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </section>

      <section
        ref={techRef}
        className={
          "production-page__tech" +
          (techVisible ? " production-page__tech--visible" : "")
        }
      >
        <div className="container">
          <h2 className="production-page__heading">
            Технологии и оборудование
          </h2>

          <div className="production-page__tech-grid">
            {technology.map((item, index) => (
              <a
                className="production-page__tech-card"
                href={item.href}
                key={item.id}
                style={{ "--reveal-delay": `${index * 130}ms` }}
              >
                <Photo
                  src={item.image}
                  alt={item.alt}
                  className="production-page__photo--wide"
                />
                <div className="production-page__card-footer">
                  <div className="production-page__card-text">
                    <h3 className="production-page__card-title">
                      {item.title}
                    </h3>
                    <p className="production-page__card-desc">{item.text}</p>
                  </div>
                  <span className="production-page__card-arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={catalogRef}
        className={
          "production-page__catalog" +
          (catalogVisible ? " production-page__catalog--visible" : "")
        }
      >
        <div className="container">
          <h2 className="production-page__heading">Каталог продукции</h2>

          <div className="production-page__toolbar">
            <div
              className="production-page__tabs"
              role="group"
              aria-label="Фильтр продукции по категории"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    "production-page__tab" +
                    (category === activeCategory
                      ? " production-page__tab--active"
                      : "")
                  }
                  aria-pressed={category === activeCategory}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <Link to="/products" className="production-page__all-link">
              Все продукты
              <ArrowIcon className="production-page__all-icon" />
            </Link>
          </div>

          <div className="production-page__products">
            {visibleProducts.map((item, index) => (
              <Link
                className="production-page__product"
                to={item.href}
                key={item.id}
                style={{ "--reveal-delay": `${(index % 6) * 80}ms` }}
              >
                <Photo
                  src={item.image}
                  alt={item.name}
                  className="production-page__photo--product"
                />
                <span className="production-page__product-tag">
                  {item.category}
                </span>
                <div className="production-page__card-footer">
                  <div className="production-page__card-text">
                    <h3 className="production-page__card-title">{item.name}</h3>
                    <p className="production-page__card-desc">{item.spec}</p>
                  </div>
                  <span className="production-page__card-arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div
            ref={downloadRef}
            className={
              "production-page__download" +
              (downloadVisible ? " production-page__download--visible" : "")
            }
          >
            <a
              href="/catalog.pdf"
              className="production-page__download-info"
              download
            >
              <span className="production-page__download-icon">
                <Icon size={26}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </Icon>
              </span>
              <span className="production-page__download-text">
                <span className="production-page__download-title">
                  Скачать каталог
                </span>
                <span className="production-page__download-desc">
                  Скачайте наш последний каталог продукции (PDF)
                </span>
              </span>
            </a>

            <a href="/contact" className="production-page__quote">
              Запросить расчёт стоимости
              <ArrowIcon className="production-page__quote-icon" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Production;