import React from "react";
import "../styles/categoria.css";
import {
    CarouselItem
} from "@/Components/ui/carousel";

const Categoria = () => {
    return (
        <CarouselItem className="min-[320px]:basis-1/2 min-[480px]:basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4">
            <div class="carousel__carouselItem--categoria">
                <img
                    class="carousel__carouselItem--categoriaImg"
                    src="../../public/muestraCategoria.jpg"
                    alt=""
                    srcset=""
                />
                <p class="carousel__carouselItem--categoriaTexto">Casas del árbol</p>
            </div>
        </CarouselItem>
    );
};

export default Categoria;