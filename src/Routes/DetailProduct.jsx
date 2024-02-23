import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useFetchGetID } from "../Components/utils/useFetchGetID";
import styles from "../styles/detailProduct.module.css";

const DetailProduct = () => {
    const { id } = useParams();
    const { data } = useFetchGetID("http://localhost:8080/admin/productos/" + id);
    console.log(data)

    return (
        <article className={styles.article}>
            <section className={styles.info}>
                <div className={styles.title}>
                    <h2 className={styles.title_h2}>
                        {data?.nombre}
                    </h2>
                    <div className={styles.title_back}>
                        <Link to="/" className={styles.details__buttons}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
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


            <section className={styles.gallery}>
                <div className={styles.galleryContainer}>
                    <div className={styles.leftContainer}>
                        <img
                            src={"data:image/jpeg;base64," + data?.urlImagenes[0]}
                            alt=""
                            className={styles.leftImg}
                        />
                    </div>
                    <div className={styles.rightContainer}>
                        {data?.urlImagenes.slice(1, 5).map((imagenes, index) => (
                            <div key={index} className={styles.rightDiv}>
                                <img
                                    src={"data:image;base64," + imagenes}
                                    alt=""
                                    className={styles.rightImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.more}>
                    <button className={styles.button}>
                        <Link to={"/product/" + id + "/gallery"} className={styles.details__buttons}>Mostrar todas las fotos</Link>
                    </button>
                </div>
            </section>

                <hr />
                <div className={styles.description_property}>
                    <span className={styles.span1}>Destino</span>
                    <span className={styles.span2}>{data?.destino}</span>
                </div>
                <hr />
                <div className={styles.description_property}>
                    <span className={styles.span1}>Fecha de salida</span>
                    <span className={styles.span2}>{data?.salidaDate}</span>
                </div>
                <hr />
                <div className={styles.description_property2}>
                    <span className={styles.span1}>Fecha de regreso</span>
                    <span className={styles.span2}>{data?.vueltaDate}</span>
                </div>
                <div className={styles.price}>
                    <span className={styles.span3}>
                        {data?.precio} USD
                    </span>
                    <a href="#" className={styles.details__buttons}>
                        Reservar
                    </a>
                </div>
            </section>
        </article>
    );
};

export default DetailProduct;
