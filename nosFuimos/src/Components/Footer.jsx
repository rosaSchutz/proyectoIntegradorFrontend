import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer__container">
        <div class="footer__copywriting">
          <a class="footer__copywriting--enlace">
            <img
              class="footer__copywriting--logo"
              src="../../public/nosfuimosDos.png"
              alt=""
            />
          </a>
          <p class="footer__copywriting--textoCopywriting">
            ©️ 2024 Nos Fuimos.
          </p>
        </div>

        <div class="footer__navegation">
          <a href="#" class="footer__navegation--enlace">
            <Link to="/">Inicio</Link>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
