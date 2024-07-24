import React from "react";
import Menu from "../presentetion/Menu";
import style from "./Experience.module.scss";

function Experience() {
  return (
    <section className={style.container}>
      <Menu />
      <div className={style.rectangle}></div>
      <h1 className={`${style.title} grid-6`}>
        E.
        <hr className={style.line} />
      </h1>
      <div className={`${style.form1} `}></div>
      <div className={`${style.form2} `}></div>
      <div className={`${style.form3}`}></div>
      <div className={`${style.text} grid-8`}>
        <h2>Port Louis</h2>
        <h3>
          São Paulo/SP — Desenvolvedor de sistemas Full Stack / Técnico de
          suporte de sistemas
        </h3>
        <p>
          {" "}
          &nbsp; Na minha função atual na empresa, desempenho um papel essencial
          como desenvolvedor back-end, com foco específico na área de leituras
          de DANFs (Documentos Auxiliares da Nota Fiscal) e notas fiscais.
          Utilizando a linguagem de programação C# e a tecnologia OCR (Optical
          Character Recognition), trabalho no desenvolvimento de soluções que
          automatizam a extração e interpretação de dados desses documentos.
          Isso contribui para a otimização de processos e o aumento da
          eficiência operacional da empresa.
        </p>
        <p>
          &nbsp; Além das atividades de desenvolvimento, também assumo a
          responsabilidade de ser um analista de suporte. Nessa função, lido
          diretamente com questões técnicas e forneço suporte aos usuários dos
          sistemas. Estou constantemente disponível para solucionar problemas,
          responder a dúvidas e garantir o bom funcionamento das aplicações
          implementadas. Trabalhar nesse ambiente dinâmico e desafiador tem sido
          uma experiência enriquecedora. Estou constantemente aprimorando minhas
          habilidades técnicas e adquirindo conhecimentos atualizados para
          acompanhar as tendências e demandas do mercado de tecnologia. Através
          do constante aprendizado e do trabalho em equipe, tenho a oportunidade
          de contribuir para soluções inovadoras e colaborar para o crescimento
          e sucesso da empresa.
        </p>
      </div>
      <div className={`${style.text} grid-8`}>
        <h2>Katinu Informatica</h2>
        <h3>Praia Grande/SP — Técnico de suporte de sistemas pleno</h3>
        <p>
          {" "}
          Criação de ambiente para que o sistema de automação fornecido pela
          empresa possa ser instalado. Criação de aplicações relacionadas ao
          ambiente de instalação para os demais membros da área e padronização
          de instalações.
        </p>
        <p>
          Prestação de suporte preventivo, esclarecimento de dúvidas e
          treinamento de usuários do sistema. Criação de aplicações de separação
          e envio, para contabilidade, dos arquivos fiscais criados pelo nosso
          sistema. Além do foco em outras funções do cargo de suporte técnico,
          trabalho no desenvolvimento RPA para a automatização e padronização
          dos processos técnicos e facilitação do uso pelos clientes externos.
        </p>
      </div>
      <div className={`${style.text} grid-8`}>
        <h2>Odontobase Plano de Saúde Ltda. EPP</h2>
        <h3>Santos/SP — Consultor de vendas/ Supervisor</h3>
        <p>
          {" "}
          Durante minha trajetória profissional, desempenhei um papel
          fundamental na área de vendas de planos odontológicos. Nessa função,
          fui responsável por gerir as corretoras, desenvolver estratégias de
          vendas e criar planos e campanhas para impulsionar a venda dos
          produtos. Uma das minhas principais atribuições era realizar estudos
          de mercado, identificar tendências e necessidades dos clientes. Com
          base nessas informações, planejava estratégias de atuação e
          desenvolvia projetos com o objetivo de propor melhorias nos processos
          de vendas. Apresentava soluções e relatórios à direção da empresa,
          visando o crescimento e o aprimoramento das atividades comerciais.
          Como parte das minhas responsabilidades, também prospectava clientes
          porta a porta ou por meio de mailing, divulgando os produtos e
          serviços oferecidos pela empresa.
        </p>
        <p>
          Além disso, negociava e elaborava propostas comerciais personalizadas,
          buscando atender às necessidades específicas de cada cliente. Outro
          aspecto importante da minha função era traçar metas semanais para a
          equipe de vendas e fazer a gestão do time. Motivava e acompanhava cada
          consultor, fornecendo suporte necessário para a resolução de possíveis
          problemas e auxiliando nos processos de fechamento de contratos.
        </p>
      </div>
    </section>
  );
}

export default Experience;
