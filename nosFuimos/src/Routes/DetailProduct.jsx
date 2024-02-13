import React from "react";
import styles from "../styles/detailProduct.module.css";

const DetailProduct = () => {
    return (
        <article className={styles.article}>
            <div class="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8">
                <section class="text-gray-600 body-font">
                    <div class="mx-auto flex">
                        <div class="flex flex-wrap md:-m-2 -m-1">
                            <div class="w-full lg:py-6 mb-6 lg:mb-0">
                                <nav aria-label="Breadcrumb">
                                    <ul
                                        role="list"
                                        class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-between"
                                    >
                                        <li>
                                            <div class="flex items-center">
                                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                                                    Animated Night Hill Illustrations
                                                </h1>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex items-center">
                                                <a href="#" className={styles.header__buttons}>
                                                    <svg
                                                        class="icon icon-tabler icon-tabler-arrow-narrow-left"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l14 0" />
                                                        <path d="M5 12l4 4" />
                                                        <path d="M5 12l4 -4" />
                                                    </svg>
                                                    Volver
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="flex mb-4">
                                    <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                                        Description
                                    </a>
                                </div>
                                <p class="leading-relaxed mb-4">
                                    Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                                    sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                                    juiceramps cornhole raw denim forage brooklyn. Everyday carry
                                    +1 seitan poutine tumeric. Gastropub blue bottle austin
                                    listicle pour-over, neutra jean.
                                </p>
                                <div class="flex border-t border-gray-200 py-2">
                                    <span class="text-gray-500">Color</span>
                                    <span class="ml-auto text-gray-900">Blue</span>
                                </div>
                                <div class="flex border-t border-gray-200 py-2">
                                    <span class="text-gray-500">Size</span>
                                    <span class="ml-auto text-gray-900">Medium</span>
                                </div>
                                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span class="text-gray-500">Quantity</span>
                                    <span class="ml-auto text-gray-900">4</span>
                                </div>
                                <div class="flex">
                                    <span class="title-font font-medium text-2xl text-gray-900">
                                        $58.00
                                    </span>
                                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Button
                                    </button>
                                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                        alt="Model wearing plain white basic tee."
                        class="h-full w-full object-cover object-center"
                    />
                </div>
                <div class="hidden lg:grid lg:grid-cols-2 lg:gap-y-8">
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                            alt="Model wearing plain black basic tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                            alt="Model wearing plain gray basic tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                            alt="Model wearing plain black basic tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                            alt="Model wearing plain gray basic tee."
                            class="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default DetailProduct;
