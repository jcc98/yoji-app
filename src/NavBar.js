import React from "react";
import {Link} from "react-router-dom";
import logo from "./img/logo.png";

function NavBar() {

    const navStyle = {
        color: "white"
    };

    return(
        <nav>
            <Link to="/">
                <img className="logo-image" src={logo}></img>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/search">
                <li>Search</li>
                </Link>
                <Link style={navStyle} to="/list">
                <li>List of Yojis</li>
                </Link>
                <Link style={navStyle} to="/about">
                <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar