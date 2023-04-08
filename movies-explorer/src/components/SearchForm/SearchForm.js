import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    return (
        <section className="search">
            <form className="search__container" onSubmit={props.onSubmit}>
                <button className="search__button-magnifier"></button>
                <input className="search__header" onChange={props.handleChange} pattern="^[a-zа-яёA-ZА-ЯЁ1-9/gi]+"
                       value={props.value || ""} placeholder="Фильм" />
                <button className="search__button">Найти</button>
            </form>
            <FilterCheckbox onClick={props.onClick} state={props.state}/>
        </section>
    )
}

export default SearchForm;
