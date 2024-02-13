import React from "react";
import styles from "../styles/detailProduct.module.css";

const DetailProduct = () => {
    return (
        <article className={styles.article}>
            <section class="text-gray-600 body-font">
                <div class="mx-auto flex">
                    <div class="flex">
                        <div class="w-full lg:py-6 mb-6 lg:mb-0">
                            <nav aria-label="Breadcrumb">
                                <ul
                                    role="list"
                                    class="flex sm:items-center flex-col-reverse sm:flex-row sm:justify-between gap-2"
                                >
                                    <li>
                                        <div class="flex items-center">
                                            <h1 class="text-gray-900 text-xl title-font font-medium sm:text-3xl">
                                                Animated Night Hill Illustrations
                                            </h1>
                                        </div>
                                    </li>
                                    <li class="flex justify-end sm:block">
                                        <div class="flex items-center">
                                            <a href="#" className={styles.details__buttons}>
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
                                                <span class="hidden sm:block">Volver</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div class="flex mb-4">
                                <a class="flex-grow text-gray border-b-2 border-gray py-2 text-lg px-1">
                                    Description
                                </a>
                            </div>
                            <p class="leading-relaxed mb-4">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                                seitan poutine tumeric. Gastropub blue bottle austin listicle
                                pour-over, neutra jean.
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
                            <div class="flex justify-between">
                                <span class="title-font font-medium text-2xl text-gray-900">
                                    $58.00
                                </span>
                                <a href="#" className={styles.details__buttons}>
                                    Button
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex gap-6 flex-col">
                <div class="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-2 gap-4">
                    <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 mb-4 lg:mb-0">
                        <img
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-51634704/original/5823a587-5ba8-4b25-af8a-dbcfa13cbde1.jpeg?im_w=720"
                            alt="Model wearing plain white basic tee."
                            class="h-full w-full object-cover object-center rounded-lg"
                        />
                    </div>
                    <div class="lg:grid lg:grid-cols-2 grid grid-cols-2 gap-4">
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-51634704/original/5823a587-5ba8-4b25-af8a-dbcfa13cbde1.jpeg?im_w=720"
                                alt="Model wearing plain black basic tee."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-51634704/original/5823a587-5ba8-4b25-af8a-dbcfa13cbde1.jpeg?im_w=720"
                                alt="Model wearing plain gray basic tee."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-51634704/original/5823a587-5ba8-4b25-af8a-dbcfa13cbde1.jpeg?im_w=720"
                                alt="Model wearing plain black basic tee."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-51634704/original/5823a587-5ba8-4b25-af8a-dbcfa13cbde1.jpeg?im_w=720"
                                alt="Model wearing plain gray basic tee."
                                class="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                <div class="flex justify-end">
                    <button>
                        <a href="#" className={styles.details__buttons}>
                            Ver más
                        </a>
                    </button>
                </div>
            </section>
        </article>
    );
};

export default DetailProduct;
