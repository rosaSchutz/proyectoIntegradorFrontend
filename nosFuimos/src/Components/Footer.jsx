import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.copywriting}>
          <a href="#" className={styles.enlace}>
            <img className={styles.logo} src="../../public/nosfuimosDos.png" alt="" />
          </a>
          <p  className={styles.textoCopywriting}>
            ©️ 2024 Nos Fuimos.
          </p>
        </div>

        <div  className={styles.navegation}>
          <Navbar/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
