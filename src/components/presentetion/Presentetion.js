import React from "react";
import Menu from "./Menu";
import Perfil from "../../img/Perfil.png";
import style from "./Presentetion.module.scss";

function Presentetion() {
  return (
    <div>
      <Menu />
      <img
        src={Perfil}
        className={`${style.imgPerfil} grid-4`}
        alt="apenas eu sentado em uma cadeira"
      />
      <div className={`${style.presentation} grid-6`}>
        <h1 className={style.name}>Thiago Mendes</h1>
        <h3 className={style.profession}>Web designer || Full Stack</h3>
      </div>
    </div>
  );
}

export default Presentetion;
