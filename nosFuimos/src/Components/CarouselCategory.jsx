import React from "react";
import Category from "../Components/Category";
import styles from "../styles/carouselcategory.module.css";

const CarouselCategory = () => {
    return (
        <div className={styles.carousel}>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
    );
};

export default CarouselCategory;