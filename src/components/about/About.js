import React from "react";
import Menu from "../presentetion/Menu";
import style from "./About.module.scss";

function About() {
  return (
    <div className={style.about}>
      <Menu />
      <h1 className={`${style.title} grid-6`}>
        S.
        <hr className={style.line} />
      </h1>
      <div className={`${style.form1} `}></div>
      <div className={`${style.form2} `}></div>
      <div className={`${style.form3}`}></div>

      <p className={`${style.textAbout} grid-8`}>
        <h4>Olá! Eu sou o Thiago</h4>
        Ao longo dos anos, desenvolvi habilidades interpessoais significativas
        na área de vendas, aprendendo a lidar com pessoas de diferentes perfis.
        Em 2017, decidi migrar para a Tecnologia da Informação, onde descobri
        minha verdadeira paixão. Minha experiência inclui suporte técnico,
        infraestrutura e, mais recentemente, atuação como desenvolvedor Full
        Stack desde 2022. Foco em aprimorar minhas habilidades em tecnologias
        como .NET, Node.js, SQL e AWS. Busco constantemente aprofundar meu
        conhecimento, explorando novas tecnologias e participando de cursos.
        Estou aberto a oportunidades de aprendizado e projetos desafiadores que
        contribuam para meu crescimento profissional como desenvolvedor.
        Conectar-me e colaborar com equipes talentosas é uma prioridade. Estou
        disponível para novas parcerias e conexões.
      </p>
    </div>
  );
}

export default About;
