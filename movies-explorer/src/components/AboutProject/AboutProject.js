import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <h3 className="about-project__header">О проекте</h3>
            <div className="about-project__container">
                <div className="about-project__info-container">
                    <h4 className="about-project__info-header">Дипломный проект включал 5 этапов</h4>
                    <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__info-container">
                    <h4 className="about-project__info-header">На выполнение диплома ушло 5 недель</h4>
                    <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                        было
                        соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__timeline">
                <p className="about-project__timeline-info about-project__timeline-info_type_one-week">1 неделя</p>
                <p className="about-project__timeline-info about-project__timeline-info_type_four-week">4 недели</p>
                <p className="about-project__timeline-info about-project__timeline-info_type_stage">Back-end</p>
                <p className="about-project__timeline-info about-project__timeline-info_type_stage">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
