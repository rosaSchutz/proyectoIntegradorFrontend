import React from "react";
import {
    CarouselItem
} from "@/Components/ui/carousel";

const Categoria = () => {
    return (
        <CarouselItem className="min-[320px]:basis-1/2 min-[480px]:basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4">
            <div class="flex flex-col items-center justify-center opacity-50 hover:opacity-100">
                <img
                    class="h-5 w-auto"
                    src="../../public/muestraCategoria.jpg"
                    alt=""
                    srcset=""
                />
                <p class="text-sm font-light text-center">Casas del árbol</p>
            </div>
        </CarouselItem>
    );
};

export default Categoria;
