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

        if (localStorage.getItem(keyWord) !== null) {
            JSON.parse(localStorage.getItem(keyWord)).map((movie) => {
                filteredMovies.push(movie)
            })

            return filteredMovies
        }

        movies.filter((movie) => {
            if (movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || movie.nameEN.toLowerCase().includes(keyWord.toLowerCase())
                || movie.director.toLowerCase().includes(keyWord.toLowerCase())
                || movie.description.toLowerCase().includes(keyWord.toLowerCase())) {
                filteredMovies.push(movie)
            }
        })

        filteredMovies = showedFilms(filteredMovies)
        localStorage.setItem(keyWord, JSON.stringify(filteredMovies));

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
                setCurrentUser(userInfo);
            })
            .catch((err) => console.log(err))
    }

    function handleMovieSave(movie) {
        if (movie.savedId !== "") {
            mainApi.deleteMovie(movie.savedId)
                .then((deletedMovie) => {
                    setSavedMovies((state) => state.filter((m) => m.id !== deletedMovie.movieId));
                    setMoviesFiltered((state) => state.map((m) => {
                        if (m.id === deletedMovie.movieId) {
                            m.savedId = ""
                        }
                        return m
                    }))
                })
                .catch((err) => console.log(err));
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
                        <Movies onSaveClick={handleMovieSave} handleKeyChange={handleKeyWordChange} savedMovies={savedMovies}
                                keyWord={keyWord} moviesFiltered={moviesFiltered} isLoading={isLoading} onSubmit={handleSubmitFilterMovies}
                        />
                    </ProtectedRoute>}
                />
                <Route path="/saved-movies" element={
                    <ProtectedRoute authorized={authorized}>
                        <SavedMovies handleKeyChange={handleKeyWordChange}
                                     keyWord={keyWord} savedMovies={savedMovies} isLoading={isLoading}/>
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
