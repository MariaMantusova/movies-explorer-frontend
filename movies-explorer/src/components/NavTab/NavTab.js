import React from "react";
import "./NavTab.css";
import {Link} from "react-router-dom";

function NavTab() {
    return (
        <nav className="nav-tab">
            <Link to="/about-project" className="nav-tab__link">
                О проекте
            </Link>
            <Link to="/techs" className="nav-tab__link">
                Технологии
            </Link>
            <Link to="/student" className="nav-tab__link">
                Студент
            </Link>
        </nav>
    )
}

export default NavTab;
