import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo(props) {
    return(
        <section className="promo">
            <h1 className="promo__header">Учебный проект студента&nbsp;факультета Веб-разработки.</h1>
            <NavTab onClickAboutProject={props.onClickAboutProject} onClickTechs={props.onClickTechs}
                    onClickStudent={props.onClickStudent} />
        </section>
    )
}

export default Promo;
