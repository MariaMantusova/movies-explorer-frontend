import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div className="filter">
            <div className="filter__checkbox-custom">
                <input type="checkbox" className="filter__checkbox"/>
            </div>
            <p className="filter__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;
