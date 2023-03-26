import React from "react";
import "./AboutMe.css";
import studentPhoto from "../../images/student-photo.jpeg";

function AboutMe() {
    return (
        <section className="student" id="student">
            <h3 className="student__header">Студент</h3>
            <div className="student__container">
                <div className="student__info-container">
                    <h2 className="student__name">Мария</h2>
                    <h4 className="student__about">Frontend-разработчик, 19 лет</h4>
                    <p className="student__info">Я живу в Москве, училась в РГСУ на юридическом и спустя первые годы
                        обучения, поняла, что двигаюсь не в том направлении, которое мне интересно. Мое окружение
                        состоит из
                        людей, кто работает в IT сфере, мне стало интересно поизучать, углубиться в эту тему, ведь
                        технические
                        науки мне всегда были интереснее. Так я открыла для себя фронтенд-разработку. Сейчас я нахожусь
                        в поиске постоянной работы, и выполняю фриланс заказы.</p>
                    <a href="https://github.com/MariaMantusova" className="student__git">Github</a>
                </div>
                <img className="student__image" src={studentPhoto} alt="фото студента"/>
            </div>
        </section>
    )
}

export default AboutMe;
