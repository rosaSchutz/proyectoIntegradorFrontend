import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/galleryImages.module.css";

const GalleryImages = () => {
    return (
        <div className={styles.gallery}>
                <div className={styles.galleryDiv1}>
                    <div className={styles.galleryDiv2}>
                        <div className={styles.galleryDiv3}>
                            <Link to="/product/20">
                            <button
                                type="button"
                                className={styles.button}
                            >   
                                <svg
                                    className={styles.close}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            </Link>
                            <div className={styles.containerImg}>
                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                                    alt=""
                                />

                                <img
                                    className={styles.img}
                                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default GalleryImages;
