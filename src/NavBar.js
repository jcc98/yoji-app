import React from "react";
import {Link} from "react-router-dom";

function NavBar() {

    const navStyle = {
        color: "white"
    };

    return(
        <nav>
            <Link to="/">
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/kanjigame">
                <li>Kanji Game</li>
                </Link>
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