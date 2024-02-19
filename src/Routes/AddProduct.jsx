import React, { useRef, useEffect } from "react";
//import { useContextGlobalRegisterProduct } from "../Components/utils/registerProduct.context";
import { Link } from "react-router-dom";
import Administration from "./Administration";
import styles from "../styles/addProduct.module.css";

const AddProduct = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const guardar = useRef(null);

    useEffect(() => {
        guardar.current.addEventListener("click", handleClick);
        return () => {
            guardar.current.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClick = async (event) => {
        event.preventDefault();

        const title = document.getElementById("nameProduct").value;
        const body = document.getElementById("destino").value;
        const userId = 1;

        const nuevoProducto = {
            title,
            body,
            userId,
        };

        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(nuevoProducto),
        };

        try {
            // Enviar la solicitud POST
            const response = await fetch(url, settings);

            if (!response.ok) {
                throw new Error(`Error de HTTP: ${response.status}`);
            }

            const data = await response.json();
            console.log("Producto agregado exitosamente:", data);

            //formulario.reset();
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };

    

    return (
        <div class="flex">
            <Administration />
            <form id="crearProductoForm" className={styles.form}>
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">
                            Agregar producto
                        </h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">
                            Por favor diligencia el formulario para crear un nuevo producto.
                        </p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="col-span-4 sm:col-span-full">
                                <label
                                    for="nameProduct"
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
                                            autocomplete="username"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4 sm:col-span-full">
                                <label
                                    for="destino"
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
                                            autocomplete="username"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4 sm:col-span-full">
                                <label
                                    for="fechaSalida"
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
                                            autocomplete="username"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4 sm:col-span-full">
                                <label
                                    for="fechaRegreso"
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
                                            autocomplete="username"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4 sm:col-span-full">
                                <label
                                    for="precio"
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
                                            autocomplete="username"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-4 sm:col-span-full">
                                <label
                                    for="imagenes"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Imagenes
                                </label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="imagenes"
                                            id="imagenes"
                                            autocomplete="username"
                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        class="text-sm font-semibold leading-6 text-gray-900"
                    >
                        <Link to="/administracion">Cancelar</Link>
                    </button>
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
    );
};

export default AddProduct;
