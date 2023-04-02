import React from "react";
import "../Auth/Auth.css";
import {useInput} from "../../hooks/ValidationHook/ValidationHook";
import {Link} from "react-router-dom";
import logoImage from "../../images/logo.svg";

function Login(props) {
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 6});
    const [dataLogin, setDataLogin] = React.useState({
        email: "",
        password: ""
    });

    function handleSubmitLogin(evt) {
        evt.preventDefault();

        if (!dataLogin.password || !dataLogin.email) {
            return
        }

        props.handleLogin(setDataLogin, dataLogin);
    }

    React.useEffect(() => {
        setDataLogin({
            email: email.value,
            password: password.value
        })
    }, [email.value, password.value])

    return (
        <section className="auth">
            <Link to="/">
                <img src={logoImage} alt="Логотип сайта" className="auth__logo"/>
            </Link>
            <h1 className="auth__header">Рады видеть!</h1>
            <form className="auth__form" onSubmit={handleSubmitLogin}>
                <label className="auth__label">E-mail</label>
                <input className="auth__input" type="email" value={email.value} name="email" onChange={email.onChange}
                       onBlur={email.onBlur}
                       pattern="^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$"
                       required/>
                {(email.isDirty && email.isEmpty) && <p className="auth__input-error">Поле не может быть пустым</p>}
                {(email.isDirty && email.emailError && !email.isEmpty) && <p className="auth__input-error">Введен некорректный email</p>}
                <label className="auth__label">Пароль</label>
                <input className="auth__input" name="password" type="password" onChange={password.onChange}
                       onBlur={password.onBlur} value={password.value} required/>
                {(password.isDirty && password.isEmpty) &&
                <p className="auth__input-error">Поле не может быть пустым</p>}
                {(password.isDirty && password.minLengthError && !password.isEmpty) &&
                <p className="auth__input-error">Пароль не может быть меньше 6 символов</p>}
                <button disabled={!password.inputValid || !email.inputValid} className="auth__button auth__button_type_login">Войти</button>
            </form>
            <div className="auth__register">
                <p className="auth__text">Ещё не зарегистрированы?</p>
                <Link to="/sign-up" className="auth__link">Зарегитрироваться</Link>
            </div>
        </section>
    )

}

export default Login;
