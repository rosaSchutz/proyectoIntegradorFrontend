import React from "react";
import SearchButton from "../Components/ui/Buttons/SearchButton";
import CarouselCategory from "../Components/CarouselCategory";
import Card from "../Components/Card";
import PaginationButton from "../Components/ui/Buttons/PaginationButton";
import "../styles/home.css";

const Home = () => {
    return (
        <main id="main">
            <div class="main__searchButton">
                <SearchButton />
            </div>

            <CarouselCategory />

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
