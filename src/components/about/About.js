import React from "react";
import style from "./About.module.scss";

function About() {
  return (
    <div className={style.about}>
      <h1 className={`${style.title} grid-6`}>
        Sobre Mim <hr className={style.line} />
      </h1>

      <p className={`${style.textAbout} grid-8`}>
        Tendo iniciado minha carreira como profissional de vendas, trabalho
        atualmente na área de customer support. Apaixonado por front-end, estou
        constantemente estudando HTML, CSS e JavaScript. Recentemente, tenho
        direcionado os estudos à construção de UIs interativas, especialmente
        através da React. Alguns projetos e códigos desenvolvidos poderão ser
        acessados no repositório do GitHub. Proatividade e a busca incansável
        pelas melhores soluções às necessidades dos clientes - internos e
        externos - são características que guiam minha atuação profissional.
      </p>
    </div>
  );
}

export default About;
