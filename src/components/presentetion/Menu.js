import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

function Menu() {
  return (
    <nav className={`${style.menu} gride-12`}>
      <ul>
        <li>
          <Link to="/" className={style.presentation}>
            Inicio
          </Link>
        </li>
        <li>
          <Link className={style.about} to="/sobre">
            Sobre
          </Link>
        </li>
        <li>
          <Link className={style.experience} to="/experiencia">
            Experiencia
          </Link>
        </li>
        <li>
          <a className={style.formation}>Formação</a>
        </li>
        <li>
          <a className={style.contact}>Contato</a>
        </li>
      </ul>

      <hr />
    </nav>
  );
}

export default Menu;
