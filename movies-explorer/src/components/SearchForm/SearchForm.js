import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    function handleSubmit(evt) {
        evt.preventDefault();

        props.onSubmit();
        localStorage.setItem("keyWord", props.value);
    }

    return (
        <section className="search">
            <form className="search__container" onSubmit={handleSubmit}>
                <button className="search__button-magnifier"></button>
                <input className="search__header" onChange={props.handleChange} pattern="^[a-zа-яёA-ZА-ЯЁ1-9/gi]+" value={props.value || ""} placeholder="Фильм" />
                <button className="search__button">Найти</button>
            </form>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;
