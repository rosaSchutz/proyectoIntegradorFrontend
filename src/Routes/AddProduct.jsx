import React, { useRef, useState, useEffect } from "react";
import { useFetchPost } from "../Components/utils/useFetchPost";
import { useMediaQuery } from 'react-responsive';
import Administration from "./Administration";
import styles from "../styles/addProduct.module.css";

const AddProduct = () => {
    const { data, fetchData } = useFetchPost(
        "http://localhost:8080/admin/productos/guardar"
    );
    console.log("Data product:", data);

    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    const guardar = useRef(null);

    useEffect(() => {
        guardar.current.addEventListener("click", handleClick);
        return () => {
            guardar.current.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClick = async (event) => {
        event.preventDefault();

        const nombre = document.getElementById("nameProduct").value;
        const destino = document.getElementById("destino").value;
        const salidaDate = document.getElementById("fechaSalida").value;
        const vueltaDate = document.getElementById("fechaRegreso").value;
        const precio = document.getElementById("precio").value;

        // Obtén el valor del campo de archivos
        const fileInput = document.getElementById("imagenes").files;

        // Procesa cada archivo y conviértelo a base64
        const urlImagenesArray = await Promise.all(
            Array.from(fileInput).map(async (file) => {
                const base64String = await convertFileToBase64(file);
                return base64String;
            })
        );

        const formulario = document.getElementById('crearProductoForm');

        const product = {
            nombre,
            destino,
            salidaDate,
            vueltaDate,
            precio,
            urlImagenes: urlImagenesArray,
        };

        fetchData(product);
        formulario.reset();
    };

    // Función para convertir un archivo a base64
    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <>
            {isMobile ? (
                <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div class="text-center">
                        <p class="text-base font-semibold text-indigo-600">ERROR</p>
                        <p class="mt-6 text-base leading-7 text-gray-600">Lo sentimos, el panel de administración no está disponible en dispositivos móviles.</p>
                    </div>
                </main>

            ) : (
                /* Renderiza el contenido cuando la pantalla sea mayor que 640px */
                <div class="flex">
                    <Administration />
                    <form id="crearProductoForm" className={styles.form}>
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">
                                    Agregar producto
                                </h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">
                                    Por favor diligencia el formulario para crear un nuevo
                                    producto.
                                </p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="col-span-4 sm:col-span-full">
                                        <label
                                            htmlFor="nameProduct"
                                            class="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Nombre
                                        </label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="nameProduct"
                                                    id="nameProduct"
                                                    required
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-4 sm:col-span-full">
                                        <label
                                            htmlFor="destino"
                                            class="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Destino
                                        </label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="destino"
                                                    id="destino"
                                                    required
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-4 sm:col-span-full">
                                        <label
                                            htmlFor="fechaSalida"
                                            class="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de salida
                                        </label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="date"
                                                    name="fechaSalida"
                                                    id="fechaSalida"
                                                    required
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-4 sm:col-span-full">
                                        <label
                                            htmlFor="fechaRegreso"
                                            class="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Fecha de regreso
                                        </label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="date"
                                                    name="fechaRegreso"
                                                    id="fechaRegreso"
                                                    required
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-4 sm:col-span-full">
                                        <label
                                            htmlFor="precio"
                                            class="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Precio
                                        </label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="number"
                                                    name="precio"
                                                    id="precio"
                                                    required
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-4 sm:col-span-full">
                                        <label htmlFor="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Imagenes</label>
                                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="flex flex-col items-center gap-2">
                                                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                                </svg>
                                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label htmlFor="imagenes" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Cargar minimo 5 imagenes</span>
                                                        <input required id="imagenes" name="file-upload" type="file" class="sr-only" multiple/>
                                                    </label>
                                                </div>
                                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF hasta 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                ref={guardar}
                                type="submit"
                                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default AddProduct;
