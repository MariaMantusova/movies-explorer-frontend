import React from "react";
import {Route, Routes} from "react-router-dom";
import Auth from "../Auth/Auth";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import HeaderMobile from "../Header/HeaderMobile";
import ErrorPage from "../ErrorPage/ErrorPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/sign-in"
                       element={<Auth header="Рады видеть!" button="Войти" text="Ещё не зарегистрированы?"
                                      link="Регистрация" class="auth__button_type_login" path="/sign-up"/>}/>
                <Route path="/sign-up" element={
                    <Auth header="Добро пожаловать!" button="Зарегистрироваться" text="Уже зарегистрированы?"
                          link="Войти" class="auth__button_type_register" path="/sign-in">
                        <label className="auth__label">Имя</label>
                        <input className="auth__input"/>
                        <p className="auth__input-error"></p>
                    </Auth>
                }>
                </Route>
                <Route path="/movies" element={<Movies/>} />
                <Route path="/saved-movies" element={<SavedMovies/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/mobile" element={<HeaderMobile/>} />
                <Route exact path="/" element={<Main/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </>
  );
}

export default App;
