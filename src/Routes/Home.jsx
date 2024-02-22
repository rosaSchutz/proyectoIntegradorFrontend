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

    //algoritmo de Fisher-Yates para barajar aleatoriamente un array
    const aleatorio = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const aleatorioProducts = aleatorio(state.data);

    return (
        <main className={styles.main}>
            <div className={styles.main__searchButton}>
                <SearchButton />
            </div>

            <CarouselCategory />

            <article>
                <section className={styles.main__sectionCard}>
                    {aleatorioProducts.slice(0, 10).map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            nombre={product.nombre}
                            destino={product.destino}
                            salidaDate={product.salidaDate}
                            vueltaDate={product.vueltaDate}
                            precio={product.precio}
                            urlImagenes={product.urlImagenes}
                        />
                    ))}
                </section>
            </article>

            <PaginationButton />
        </main>
    );
};

export default Home;
