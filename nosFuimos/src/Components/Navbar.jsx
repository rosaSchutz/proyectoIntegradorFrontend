import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <a href="#" className={styles.navigation__links}>
                <Link to="/">Inicio</Link>
            </a>
            <a href="#" className={styles.navigation__links}>
                Features
            </a>
            <a href="#" className={styles.navigation__links}>
                Marketplace
            </a>
        </nav>
    );
};

export default Navbar;
