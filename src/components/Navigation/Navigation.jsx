import React from "react";
import {NavLink} from "react-router-dom";

export const Navigation = () => (
    <div className="navigation">
        <NavLink exact activeClassName="navigation__active-link" className="navigation__link" to="/">
            Home
        </NavLink>
        <NavLink activeClassName="navigation__active-link" className="navigation__link" to="/users">
            Users
        </NavLink>
    </div>
)