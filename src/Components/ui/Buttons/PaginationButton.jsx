import React from "react";
import styles from "../../../styles/paginationButton.module.css";

const PaginationButton = () => {
    return (
        <article className={styles.articlePagination}>
            <section className={styles.sectionPagination}>
                <a href="#" className={styles.sectionPagination__flecha}>
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

                <a href="#" className={styles.sectionPagination__numeros}> 1 </a>
                <a href="#" className={styles.sectionPagination__numeros}> 2 </a>
                <a href="#" className={styles.sectionPagination__numeros}> 3 </a>
                <a href="#" className={styles.sectionPagination__numeros}> 4 </a>
                <a href="#" className={styles.sectionPagination__numeros}> 5 </a>

                <a href="#" className={styles.sectionPagination__flecha}>
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
