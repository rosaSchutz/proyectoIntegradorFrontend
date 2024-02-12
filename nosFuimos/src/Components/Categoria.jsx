import React from "react";
import "../styles/categoria.css";


const Categoria = () => {
    return (
        <div class="carousel__category"> <div class="carousel__carouselItem--categoria">
            <img
                class="carousel__carouselItem--categoriaImg"
                src="../../public/muestraCategoria.jpg"
                alt=""
                srcset=""
            />
            <p class="carousel__carouselItem--categoriaTexto">Casas del árbol</p>
        </div></div>
    );
};

export default Categoria;