import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer class="bg-white border-t border-[#ebebeb]">
      <div class="px-4 py-8 mx-auto sm:px-6 lg:px-16">
        <div class="flex flex-col items-center md:flex-row md:justify-between gap-2">
          <div class="flex gap-2 md:gap-1.5 items-center flex-col md:flex-row">
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

          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              class="text-sm font-light leading-6 text-[#717171] hover:underline"
            >
              <Link to="/">Inicio</Link>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
