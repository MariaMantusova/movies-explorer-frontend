import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <form className="search__container">
                <button className="search__button-magnifier"></button>
                <input className="search__header" placeholder="Фильм" />
                <button className="search__button">Найти</button>
            </form>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;
