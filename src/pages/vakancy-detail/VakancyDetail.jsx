import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./vakancyDetail.scss"
import { getVacancyById } from '../../static'

const VacancyDetail = () => {
    const { id } = useParams()
    const vacancy = getVacancyById(id)
    const [fileName, setFileName] = useState('Файл не выбран')

    const handleFile = (e) => {
        const f = e.target.files?.[0]
        setFileName(f ? f.name : 'Файл не выбран')
    }

    if (!vacancy) {
        return (
            <div className="vacancy-detail container">
                <p className="vacancy-detail__not-found">Вакансия не найдена.</p>
                <Link to="/vacancies" className="vacancy-detail__back">
                    ← Все вакансии
                </Link>
            </div>
        )
    }

    return (
        <div className="vacancy-detail">
            <div className="vacancy-detail__head container">
                <Link to="/vacancies" className="vacancy-detail__back">
                    ← Все вакансии
                </Link>
                <h1>{vacancy.title}</h1>
                <p className="vacancy-detail__summary">{vacancy.summary}</p>
            </div>

            <section className="vacancy-detail__body container">
                <div className="vacancy-detail__info">
                    <p className="vacancy-detail__lead">{vacancy.description}</p>

                    <h4>Обязанности</h4>
                    <ul>
                        {vacancy.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <h4>Требования</h4>
                    <ul>
                        {vacancy.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <form className="vacancy-detail__form" onSubmit={(e) => e.preventDefault()}>
                    <h3>Откликнуться на вакансию</h3>

                    <label className="vacancy-detail__field">
                        <span>Имя и фамилия</span>
                        <input type="text" name="fullName" placeholder="Иван Иванов" />
                    </label>

                    <label className="vacancy-detail__field">
                        <span>Email</span>
                        <input type="email" name="email" placeholder="ivan@example.com" />
                    </label>

                    <label className="vacancy-detail__field">
                        <span>Телефон</span>
                        <input type="tel" name="phone" placeholder="+998 ..." />
                    </label>

                    <div className="vacancy-detail__field">
                        <span>Загрузите резюме</span>
                        <label className="vacancy-detail__upload">
                            <span className="vacancy-detail__upload-btn">Выбрать файл</span>
                            <span className="vacancy-detail__upload-name">{fileName}</span>
                            <input type="file" onChange={handleFile} hidden />
                        </label>
                    </div>

                    <button type="submit" className="vacancy-detail__submit">
                        Отправить заявку <span>→</span>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default VacancyDetail