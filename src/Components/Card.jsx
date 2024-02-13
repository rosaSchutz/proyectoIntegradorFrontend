import React from "react";
import styles from "../styles/card.module.css"
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div>
            <Link className="card-a" to={"/product/20"}>
                <div className={styles.containerCard}>
                    <div className={styles.containerImage}>
                        <img
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-51634704/original/5823a587-5ba8-4b25-af8a-dbcfa13cbde1.jpeg?im_w=720"
                            alt=""
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.containerText}>
                        <div className={styles.containerTitle}>
                            <h3 className={styles.title}>
                                La Calera, Colombia
                            </h3>
                            <div className={styles.svgStart}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="12"
                                    width="13.5"
                                    viewBox="0 0 576 512"
                                >
                                    <path
                                        fill="#222222"
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                    />
                                </svg>
                                <p className={styles.parrafoStart}>4.5</p>
                            </div>
                        </div>

                        <p className={styles.detalle}>
                            A 20 kilómetros de distancia
                        </p>
                        <p className={styles.detalle}>
                            18 - 23 de feb
                        </p>
                        <p className={styles.detallePrecio}>$292.000 COP noche</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;