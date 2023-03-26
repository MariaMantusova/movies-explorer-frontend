import React from "react";
import {Route, Routes} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Auth from "../Auth/Auth";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProtectedRoute from "../ProtectedRoute";

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [authorized, setAuthorized] = React.useState(false);

    return (
        <CurrentUserContext.Provider value={currentUser}>
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
                <Route path="/movies" element={
                    <ProtectedRoute authorized={authorized}>
                        <Movies/>
                    </ProtectedRoute>}
                />
                <Route path="/saved-movies" element={
                    <ProtectedRoute authorized={authorized}>
                        <SavedMovies/>
                    </ProtectedRoute>}
                />
                <Route path="/profile" element={
                    <ProtectedRoute authorized={authorized}>
                        <Profile/>
                    </ProtectedRoute>}
                />
                <Route exact path="/" element={<Main/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;
