import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import {mainApi} from "../../utils/MainApi";
import Login from "../Login/Login";
import {moviesApi} from "../../utils/MoviesApi";

function App() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = React.useState({});
    const [authorized, setAuthorized] = React.useState(false);
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        authorized && mainApi.getUserInfo()
            .then((user) => {
                setCurrentUser(user.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [authorized]);

    React.useEffect(() => {
        authorized && moviesApi.getMovies()
            .then((moviesList) => {
                setMovies(moviesList)
            })
            .catch((err) => console.log(err))
    }, [authorized]);

    function handleUpdateUser(name, email) {
        mainApi.changeUserInfo(name, email)
            .then((userInfo) => {
                setCurrentUser(userInfo);
            })
            .catch((err) => console.log(err))
    }

    function handleRegister(password, email, name, setData, data) {
        mainApi.registerUser(password, email, name)
            .then((res) => {
                if (res.statusCode !== 400) {
                    setData({
                        ...data
                    });
                    navigate("/sign-in", {replace: true});
                }

                if (res.message) {
                    console.log(res.message);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleLogin(setData, data) {
        mainApi.authorizeUser(data.password, data.email)
            .then((res) => {
                if (res.token) {
                    setData({email: '', password: ''})
                    localStorage.setItem('jwt', res.token);
                    navigate("/movies");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        tokenCheck();
    },[])

    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            mainApi.validityCheck(jwt)
                .then((res) => {
                    if (res) {
                        setAuthorized(true);
                        navigate("/movies", {replace: true})
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes>
                <Route path="/sign-in"
                       element={<Login handleLogin={handleLogin}/>}/>
                <Route path="/sign-up" element={<Register handleRegister={handleRegister}/>}>
                </Route>
                <Route path="/movies" element={
                    <ProtectedRoute authorized={authorized}>
                        <Movies getMovies={movies}/>
                    </ProtectedRoute>}
                />
                <Route path="/saved-movies" element={
                    <ProtectedRoute authorized={authorized}>
                        <SavedMovies/>
                    </ProtectedRoute>}
                />
                <Route path="/profile" element={
                    <ProtectedRoute authorized={authorized}>
                        <Profile onChangingInfo={handleUpdateUser}/>
                    </ProtectedRoute>}
                />
                <Route exact path="/" element={<Main/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;
