import React from "react";
import SearchButton from "../Components/ui/Buttons/SearchButton";
import Categoria from "../Components/Categoria";
import Card from "../Components/Card";
import PaginationButton from "../Components/ui/Buttons/PaginationButton";
import "../styles/home.css";

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

const Home = () => {
    return (
        <main id="main">
            <div class="main__searchButton">
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

            <article>
                <section class="main__sectionCard">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </article>

            <PaginationButton />
        </main>
    );
};

export default Home;
