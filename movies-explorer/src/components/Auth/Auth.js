import React from "react";
import {Link} from "react-router-dom";
import logoImage from "../../images/logo.svg";
import "./Auth.css";
import {useInput} from "../../hooks/ValidationHook/ValidationHook";

function Auth(props) {
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 6});

    React.useEffect(() => {
        props.setData({
            email: email.value,
            password: password.value
        })
    }, [email.value, password.value])

    return (
        <section className="auth">
            <Link to="/">
                <img src={logoImage} alt="Логотип сайта" className="auth__logo"/>
            </Link>
            <h1 className="auth__header">{props.header}</h1>
            <form className="auth__form" onSubmit={props.submit}>
                {props.children}
                <label className="auth__label">E-mail</label>
                <input className="auth__input" type="email" value={email.value} name="email" onChange={email.onChange}
                       onBlur={email.onBlur}
                       pattern="^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$"
                       required/>
                {(email.isDirty && email.isEmpty) && <p className="auth__input-error">Поле не может быть пустым</p>}
                {(email.isDirty && email.emailError) && <p className="auth__input-error">Введен некорректный email</p>}
                <label className="auth__label">Пароль</label>
                <input className="auth__input" name="password" type="password" onChange={password.onChange}
                       onBlur={password.onBlur} value={password.value} required/>
                {(password.isDirty && password.isEmpty) &&
                <p className="auth__input-error">Поле не может быть пустым</p>}
                {(password.isDirty && password.minLengthError) &&
                <p className="auth__input-error">Пароль не может быть меньше 6 символов</p>}
                <button disabled={!password.inputValid || !email.inputValid} onSubmit={props.submit} className={`auth__button ${props.class}`}>{props.button}</button>
            </form>
            <div className="auth__register">
                <p className="auth__text">{props.text}</p>
                <Link to={props.path} className="auth__link">{props.link}</Link>
            </div>
        </section>
    )
}

export default Auth;
