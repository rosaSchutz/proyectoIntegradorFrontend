import React from "react";
import "../../../styles/paginationButton.css";

const PaginationButton = () => {
    return (
        <article>
            <section class="section">
                <ul class="section__paginationButton">
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-[#717171] font-light bg-white border border-e-0 border-[#ebebeb] rounded-s-lg  hover:bg-[#ebebeb] hover:text-gray-700"
                        >
                            <span class="sr-only">Previous</span>
                            <svg
                                class="w-3 h-3 rtl:rotate-180"
                                aria-hidden="true"
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
                    </li>
                    <li>
                        <a
                            href="#"
                            class="section__paginationButton--numeros flex items-center justify-center px-4 h-10 leading-tight text-[#717171] font-light bg-white border border-[#ebebeb] hover:bg-[#ebebeb] hover:text-gray-700"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-[#717171] font-light bg-white border border-[#ebebeb] hover:bg-[#ebebeb] hover:text-gray-700"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-[#717171] font-light bg-white border border-[#ebebeb] hover:bg-[#ebebeb] hover:text-gray-700"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-[#717171] font-light bg-white border border-[#ebebeb] hover:bg-[#ebebeb] hover:text-gray-700"
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-[#717171] font-light bg-white border border-[#ebebeb] hover:bg-[#ebebeb] hover:text-gray-700"
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-[#717171] font-light bg-white border border-[#ebebeb] rounded-e-lg hover:bg-[#ebebeb] hover:text-gray-700y-700"
                        >
                            <svg
                                class="w-3 h-3 rtl:rotate-180"
                                aria-hidden="true"
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
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default PaginationButton;
