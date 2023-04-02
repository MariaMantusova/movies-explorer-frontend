import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [moviesPerPage, setMoviesPerPage] = React.useState(7);
    const setWindowDimensions = () => {
        if (document.documentElement.clientWidth > 450) {
            setMoviesPerPage(7)
        } else if (document.documentElement.clientWidth < 450) {
            setMoviesPerPage(5)
        }
    }

    React.useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
    }, [])

    const lastMovieIndex = currentPage * moviesPerPage;
    const currentMovie = props.movies.slice(0, lastMovieIndex);

    function paginate() {
        setCurrentPage(prevState => prevState + 1);
    }

    return (
        <section className="movies">
            {props.movies.length <= 0 && !props.isLoading && <h2 className="movies__text">Не найдено фильмов для отображения</h2>}
            {props.isLoading && <Preloader/>}
            <ul className="movies__items">
                {currentMovie.map((movie, index) => (
                    <li className="movies__item" key={index}>
                        <a className="movies__item-link" href={movie.trailerLink} target="_blank">
                        <MoviesCard movies={props.movies} movie={movie} key={index}
                                    saveClick={props.saveMovie}/>
                        </a>
                    </li>
            ))}
            </ul>
            {(props.movies.length > 7 && lastMovieIndex !== props.movies.length) && <button className="movies__adding-button" onClick={paginate}>Ещё</button>}
        </section>
    )

}

export default MoviesCardList;
