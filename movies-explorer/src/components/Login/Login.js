import React from "react";
import Auth from "../Auth/Auth";

function Login(props) {
    const [dataLogin, setDataLogin] = React.useState({
        email: "",
        password: ""
    });

    function handleSubmitLogin(evt) {
        evt.preventDefault();

        let {email, password, name} = dataLogin;
        props.handleLogin(password, email, name, setDataLogin, dataLogin);
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        setDataLogin({
            ...dataLogin,
            [name]: value,
        })
    }

    return(
        <Auth header="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?"
              link="Регистрация" class="auth__button_type_login" path="/sign-up" submit={handleSubmitLogin}
              inputsChanges={handleChange} data={dataLogin}/>
    )

}

export default Login;
