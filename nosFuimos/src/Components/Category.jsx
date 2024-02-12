import React from "react";
import styles from "../styles/carouselcategory.module.css";

const Category = () => {
    return (
        <div className={styles.carousel__category}>
            <div className={styles.carouselItem__categoria}>
                <img
                    className={styles.carouselItem__img}
                    src="../../public/tours.webp"
                    alt=""
                    srcset=""
                />
                <p className={styles.carouselItem__text}>Cartagena en Bocagrande</p>
            </div>
        </div>
    );
};

export default Category;
