import React from "react";
import vectorLink from "../../images/link.svg";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <ul className="portfolio__links">
                <li>
                    <a className="portfolio__link" href="https://mariamantusova.github.io/how-to-learn/" target="_blank"
                       rel="noreferrer">
                        <h2 className="portfolio__link-name">Статичный сайт</h2>
                        <img className="portfolio__link-vector" src={vectorLink} alt="кнопка-стрелка"/>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link" href="https://mariamantusova.github.io/russian-travel/"
                       target="_blank"
                       rel="noreferrer">
                        <h2 className="portfolio__link-name">Адаптивный сайт</h2>
                        <img className="portfolio__link-vector" src={vectorLink} alt="кнопка-стрелка"/>
                    </a>
                </li>
                <li>
                    <a className="portfolio__link" href="https://mariamantusova.github.io/mesto/" target="_blank"
                       rel="noreferrer">
                        <h2 className="portfolio__link-name">Одностраничное приложение</h2>
                        <img className="portfolio__link-vector" src={vectorLink} alt="кнопка-стрелка"/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
