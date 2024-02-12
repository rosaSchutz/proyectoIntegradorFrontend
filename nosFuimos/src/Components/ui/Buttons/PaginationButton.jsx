import React from "react";
import "../../../styles/paginationButton.css";

const PaginationButton = () => {
    return (
        <article class="articlePagination">
            <section class="sectionPagination">
                <a href="#" class="sectionPagination__flecha flechaIzquierda">
                    <svg
                        aria-hidden="true"
                        height="12"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                </a>

                <a href="#" class="sectionPagination__numeros"> 1 </a>
                <a href="#" class="sectionPagination__numeros"> 2 </a>
                <a href="#" class="sectionPagination__numeros"> 3 </a>
                <a href="#" class="sectionPagination__numeros"> 4 </a>
                <a href="#" class="sectionPagination__numeros"> 5 </a>

                <a href="#" class="sectionPagination__flecha flechaDerecha">
                    <svg
                        aria-hidden="true"
                        height="12"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                </a>
            </section>
        </article>
    );
};

export default PaginationButton;
