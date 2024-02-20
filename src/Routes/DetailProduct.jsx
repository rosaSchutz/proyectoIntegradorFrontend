import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useFetchGetID } from "../Components/utils/useFetchGetID";
import styles from "../styles/detailProduct.module.css";

const DetailProduct = ({ url }) => {
    const { id } = useParams();
    const { data } = useFetchGetID(
        "https://jsonplaceholder.typicode.com/photos/"+id
    );

    console.log(data)

    return (
        <article className={styles.article}>
            <section className={styles.info}>
                <div className={styles.title}>
                    <h2 className={styles.title_h2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                    <div className={styles.title_back}>
                        <Link to="/" className={styles.details__buttons}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M5 12l4 4" />
                                <path d="M5 12l4 -4" />
                            </svg>
                            <span className={styles.details__buttons_title}>Volver</span>
                        </Link>
                    </div>
                </div>

                <h3 className={styles.description}>
                    Description
                </h3>

                <p className={styles.description_p}>
                    Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                    sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                    juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                    seitan poutine tumeric. Gastropub blue bottle austin listicle
                    pour-over, neutra jean.
                </p>
                <div className={styles.description_property}>
                    <span className={styles.span1}>Color</span>
                    <span className={styles.span2}>Blue</span>
                </div>
                <div className={styles.description_property}>
                    <span className={styles.span1}>Size</span>
                    <span className={styles.span2}>Medium</span>
                </div>
                <div className={styles.description_property2}>
                    <span className={styles.span1}>Quantity</span>
                    <span className={styles.span2}>4</span>
                </div>
                <div className={styles.price}>
                    <span className={styles.span3}>
                        $58.00
                    </span>
                    <a href="#" className={styles.details__buttons}>
                        Button
                    </a>
                </div>
            </section>

            <section className={styles.gallery}>
                <div className={styles.galleryContainer}>
                    <div className={styles.leftContainer}>
                        <img
                            src={data?.url}
                            alt=""
                            className={styles.leftImg}
                        />
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.rightDiv}>
                            <img
                                src={data?.url}
                                alt=""
                                className={styles.rightImg}
                            />
                        </div>
                        <div className={styles.rightDiv}>
                            <img
                                src={data?.url}
                                alt=""
                                className={styles.rightImg}
                            />
                        </div>
                        <div className={styles.rightDiv}>
                            <img
                                src={data?.url}
                                alt=""
                                className={styles.rightImg}
                            />
                        </div>
                        <div className={styles.rightDiv}>
                            <img
                                src={data?.url}
                                alt=""
                                className={styles.rightImg}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.more}>
                    <button className={styles.button}>
                        <Link to={"/product/" + id + "/gallery"} className={styles.details__buttons}>Ver más</Link>
                    </button>
                </div>
            </section>
        </article>
    );
};

export default DetailProduct;
