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
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [disableButton, setDisableButton] = React.useState(false);
    const nameValid = useInput('', {isEmpty: false, isName: true});
    const emailValid = useInput('', {isEmpty: false, isEmail: true});

    React.useEffect(() => {
        nameValid.value = currentUser.name;
        emailValid.value = currentUser.email;
    }, [currentUser]);

    React.useEffect(() => {
        setName(nameValid.value)
    }, [nameValid.value])

    React.useEffect(() => {
        setEmail(emailValid.value)
    }, [emailValid.value])

    React.useEffect(() => {
        if (nameValid.value === currentUser.name && emailValid.value === currentUser.email) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [nameValid.value, emailValid.value])

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onChangingInfo(name, email);
    }

    function logOut() {
        localStorage.removeItem('jwt');
    }

    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="profile">
                <h1 className="profile__header">Привет, {name}!</h1>
                <form className="profile__form" onSubmit={handleSubmit}>
                    {(nameValid.isDirty && nameValid.isEmpty) && <p className="auth__input-error">Поле не может быть пустым</p>}
                    {(nameValid.isDirty && nameValid.nameError && !nameValid.isEmpty) && <p className="auth__input-error">Данное имя нельзя использовать</p>}
                    <div className="profile__input-container profile__input-container_type_top">
                        <label className="profile__label">Имя</label>
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
                    <button className={`profile__button ${(!nameValid.inputValid || !emailValid.inputValid || disableButton) && "profile__button_type_disabled"}`} disabled={!nameValid.inputValid || !emailValid.inputValid || disableButton}>Редактировать</button>
                </form>
                <Link to="/" className="profile__link" onClick={logOut}>Выйти из аккаунта</Link>
            </section>
        </>
    )
}

export default Profile;
