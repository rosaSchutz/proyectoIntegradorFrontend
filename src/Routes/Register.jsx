import React from 'react'
import styles from "../styles/login.module.css";

const Register = () => {
    return (
        <article className={styles.container_login}>
            <div className={styles.login_title}>
                <img className={styles.login_img} src="/assets/logo.png" alt="" />
                <h2 className={styles.login_subtitle}>Crear cuenta</h2>
            </div>
            <div className={styles.containerForm}>
                <form className={styles.input_form} action="#" method="POST">
                    <div>
                        <label for="email" className={styles.input_label}>Email</label>
                        <div className={styles.div}>
                            <input id="email" name="email" type="email" autocomplete="email" required className={styles.input} />
                        </div>
                    </div>

                    <div>
                        <div className={styles.div_password}>
                            <label for="password" className={styles.input_label}>Contraseña</label>
                        </div>
                        <div className={styles.div}>
                            <input id="password" name="password" type="password" autocomplete="current-password" required className={styles.input} />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className={styles.button} >Crear cuenta</button>
                    </div>
                </form>
            </div>
        </article>
    )
}

export default Register