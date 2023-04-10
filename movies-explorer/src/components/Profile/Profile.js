import React from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import "../Header/Header.css";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useInput} from "../../hooks/ValidationHook/ValidationHook";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('name');
    const [email, setEmail] = React.useState('email@mail.ru');
    const [disableButton, setDisableButton] = React.useState(false);
    const nameValid = useInput(name, {isEmpty: false, isName: true});
    const emailValid = useInput(email, {isEmpty: false, isEmail: true});

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [])

    React.useEffect(() => {
        nameValid.value = currentUser.name;
        emailValid.value = currentUser.email;
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    React.useEffect(() => {
        setName(nameValid.value)
    }, [nameValid.value])

    React.useEffect(() => {
        setEmail(emailValid.value)
    }, [emailValid.value])

    React.useEffect(() => {
        if (nameValid.value !== currentUser.name || emailValid.value !== currentUser.email) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [nameValid.value, emailValid.value])

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onChangingInfo(name, email);
        setDisableButton(true);
    }

    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="profile">
                <h1 className="profile__header">Привет, {name}!</h1>
                {props.isUpdateSuccess !== "" && <p className="profile__info-text">{name}, {props.isUpdateSuccess}</p>}
                <form className="profile__form" onSubmit={handleSubmit}>
                    {(nameValid.isDirty && nameValid.isEmpty) && <p className="auth__input-error">Поле не может быть пустым</p>}
                    {(nameValid.isDirty && nameValid.nameError && !nameValid.isEmpty) && <p className="auth__input-error">Данное имя нельзя использовать</p>}
                    <div className="profile__input-container profile__input-container_type_top">
                        <label className="profile__label">Имя
                        </label>
                        <input className="profile__input" name="name" pattern="^[a-zа-яёA-ZА-ЯЁ\-\s/i]+" type="text"
                               onChange={nameValid.onChange} onBlur={nameValid.onBlur} value={name}/>
                    </div>
                    {(emailValid.isDirty && emailValid.isEmpty) && <p className="profile__input-error">Поле не может быть пустым</p>}
                    {(emailValid.isDirty && emailValid.emailError && !emailValid.isEmpty) && <p className="profile__input-error">Введен некорректный email</p>}
                    <div className="profile__input-container profile__input-container_type_bottom">
                        <label className="profile__label">E-mail</label>
                        <input className="profile__input" type="email" name="email"
                               pattern="^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-z]{2,6}$"
                               onChange={emailValid.onChange} onBlur={emailValid.onBlur} value={email}/>
                    </div>
                    <button className={`profile__button ${(disableButton || !emailValid.inputValid || !nameValid.inputValid) && "profile__button_type_disabled"}`} disabled={disableButton || !emailValid.inputValid || !nameValid.inputValid}>Редактировать</button>
                </form>
                <Link to="/" className="profile__link" onClick={props.onLogOut}>Выйти из аккаунта</Link>
            </section>
        </>
    )
}

export default Profile;
