import React from "react";
import Auth from "../Auth/Auth";

function Register(props) {
    const [dataRegister, setDataRegister] = React.useState({
        email: "",
        password: "",
        name: ""
    });

    function handleSubmitRegister(evt) {
        evt.preventDefault();

        let {email, password, name} = dataRegister;
        props.handleRegister(password, email, name, setDataRegister, dataRegister);
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        setDataRegister({
            ...dataRegister,
            [name]: value,
        })
    }

    function handleSubmit(evt) {
            handleSubmitRegister(evt);
    }

    return (
        <Auth header="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?"
              link="Войти" class="auth__button_type_register" path="/sign-in" submit={handleSubmit}
              inputsChanges={handleChange} data={dataRegister}>
            <label className="auth__label">Имя</label>
            <input className="auth__input" name="name" pattern="^[a-zа-яё\-\s]+" onChange={handleChange} value={dataRegister.name || ""} required/>
            <p className="auth__input-error"></p>
        </Auth>
    )

}

export default Register;
