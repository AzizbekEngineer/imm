// import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { getProductBySlug, getRelatedProducts } from "../../static/index";

// import "./productDetail.scss";

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

// const BackIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     aria-hidden="true"
//   >
//     <path
//       d="M19 12H5M5 12L12 19M5 12L12 5"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     aria-hidden="true"
//   >
//     <path
//       d="M20 6L9 17l-5-5"
//       stroke="currentColor"
//       strokeWidth="2.2"
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
//     <div className={`product-detail__photo ${className}`}>
//       {failed ? (
//         <TriangleMark className="product-detail__placeholder" />
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

// const NotFound = () => (
//   <main className="product-detail product-detail--empty">
//     <div className="container">
//       <h1>Product not found</h1>
//       <p>
//         The product you are looking for doesn&apos;t exist or has been removed.
//       </p>
//       <Link to="/production" className="product-detail__back">
//         <BackIcon />
//         Back to product catalog
//       </Link>
//     </div>
//   </main>
// );

// const ProductDetail = () => {
//   const { slug } = useParams();
//   const product = getProductBySlug(slug);

//   const [activeImage, setActiveImage] = useState(0);

//   if (!product) {
//     return <NotFound />;
//   }

//   const related = getRelatedProducts(product);

//   return (
//     <main className="product-detail">
//       <div className="container">
//         <nav className="product-detail__breadcrumb" aria-label="Breadcrumb">
//           <Link to="/">Home</Link>
//           <span>/</span>
//           <Link to="/production">Production</Link>
//           <span>/</span>
//           <span aria-current="page">{product.name}</span>
//         </nav>

//         <div className="product-detail__top">
//           <div className="product-detail__gallery">
//             <Photo
//               src={product.gallery[activeImage] || product.image}
//               alt={product.name}
//               className="product-detail__photo--main"
//             />

//             {product.gallery.length > 1 && (
//               <div className="product-detail__thumbs">
//                 {product.gallery.map((src, index) => (
//                   <button
//                     type="button"
//                     key={src + index}
//                     className={
//                       "product-detail__thumb" +
//                       (index === activeImage
//                         ? " product-detail__thumb--active"
//                         : "")
//                     }
//                     onClick={() => setActiveImage(index)}
//                     aria-label={`Show image ${index + 1} of ${product.name}`}
//                   >
//                     <Photo src={src} alt="" />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="product-detail__info">
//             <span className="product-detail__category">{product.category}</span>
//             <h1 className="product-detail__title">{product.name}</h1>
//             <p className="product-detail__spec">{product.spec}</p>
//             <p className="product-detail__desc">{product.description}</p>

//             {product.applications?.length > 0 && (
//               <ul className="product-detail__applications">
//                 {product.applications.map((item) => (
//                   <li key={item}>
//                     <CheckIcon />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}

//             <div className="product-detail__actions">
//               <a href="/contact" className="product-detail__cta">
//                 Request a quote
//                 <ArrowIcon />
//               </a>
//               <a
//                 href="/catalog.pdf"
//                 className="product-detail__secondary"
//                 download
//               >
//                 Download datasheet
//               </a>
//             </div>
//           </div>
//         </div>

//         {product.specs?.length > 0 && (
//           <section className="product-detail__specs">
//             <h2>Specifications</h2>
//             <dl className="product-detail__specs-table">
//               {product.specs.map((row) => (
//                 <div className="product-detail__specs-row" key={row.label}>
//                   <dt>{row.label}</dt>
//                   <dd>{row.value}</dd>
//                 </div>
//               ))}
//             </dl>
//           </section>
//         )}

//         {related.length > 0 && (
//           <section className="product-detail__related">
//             <h2>Related products</h2>
//             <div className="product-detail__related-grid">
//               {related.map((item) => (
//                 <Link
//                   className="product-detail__related-card"
//                   to={item.href}
//                   key={item.id}
//                 >
//                   <Photo
//                     src={item.image}
//                     alt={item.name}
//                     className="product-detail__photo--related"
//                   />
//                   <div className="product-detail__related-body">
//                     <h3>{item.name}</h3>
//                     <p>{item.spec}</p>
//                   </div>
//                   <ArrowIcon className="product-detail__related-arrow" />
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}

//         <Link to="/production" className="product-detail__back">
//           <BackIcon />
//           Back to product catalog
//         </Link>
//       </div>
//     </main>
//   );
// };

// export default ProductDetail;


import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug, getRelatedProducts } from "../../static/index";

import "./productDetail.scss";

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

const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M19 12H5M5 12L12 19M5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
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

const Photo = ({ src, alt, className = "" }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`product-detail__photo ${className}`}>
      {failed ? (
        <TriangleMark className="product-detail__placeholder" />
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

const NotFound = () => (
  <main className="product-detail product-detail--empty">
    <div className="container">
      <h1>Товар не найден</h1>
      <p>Запрошенный товар не существует или был удалён.</p>
      <Link to="/production" className="product-detail__back">
        <BackIcon />
        Назад в каталог
      </Link>
    </div>
  </main>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <NotFound />;
  }

  const related = getRelatedProducts(product);
  const gallery = product.gallery?.length ? product.gallery : [product.image];

  return (
    <main className="product-detail">
      <div className="container">
        <nav className="product-detail__breadcrumb" aria-label="Навигация">
          <Link to="/">Главная</Link>
          <span>/</span>
          <Link to="/production">Продукция</Link>
          <span>/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="product-detail__top">
          <div className="product-detail__gallery">
            {gallery.length > 1 && (
              <div className="product-detail__thumbs">
                {gallery.map((src, index) => (
                  <button
                    type="button"
                    key={src + index}
                    className={
                      "product-detail__thumb" +
                      (index === activeImage
                        ? " product-detail__thumb--active"
                        : "")
                    }
                    style={{ "--i": index }}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Показать фото ${index + 1}: ${product.name}`}
                    aria-pressed={index === activeImage}
                  >
                    <Photo src={src} alt="" />
                  </button>
                ))}
              </div>
            )}

            <div className="product-detail__stage">
              <Photo
                key={activeImage}
                src={gallery[activeImage] || product.image}
                alt={product.name}
                className="product-detail__photo--main"
              />
              {gallery.length > 1 && (
                <span className="product-detail__counter">
                  {activeImage + 1} / {gallery.length}
                </span>
              )}
            </div>
          </div>

          <div className="product-detail__info">
            <span className="product-detail__category">{product.category}</span>
            <h1 className="product-detail__title">{product.name}</h1>
            <p className="product-detail__spec">{product.spec}</p>
            <p className="product-detail__desc">{product.description}</p>

            {product.applications?.length > 0 && (
              <ul className="product-detail__applications">
                {product.applications.map((item, i) => (
                  <li key={item} style={{ "--i": i }}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="product-detail__actions">
              <a href="/contact" className="product-detail__cta">
                Запросить предложение
                <ArrowIcon />
              </a>
              <a
                href="/catalog.pdf"
                className="product-detail__secondary"
                download
              >
                <DownloadIcon />
                Скачать даталист
              </a>
            </div>
          </div>
        </div>

        {product.specs?.length > 0 && (
          <section className="product-detail__specs">
            <h2>Технические характеристики</h2>
            <dl className="product-detail__specs-table">
              {product.specs.map((row) => (
                <div className="product-detail__specs-row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {related.length > 0 && (
          <section className="product-detail__related">
            <h2>Похожие товары</h2>
            <div className="product-detail__related-grid">
              {related.map((item) => (
                <Link
                  className="product-detail__related-card"
                  to={item.href}
                  key={item.id}
                >
                  <Photo
                    src={item.image}
                    alt={item.name}
                    className="product-detail__photo--related"
                  />
                  <div className="product-detail__related-body">
                    <h3>{item.name}</h3>
                    <p>{item.spec}</p>
                  </div>
                  <ArrowIcon className="product-detail__related-arrow" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link to="/production" className="product-detail__back">
          <BackIcon />
          Назад в каталог
        </Link>
      </div>
    </main>
  );
};

export default ProductDetail;