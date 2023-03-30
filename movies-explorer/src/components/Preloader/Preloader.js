import React from "react";
import "./Preloader.css";
import preloader from "../../images/preloader.svg";

function Preloader() {
    return(
        <section className="preloader-page">
            <img className="preloader" src={preloader} alt="Загрузка страницы"/>
        </section>
    )
}

export default Preloader;
