import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useFetchGetID } from "../Components/utils/useFetchGetID";
import styles from "../styles/galleryImages.module.css";

const GalleryImages = () => {
    const { id } = useParams();
    const { data } = useFetchGetID(
        "https://jsonplaceholder.typicode.com/photos/" + id
    );
    console.log(data)

    return (
        <div className={styles.gallery}>
            <div className={styles.galleryDiv1}>
                <div className={styles.galleryDiv2}>
                    <div className={styles.galleryDiv3}>
                        <Link to={"/product/" + id}>
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
                                    src={data?.url}
                                    alt=""
                                />
                                <img
                                    className={styles.img}
                                    src={data?.url}
                                    alt=""
                                />
                                <img
                                    className={styles.img}
                                    src={data?.url}
                                    alt=""
                                />
                                <img
                                    className={styles.img}
                                    src={data?.url}
                                    alt=""
                                />
                                <img
                                    className={styles.img}
                                    src={data?.url}
                                    alt=""
                                />
                                <img
                                    className={styles.img}
                                    src={data?.url}
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
