import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
    return (
        <div className="filter">
            <div onClick={props.onClick} className={`filter__checkbox-custom ${localStorage.getItem("shortsState") === null && "filter__checkbox-custom_disabled"}`}>
                <input type="checkbox" className="filter__checkbox"/>
            </div>
            <p className="filter__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;
