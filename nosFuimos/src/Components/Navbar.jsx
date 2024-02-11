import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header class="fixed inset-x-0 top-0 z-40 bg-white border-b border-[#ebebeb] px-4 py-4 mx-auto sm:px-6 lg:px-16 ">
            <nav class="flex items-center justify-between" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a
                        class="-m-1.5 p-1.5 text-xl font-semibold text-[#022a3d] items-center"
                        href="#"
                    >
                        <Link class="flex gap-1.5" to="/">                        
                        <img class="h-8 w-auto" src="../../public/nosFuimos.png" alt="" />
                        Nos Fuimos
                        </Link>
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="h-6 w-6"
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
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#" class="text-base font-light leading-6 text-[#717171]">
                        <Link to="/">Inicio</Link>
                    </a>
                    <a href="#" class="text-base font-light leading-6 text-[#717171]">
                        Features
                    </a>
                    <a href="#" class="text-base font-light leading-6 text-[#717171]">
                        Marketplace
                    </a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6">
                    <a
                        href="#"
                        class="rounded-md px-3.5 py-2.5 text-base leading-6 font-medium text-[#222222] border border-[#ebebeb]"
                    >
                        Crear cuenta
                    </a>
                    <a
                        href="#"
                        class="rounded-md px-3.5 py-2.5 text-base leading-6 font-medium text-[#222222] border border-[#ebebeb]"
                    >
                        Iniciar sesión
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
