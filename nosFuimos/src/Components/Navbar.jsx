import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <a href="#" className={styles.navigation__links}>
                <Link to="/">Inicio</Link>
            </a>
        </nav>
    );
};

export default Navbar;
