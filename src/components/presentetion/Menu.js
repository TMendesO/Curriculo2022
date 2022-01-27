import React from "react";
import style from "./Menu.module.scss";

function Menu() {
  return (
    <nav className={`${style.menu} gride-12`}>
      <ul>
        <li>
          <a className={style.about}>Sobre</a>
        </li>
        <li>
          <a className={style.experience}>Experiencia</a>
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
