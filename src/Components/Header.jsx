import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                {/*Logotipo y titulo*/}
                <div className={styles.logo}>
                    <Link className={styles.enlace} to="/">
                            <img
                                className={styles.img}
                                src="/assets/logo3.png"
                                alt=""
                            />
                    </Link>
                </div>

                {/*Menu mobile*/}
                <div className={styles.menuMobile}>
                    <button type="button" className={styles.menuMobile__button}>
                        <input
                            type="checkbox"
                            name=""
                            id="menu__toggle"
                            className={styles.menu__toggle}
                        />
                        <label className={styles.hamburger__menu} for="menu__toggle">
                            <svg
                                className={styles.menuMobile__svg}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </label>

                        <nav className={styles.menu}>
                            <div className={styles.menuFlex}>
                                <Link to="/login" className={styles.header__buttons}>Ingreso</Link>
                                <Link to="/register" className={styles.header__buttons}>Registro</Link>
                            </div>
                        </nav>
                    </button>
                </div>

                {/*Menu de navegacion*/}
                {/*
                    <nav className={styles.navigation}>
                        <Link to="/" className={styles.navigation__links}>Inicio</Link>
                    </nav>
                */}

                {/*Menu de login y registro*/}
                <div className={styles.header__auth}>
                    <Link to="/register" className={styles.header__buttons}>Crear cuenta</Link>
                    <Link to="/login" className={styles.header__buttons}>Iniciar sesión</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
