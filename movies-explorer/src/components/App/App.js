import React from "react";
import {Route, Routes} from "react-router-dom";
import Auth from "../Auth/Auth";
import AboutProject from "../AboutProject/AboutProject";

function App() {
    return (
        <>
            <Routes>
                <Route path="/sign-in"
                       element={<Auth header="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?"
                                      link="Регистрация" class="auth__button_type_login"/>}/>
                <Route path="/sign-up" element={
                    <Auth header="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?"
                          link="Войти" class="auth__button_type_register">
                        <label className="auth__label">Имя</label>
                        <input className="auth__input"/>
                        <p className="auth__input-error"></p>
                    </Auth>
                }>
                </Route>
                <Route path="/movies">

                </Route>
                <Route path="/saved-movies">

                </Route>
                <Route path="/profile">

                </Route>
                <Route exact path="/" element={<AboutProject/>} />
            </Routes>
        </>
  );
}

export default App;
