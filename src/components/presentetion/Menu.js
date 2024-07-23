import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Menu.module.scss";

function Menu() {
  const [activeMenu, setActiveMenu] = useState("");
  const [hrStyle, setHrStyle] = useState({});
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveMenu("presentation");
    if (path === "/sobre") setActiveMenu("about");
    if (path === "/experiencia") setActiveMenu("experience");
    if (path === "/publication") setActiveMenu("publication");
    if (path === "/contato") setActiveMenu("contact");
  }, [location]);

  useEffect(() => {
    if (activeMenu && menuRef.current) {
      const activeLink = menuRef.current.querySelector(`.${style[activeMenu]}`);
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setHrStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    }
  }, [activeMenu]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <nav className={`${style.menu} gride-12`} ref={menuRef}>
      <ul>
        <li>
          <Link
            to="/"
            className={`${style.presentation} ${
              activeMenu === "presentation" ? style.active : ""
            }`}
            onClick={() => handleMenuClick("presentation")}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/sobre"
            className={`${style.about} ${
              activeMenu === "about" ? style.active : ""
            }`}
            onClick={() => handleMenuClick("about")}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/experiencia"
            className={`${style.experience} ${
              activeMenu === "experience" ? style.active : ""
            }`}
            onClick={() => handleMenuClick("experience")}
          >
            Experiencia
          </Link>
        </li>
        <li>
          <Link
            to="/publication"
            className={`${style.formation} ${
              activeMenu === "publication" ? style.active : ""
            }`}
            onClick={() => handleMenuClick("publication")}
          >
            Publicações
          </Link>
        </li>
        <li>
          <Link
            to="/contato"
            className={`${style.contact} ${
              activeMenu === "contact" ? style.active : ""
            }`}
            onClick={() => handleMenuClick("contact")}
          >
            Contato
          </Link>
        </li>
      </ul>

      <hr className={`${style.activeLine} ${style.lineMenu}`} style={hrStyle} />
    </nav>
  );
}

export default Menu;
