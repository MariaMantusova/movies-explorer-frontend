import React from "react";
import "./ErrorPage.css";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <section className="error">
            <h1 className="error__header">404</h1>
            <h2 className="error__caption">Страница не найдена</h2>
            <Link to="/project" className="error__link">Назад</Link>
        </section>
    )
}

export default ErrorPage;
