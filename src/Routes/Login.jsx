import React from "react";
import styles from "../styles/login.module.css";

const Login = () => {
    return (
        <article className={styles.container_login}>
            <div className={styles.login_title}>
                <img className={styles.login_img} src="/assets/logo.png" alt="" />
                <h2 className={styles.login_subtitle}>Iniciar sesión</h2>
            </div>
            <div className={styles.containerForm}>
                <form className={styles.input_form} action="#" method="POST">
                    <div>
                        <label htmlFor="email" className={styles.input_label}>Email</label>
                        <div className={styles.div}>
                            <input id="email" name="email" type="email" required className={styles.input} />
                        </div>
                    </div>

                    <div>
                        <div className={styles.div_password}>
                            <label htmlFor="password" className={styles.input_label}>Contraseña</label>
                        </div>
                        <div className={styles.div}>
                            <input id="password" name="password" type="password" required className={styles.input} />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className={styles.button} >Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </article>
    );
};

export default Login;
