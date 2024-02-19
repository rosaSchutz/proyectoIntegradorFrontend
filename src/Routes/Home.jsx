import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import SearchButton from "../Components/ui/Buttons/SearchButton";
import CarouselCategory from "../Components/CarouselCategory";
import Card from "../Components/Card";
import PaginationButton from "../Components/ui/Buttons/PaginationButton";
import styles from "../styles/home.module.css"

const Home = () => {
    const { state } = useContextGlobal();
    console.log("Data home:", state.data);

    return (
        <main className={styles.main}>
            <div className={styles.main__searchButton}>
                <SearchButton />
            </div>

            <CarouselCategory />

            <article>
                <section className={styles.main__sectionCard}>
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
