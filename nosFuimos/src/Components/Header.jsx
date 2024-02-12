import React from "react";
import { Link } from "react-router-dom";
import HeaderButton from "./ui/Buttons/HeaderButton";
import Navbar from "./Navbar";
import styles from "../styles/header.module.css"


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>

                {/*Logotipo y titulo*/}
                <div className={styles.logo}>
                    <a href="#" className={styles.enlace}>
                        <Link className={styles.title} to="/">
                            <img className={styles.img} src="../../public/nosFuimos.png" alt="" />
                            nosfuimos
                        </Link>
                    </a>
                </div>

                {/*Menu mobile*/}
                <div className={styles.menuMobile}>
                    <button type="button" className={styles.menuMobile__button}>
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
                    </button>
                </div>

                {/*Menu de navegacion*/}
                {/*
                    <Navbar/>
                */}

                {/*Menu de login y registro*/}
                <div className={styles.header__auth}>
                    <HeaderButton title={"Crear cuenta"} />
                    <HeaderButton title={"Iniciar sesión"} />
                </div>
            </div>
        </header>
    );
};

export default Header;
