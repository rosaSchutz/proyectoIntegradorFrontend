import React from "react";
import Card from "../Components/Card";
import Categoria from "../Components/Categoria";
import SearchButton from "../Components/ui/Buttons/SearchButton";
import PaginationButton from "../Components/ui/Buttons/PaginationButton";

import {
    Carousel,
    CarouselContent,
    
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

const Home = () => {
    return (
        <main class="grid h-full place-items-center bg-white px-4 py-24 sm:py-32 lg:px-16 gap-10">
            <div class="flex items-center justify-center">
                <SearchButton />
            </div>

            <Carousel>
                <CarouselPrevious />
                <CarouselContent>
                    <Categoria />
                    <Categoria />
                    <Categoria />
                    <Categoria />
                    <Categoria />
                    <Categoria />
                    <Categoria />
                    <Categoria />
                </CarouselContent>
                <CarouselNext />
            </Carousel>

            <div>
                <div class="grid grid-cols-2 gap-x-6 gap-y-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <PaginationButton/>
        </main>
    );
};

export default Home;
