import React from "react";
import {Link} from "react-router-dom";
import logoImage from "../../images/logo.svg";
import "./Auth.css";

function Auth(props) {
    return (
        <section className="auth">
            <Link to="/">
                <img src={logoImage} alt="Логотип сайта" className="auth__logo"/>
            </Link>
            <h1 className="auth__header">{props.header}</h1>
            <form className="auth__form" onSubmit={props.submit} >
                {props.children}
                <label className="auth__label">E-mail</label>
                <input className="auth__input" type="email" value={props.data.email || ""} name="email"
                       pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" onChange={props.inputsChanges} required/>
                <p className="auth__input-error"></p>
                <label className="auth__label">Пароль</label>
                <input className="auth__input" name="password" type="password" onChange={props.inputsChanges} value={props.data.password || ""} required/>
                <p className="auth__input-error"></p>
                <button className={`auth__button ${props.class}`}>{props.button}</button>
            </form>
            <div className="auth__register">
                <p className="auth__text">{props.text}</p>
                <Link to={props.path} className="auth__link">{props.link}</Link>
            </div>
        </section>
    )
}

export default Auth;
