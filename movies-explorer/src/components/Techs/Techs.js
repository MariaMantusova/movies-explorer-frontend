import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <div className="techs-around" id="techs">
            <section className="techs">
                <h3 className="techs__header">Технологии</h3>
                <h2 className="techs__count">7 технологий</h2>
                <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                    проекте.</p>
                <div className="techs__container">
                    <a href="https://developer.mozilla.org/ru/docs/Web/HTML" className="techs__name" target="_blank"
                       rel="noreferrer">HTML</a>
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS" className="techs__name" target="_blank"
                       rel="noreferrer">CSS</a>
                    <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" className="techs__name"
                       target="_blank"
                       rel="noreferrer">JS</a>
                    <a href="https://reactjs.org/" className="techs__name" target="_blank" rel="noreferrer">React</a>
                    <a href="https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/GitHub"
                       className="techs__name"
                       target="_blank" rel="noreferrer">Git</a>
                    <a href="https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs"
                       className="techs__name"
                       target="_blank" rel="noreferrer">Express.js</a>
                    <a href="https://www.mongodb.com/" className="techs__name" target="_blank"
                       rel="noreferrer">mongoDB</a>
                </div>
            </section>
        </div>
    )
}

export default Techs;
