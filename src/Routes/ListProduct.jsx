import React, { useState, useEffect } from "react";
import { useFetchGetAll } from "../Components/utils/useFetchGetAll";
import Administration from "./Administration";
import styles from "../styles/listProduct.module.css";

const ListProduct = () => {
    const { data } = useFetchGetAll(
        "https://jsonplaceholder.typicode.com/photos"
    );

    // Si se ingresar al panel desde un dispositivo móvil, muestra un mensaje que no está disponible.
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Puedes ajustar el valor según tus necesidades
        };

        handleResize(); // Verificar el tamaño inicial al cargar la página

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const eliminarProducto = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");

        if (confirmDelete) {
            // Lógica para eliminar el producto
            alert("Producto eliminado");
        } else {
            // Lógica si el usuario cancela la eliminación

        }
    };

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
                <div class="flex">
                    <Administration />
                    <article className={styles.articleList}>
                        <section class="container px-4 mx-auto">
                            <div class="flex flex-col">
                                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead class="bg-gray-50 dark:bg-gray-800">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Id
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Nombre
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Destino
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Fecha salida
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Fecha regreso
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Precio
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Imagen
                                                        </th>

                                                        <th
                                                            scope="col"
                                                            class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                        >
                                                            Acciones
                                                        </th>

                                                        <th scope="col" class="relative py-3.5 px-4">
                                                            <span class="sr-only">Actions</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                    {data?.slice(0, 20).map((product) => (
                                                        <tr>
                                                            <td
                                                                key={product.id}
                                                                class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"
                                                            >
                                                                {product.id}
                                                            </td>
                                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap truncate">
                                                                Nombre del producto
                                                            </td>
                                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                descripcion destino
                                                            </td>
                                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                01/01/2024
                                                            </td>
                                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                01/01/2024
                                                            </td>
                                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                $20.000
                                                            </td>
                                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                <div class="flex items-center gap-x-2">
                                                                    <img
                                                                        class="object-cover w-8 h-8 rounded-full"
                                                                        src={product.url}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                <button onClick={() => eliminarProducto()} class="flex items-center gap-2 text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        class="icon icon-tabler icon-tabler-trash"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        stroke-width="1.5"
                                                                        stroke="currentColor"
                                                                        fill="none"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    >
                                                                        <path
                                                                            stroke="none"
                                                                            d="M0 0h24v24H0z"
                                                                            fill="none"
                                                                        />
                                                                        <path d="M4 7l16 0" />
                                                                        <path d="M10 11l0 6" />
                                                                        <path d="M14 11l0 6" />
                                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                                    </svg>
                                                                    Eliminar producto
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            )}
        </>
    );
};

export default ListProduct;
