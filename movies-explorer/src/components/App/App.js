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
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [moviesFiltered, setMoviesFiltered] = React.useState([]);
    const [keyWord, setKeyWord] = React.useState("");
    const [updateSuccess, setUpdateSuccess] = React.useState("");

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

    React.useEffect(() => {
        authorized && mainApi.getSavedMovies()
            .then((moviesList) => {
                moviesList.filter((movie) => {
                   if (movie.owner === currentUser._id) {
                       return
                   }
                })
                setSavedMovies(moviesList);
            })
            .catch((err) => console.log(err))
    }, [authorized]);

    function handleKeyWordChange(e) {
        setKeyWord(e.target.value);
    }

    function handleSubmitFilterMovies() {
        setIsLoading(true);
        setMoviesFiltered(filterMovies)
        setIsLoading(false);
    }

    function filterMovies() {
        let filteredMovies = []

        if (keyWord === "") {
            return []
        }

        let key = keyWord

        if (localStorage.getItem("shortsStateMovies") !== null) {
            key += "_shorts"
        }

        if (localStorage.getItem(key) !== null) {
            JSON.parse(localStorage.getItem(key)).map((movie) => {
                filteredMovies.push(movie)
            })

            filteredMovies = showedFilms(filteredMovies)

            if ((localStorage.getItem("shortsStateMovies") !== null) && localStorage.getItem(keyWord) !== null) {
                filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40)
            }

            return filteredMovies
        }

        movies.forEach((movie) => {
            if (movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())
                || movie.director.toLowerCase().includes(keyWord.toLowerCase())
                || movie.description.toLowerCase().includes(keyWord.toLowerCase())) {
                filteredMovies.push(movie)
            }

            if (localStorage.getItem("shortsStateMovies") !== null) {
                filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40)
            }
        })

        localStorage.setItem(key, JSON.stringify(filteredMovies));

        filteredMovies = showedFilms(filteredMovies)

        return filteredMovies;
    }

    function showedFilms(filteredMovies) {
        let showedFilms = []
        filteredMovies.map((movie) => {
            let isFilmFound = false
            for (let i = 0; i < savedMovies.length; i++) {
                if (movie.id === savedMovies[i].movieId) {
                    movie.savedId = savedMovies[i]._id
                    showedFilms.push(movie);
                    isFilmFound = true
                    break;
                }
            }
            if (!isFilmFound) {
                movie.savedId = ""
                showedFilms.push(movie);
            }
        })


        return showedFilms;
    }

    function handleUpdateUser(name, email) {
        mainApi.changeUserInfo(name, email)
            .then((userInfo) => {
                setUpdateSuccess("ваши данные успешно обновлены!");
                setCurrentUser(userInfo);
                setTimeout(() => {
                    setUpdateSuccess("");
                }, 3000)
            })
            .catch((err) => {
                console.log(err)
                setUpdateSuccess("Произошла ошибка при изменении данных");
            })
    }

    function handleDeleteMovie(movieId) {
        mainApi.deleteMovie(movieId)
            .then((deletedMovie) => {
                setSavedMovies((state) => state.filter((m) => m.movieId !== deletedMovie.movieId));
                setMoviesFiltered((state) => state.map((m) => {
                    if (m.id === deletedMovie.movieId) {
                        m.savedId = ""
                    }
                    return m
                }))
            })
            .catch((err) => console.log(err));
    }

    function handleMovieSave(movie) {
        if (movie.savedId !== "") {
            handleDeleteMovie(movie.savedId);
        } else {
            mainApi.saveMovie(movie.country, movie.director, movie.duration, movie.year, movie.description, movie.image, movie.trailerLink,
                movie.nameRU, movie.nameEN, movie.image.formats.thumbnail, movie.id)
                .then((newMovie) => {
                    setMoviesFiltered((state) => state.map((m) => {
                        if (m.id === newMovie.movieId) {
                            m.savedId = newMovie._id
                        }
                        return m
                    }))
                    setSavedMovies([newMovie, ...savedMovies])
                })
                .catch((err) => console.log(err));
        }
    }

    function handleRegister(password, email, name, setData, data) {
        mainApi.registerUser(password, email, name)
            .then((res) => {
                if (res.statusCode !== 400 || res.statusCode !== 409) {
                    setData({
                        ...data
                    });
                    console.log(data, "register")
                    handleLogin(setData, data);
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
                    tokenCheck();
                }
                navigate("/movies", {replace: true});
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleLogOut() {
        setAuthorized(false);
        setCurrentUser({});
        localStorage.removeItem('jwt');
        navigate("/", {replace: true});
        tokenCheck();
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
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    function handleSetCheckboxMovies() {
        if (localStorage.getItem("shortsStateMovies") !== null) {
            localStorage.removeItem("shortsStateMovies");
        } else {
            localStorage.setItem("shortsStateMovies", "true")
        }
        handleSubmitFilterMovies();
    }

    function handleSetCheckboxSavedMovies() {
        if (localStorage.getItem("shortsStateSavedMovies") !== null) {
            localStorage.removeItem("shortsStateSavedMovies");
        } else {
            localStorage.setItem("shortsStateSavedMovies", "true")
        }
        handleSubmitFilterMovies();
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
                        <Movies onSaveClick={handleMovieSave} handleKeyChange={handleKeyWordChange} savedMovies={savedMovies}
                                setOnlyShorts={handleSetCheckboxMovies} setKeyWord={setKeyWord}
                                keyWord={keyWord} moviesFiltered={moviesFiltered} setMoviesFiltered={setMoviesFiltered} isLoading={isLoading} onSubmit={handleSubmitFilterMovies}
                        />
                    </ProtectedRoute>}
                />
                <Route path="/saved-movies" element={
                    <ProtectedRoute authorized={authorized}>
                        <SavedMovies handleKeyChange={handleKeyWordChange} onDeleteClick={handleDeleteMovie}
                                     setOnlyShorts={handleSetCheckboxSavedMovies} setIsLoading={setIsLoading} setKeyWord={setKeyWord}
                                     keyWord={keyWord} savedMovies={savedMovies} isLoading={isLoading}/>
                    </ProtectedRoute>}
                />
                <Route path="/profile" element={
                    <ProtectedRoute authorized={authorized}>
                        <Profile onChangingInfo={handleUpdateUser} onLogOut={handleLogOut} isUpdateSuccess={updateSuccess}/>
                    </ProtectedRoute>}
                />
                <Route exact path="/" element={<Main isAuthorized={authorized}/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;
