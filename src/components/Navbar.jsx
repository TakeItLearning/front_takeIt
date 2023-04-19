import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  const currentLocation = useLocation();
  const isHomePage = currentLocation.pathname === "/";

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold mr-4 sm:text-4xl">
            Take-I.T
          </a>
          <ul className="hidden md:flex">
            {isHomePage ? (
              <>
                <li>
                  <Link to="home" href="/" smooth={true} duration={500}>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} offset={-200} duration={500}>
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link to="support" smooth={true} offset={-50} duration={500}>
                    Nos Cours
                  </Link>
                </li>
                <li>
                  <Link
                    to="platforms"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Articles de Presse
                  </Link>
                </li>
                <li>
                  <Link to="pricing" smooth={true} offset={-50} duration={500}>
                    Nos Tarifs
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <a href="/">Accueil</a>
              </li>
            )}
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            S'inscrire
          </button>
          <button className="px-8 py-3">Se Connecter</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            À Propos
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Nos Tarifs
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            S'inscrire
          </button>
          <button className="px-8 py-3">Se Connecter</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
