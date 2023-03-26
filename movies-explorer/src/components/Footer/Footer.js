import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__year">&#169;&nbsp;2023</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/MariaMantusova/">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
