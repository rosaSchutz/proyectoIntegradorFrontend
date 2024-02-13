import React from "react";
import styles from "../styles/carouselcategory.module.css";

const Category = () => {
    return (
        <div className={styles.carousel__category}>
            <div className={styles.carouselItem__categoria}>
                <a href="#" className={styles.category__buttons}>
                        Buenos aires
                </a>
            </div>
        </div>
    );
};

export default Category;
