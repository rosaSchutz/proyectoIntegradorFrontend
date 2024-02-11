import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="footer__container">
          <div class="footer__copywriting">
            <a class="flex font-semibold items-center text-[#022a3d]">
              <img
                class="h-10 w-auto"
                src="../../public/nosfuimosDos.png"
                alt=""
              />
            </a>
            <p class="text-sm font-light leading-6 text-[#717171]">
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
