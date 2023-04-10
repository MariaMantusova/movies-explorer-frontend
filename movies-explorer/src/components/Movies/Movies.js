import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import HeaderToMobile from "../Header/HeaderToMobile";
import HeaderBurger from "../Header/HeaderBurger";

function Movies(props) {
    React.useEffect(() => {
        if (localStorage.getItem("keyWord") !== null) {
            props.onOpeningPage();
            props.setMoviesFiltered(filterMoviesClass);
            props.setKeyWord(localStorage.getItem("keyWord"));
            localStorage.getItem("shortsStateMovies");
        } else {
            props.setMoviesFiltered(props.moviesFiltered)
        }
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem("keyWord") !== null) {
            props.setMoviesFiltered(filterMoviesClass);
        } else {
            props.setMoviesFiltered(props.moviesFiltered)
        }
    }, [props.savedMovies])

    function filterMoviesClass() {
        let key = localStorage.getItem("keyWord");
        let showedFilms = [];

        if (localStorage.getItem("shortsStateMovies") !== null) {
            key += "_shorts"
        }

        JSON.parse(localStorage.getItem(key)).map((movie) => {
            let isFilmFound = false;

            for (let i = 0; i < props.savedMovies.length; i++) {
                if (movie.id === props.savedMovies[i].movieId) {
                    movie.savedId = props.savedMovies[i]._id
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

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onSubmit();
        localStorage.setItem("keyWord", props.keyWord);
        if (localStorage.getItem("keyWord") === "") {
            localStorage.removeItem("keyWord")
        }
    }

    return (
        <>
            <HeaderToMobile/>
            <HeaderBurger/>
            <section className="movies">
                <SearchForm handleChange={props.handleKeyChange} value={props.keyWord} onSubmit={handleSubmit}
                            onClick={props.setOnlyShorts} state="shortsStateMovies"/>
                <MoviesCardList class="movie__save-button_active" keyWord={props.keyWord}
                                movies={props.moviesFiltered}
                                isLoading={props.isLoading} savedMovies={props.savedMovies}
                                saveMovie={props.onSaveClick} state={localStorage.getItem("keyWord") !== null}>
                    {props.moviesFiltered.length <= 0 && !props.isLoading && localStorage.getItem("keyWord") === null &&
                    <h2 className="movies__text">Вы еще не искали фильмы</h2>}
                </MoviesCardList>
            </section>
            <Footer/>
        </>
    )
}

export default Movies;
