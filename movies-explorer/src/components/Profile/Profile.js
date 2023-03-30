import React from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
import "../Header/Header.css";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

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
                    <div className="profile__input-container profile__input-container_type_top">
                        <label className="profile__label">Имя</label>
                        <input className="profile__input" name="name" pattern="^[a-zа-яёA-ZА-ЯЁ\-\s/i]+" type="text"
                               onChange={handleChangeName} value={name || ""}/>
                    </div>
                    <div className="profile__input-container profile__input-container_type_bottom">
                        <label className="profile__label">E-mail</label>
                        <input className="profile__input" type="email" name="email"
                               pattern="^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-z]{2,6}$"
                               onChange={handleChangeEmail} value={email || ""}/>
                    </div>
                    <button className="profile__button">Редактировать</button>
                </form>
                <Link to="/" className="profile__link" onClick={logOut}>Выйти из аккаунта</Link>
            </section>
        </>
    )
}

export default Profile;
