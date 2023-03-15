import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <div className="search__container">
                <button className="search__button-magnifier"></button>
                <h1 className="search__header">Фильм</h1>
                <button className="search__button">Найти</button>
            </div>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;
