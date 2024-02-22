import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import styles from "../styles/administration.module.css";

const Administration = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <>
      {isMobile ? (
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">ERROR</p>
            <p class="mt-6 text-base leading-7 text-gray-600">
              Lo sentimos, el panel de administración no está disponible en
              dispositivos móviles.
            </p>
          </div>
        </main>
      ) : (
        /* Renderiza el contenido cuando la pantalla sea mayor que 640px */
        <aside class="flex flex-col w-64 h-screen px-5 py-20 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav class="-mx-3 space-y-6 ">
              <div class="space-y-3 ">
                <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                  Productos
                </label>

                <Link
                  to="/administracion/addProduct"
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-plus"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  <span class="mx-2 text-sm font-medium">Agregar producto</span>
                </Link>

                <Link
                  to="/administracion/listProduct"
                  class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-list"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l11 0" />
                    <path d="M9 12l11 0" />
                    <path d="M9 18l11 0" />
                    <path d="M5 6l0 .01" />
                    <path d="M5 12l0 .01" />
                    <path d="M5 18l0 .01" />
                  </svg>
                  <span class="mx-2 text-sm font-medium">Lista de productos</span>
                </Link>
                
              </div>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};

export default Administration;
