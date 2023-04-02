import React from "react";
import {useInput} from "../../hooks/ValidationHook/ValidationHook";
import {Link} from "react-router-dom";
import logoImage from "../../images/logo.svg";

function Register(props) {
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 6});
    const name = useInput('', {isEmpty: true, isName: true});
    const  [dataRegister, setDataRegister] = React.useState({
        email: "",
        password: "",
        name: ""
    });

    function handleSubmitRegister(evt) {
        evt.preventDefault();

        let {email, password, name} = dataRegister;
        props.handleRegister(password, email, name, setDataRegister, dataRegister);
    }

    React.useEffect(() => {
        setDataRegister({
            email: email.value,
            password: password.value,
            name: name.value
        })
    }, [email.value, password.value, name.value])

    return (
        <section className="auth">
            <Link to="/">
                <img src={logoImage} alt="Логотип сайта" className="auth__logo"/>
            </Link>
            <h1 className="auth__header">Добро пожаловать!</h1>
            <form className="auth__form" onSubmit={handleSubmitRegister}>
                <label className="auth__label">Имя</label>
                <input className="auth__input" name="name" pattern="^[a-zа-яёA-ZА-ЯЁ\-\s/i]+" onChange={name.onChange}
                       onBlur={name.onBlur} value={name.value} required/>
                {(name.isDirty && name.isEmpty) && <p className="auth__input-error">Поле не может быть пустым</p>}
                {(name.isDirty && name.nameError && !name.isEmpty) && <p className="auth__input-error">Данное имя нельзя использовать</p>}
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
                <button disabled={!password.inputValid || !email.inputValid} className={`auth__button auth__button_type_login ${(!password.inputValid || !email.inputValid) && "auth__button_type_disabled"}`}>Зарегистрироваться</button>
            </form>
            <div className="auth__register">
                <p className="auth__text">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="auth__link">Войти</Link>
            </div>
        </section>
    )

}

export default Register;
