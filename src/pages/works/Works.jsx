// import React, { useState } from 'react'
// import img from "../../assets/images/works.png"
// import "./works.scss"

// const vacancies = [
//     {
//         id: 'production-engineer',
//         icon: 'gear',
//         title: 'Инженер по производству',
//         summary: 'Помогайте нам улучшать и масштабировать производственные процессы.',
//     },
//     {
//         id: 'quality-specialist',
//         icon: 'shield',
//         title: 'Специалист по качеству',
//         summary: 'Обеспечивайте высочайшие стандарты на каждом этапе сборки.',
//     },
//     {
//         id: 'operator',
//         icon: 'people',
//         title: 'Оператор производства',
//         summary: 'Станьте частью нашей производственной команды.',
//     },
// ]

// const icons = {
//     gear: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//             <circle cx="12" cy="12" r="3.2" />
//             <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
//         </svg>
//     ),
//     shield: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//             <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
//             <path d="M9 12l2 2 4-4" />
//         </svg>
//     ),
//     people: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//             <circle cx="8.5" cy="8" r="2.6" />
//             <circle cx="16" cy="9" r="2.1" />
//             <path d="M3.5 19c.5-3 2.5-4.6 5-4.6s4.5 1.6 5 4.6M14.5 19c.4-2.3 1.8-3.6 3.7-3.6 1.6 0 2.9.9 3.5 2.4" />
//         </svg>
//     ),
// }

// const Works = () => {
//     const [fileName, setFileName] = useState('Файл не выбран')

//     const handleFile = (e) => {
//         const f = e.target.files?.[0]
//         setFileName(f ? f.name : 'Файл не выбран')
//     }

//     return (
//         <div className="works">
//             <section className="works__hero" style={{ backgroundImage: `url(${img})` }}>
//                 <div className="works__hero-overlay ">
//                     <div className="works__hero-content container">
//                         <span className="works__eyebrow">Карьера в Interior Mega Max</span>
//                         <h1 className="works__headline">Стройте своё будущее вместе с нами.</h1>
//                         <p className="works__subtext">
//                             Присоединяйтесь к команде, которая формирует будущее решений
//                             для автомобильных интерьеров.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="works__list container">
//                 <div className="works__list-head">
//                     <h2>Примеры вакансий</h2>
//                 </div>

//                 <ul className="works__vacancies">
//                     {vacancies.map((v) => (
//                         <li className="works__vacancy" key={v.id}>
//                             <span className="works__vacancy-icon">{icons[v.icon]}</span>
//                             <span className="works__vacancy-title">{v.title}</span>
//                             <span className="works__vacancy-summary">{v.summary}</span>
//                             <a href={`#${v.id}`} className="works__link works__link--small">
//                                 Открыть <span>→</span>
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </section>

//             <section className="works__detail container">
//                 <div className="works__detail-info">
//                     <h3>Инженер по производству</h3>
//                     <p className="works__detail-lead">
//                         Присоединяйтесь к нашей команде и участвуйте в разработке
//                         эффективных и качественных производственных процессов.
//                     </p>

//                     <h4>Обязанности</h4>
//                     <ul>
//                         <li>Поддержка и оптимизация производственных процессов</li>
//                         <li>Работа с кросс-функциональными командами</li>
//                         <li>Выявление и внедрение возможностей для улучшений</li>
//                     </ul>

//                     <h4>Требования</h4>
//                     <ul>
//                         <li>Профильное техническое образование (например, инженерное)</li>
//                         <li>Развитые навыки решения проблем</li>
//                         <li>Командный игрок с проактивным настроем</li>
//                     </ul>
//                 </div>

//                 <form className="works__form" onSubmit={(e) => e.preventDefault()}>
//                     <h3>Откликнуться на вакансию</h3>

//                     <label className="works__field">
//                         <span>Имя и фамилия</span>
//                         <input type="text" name="fullName" placeholder="Иван Иванов" />
//                     </label>

//                     <label className="works__field">
//                         <span>Email</span>
//                         <input type="email" name="email" placeholder="ivan@example.com" />
//                     </label>

//                     <label className="works__field">
//                         <span>Телефон</span>
//                         <input type="tel" name="phone" placeholder="+998 ..." />
//                     </label>

//                     <div className="works__field">
//                         <span>Загрузите резюме</span>
//                         <label className="works__upload">
//                             <span className="works__upload-btn">Выбрать файл</span>
//                             <span className="works__upload-name">{fileName}</span>
//                             <input type="file" onChange={handleFile} hidden />
//                         </label>
//                     </div>

//                     <button type="submit" className="works__submit">
//                         Отправить заявку <span>→</span>
//                     </button>
//                 </form>
//             </section>
//         </div>
//     )
// }

// export default Works


import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/images/works.png"
import { vacancies } from '../../static/index'
import "./works.scss"

const icons = {
    gear: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="3.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
        </svg>
    ),
    shield: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    ),
    people: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="8.5" cy="8" r="2.6" />
            <circle cx="16" cy="9" r="2.1" />
            <path d="M3.5 19c.5-3 2.5-4.6 5-4.6s4.5 1.6 5 4.6M14.5 19c.4-2.3 1.8-3.6 3.7-3.6 1.6 0 2.9.9 3.5 2.4" />
        </svg>
    ),
}

const Works = () => {
    return (
        <div className="works">
            <section className="works__hero" style={{ backgroundImage: `url(${img})` }}>
                <div className="works__hero-overlay ">
                    <div className="works__hero-content container">
                        <span className="works__eyebrow">Карьера в Interior Mega Max</span>
                        <h1 className="works__headline">Стройте своё будущее вместе с нами.</h1>
                        <p className="works__subtext">
                            Присоединяйтесь к команде, которая формирует будущее решений
                            для автомобильных интерьеров.
                        </p>
                    </div>
                </div>
            </section>

            <section className="works__list container">
                <div className="works__list-head">
                    <h2>Примеры вакансий</h2>
                </div>

                <ul className="works__vacancies">
                    {vacancies.map((v) => (
                        <li className="works__vacancy" key={v.id}>
                            <span className="works__vacancy-icon">{icons[v.icon]}</span>
                            <span className="works__vacancy-title">{v.title}</span>
                            <span className="works__vacancy-summary">{v.summary}</span>
                            <Link to={`/vacancies/${v.id}`} className="works__link works__link--small">
                                Открыть <span>→</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Works