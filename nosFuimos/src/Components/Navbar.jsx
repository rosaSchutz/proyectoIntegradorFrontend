import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="header__navigation">
            <a href="#" class="header__navigation--links">
                <Link to="/">Inicio</Link>
            </a>
            <a href="#" class="header__navigation--links">
                Features
            </a>
            <a href="#" class="header__navigation--links">
                Marketplace
            </a>
        </nav>
    );
};

export default Navbar;
