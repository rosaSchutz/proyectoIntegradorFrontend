import React from "react";
import { Link } from "react-router-dom";
import HeaderButton from "./ui/Buttons/HeaderButton";
import Navbar from "./Navbar";
import "../styles/header.css";

const Header = () => {
    return (
        <header id="header">
            <div class="header__container">

                {/*Logotipo y titulo*/}
                <div class="header__logo">
                    <a href="#" class="header__logo-enlace">
                        <Link class="header__logo-title" to="/">
                            <img class="header__logo-img" src="../../public/nosFuimos.png" alt="" />
                            nosfuimos
                        </Link>
                    </a>
                </div>

                {/*Menu mobile*/}
                <div class="header__menuMobile">
                    <button type="button" class="header__menuMobile--button">
                        <svg
                            class="header__menuMobile--svg"
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
                <div class="header__auth">
                    <HeaderButton title={"Crear cuenta"} />
                    <HeaderButton title={"Iniciar sesión"} />
                </div>
            </div>
        </header>
    );
};

export default Header;
