import React, { useState } from "react";
import Menu from "../presentetion/Menu";
import ContactPhone from "../../img/Contact_phone.png";
import GithubIcon from "../../icons/github-50.png";
import LinkedinIcon from "../../icons/linkedin-50.png";
import InstaIcon from "../../icons/instagram-50.png";
import style from "./Contact.module.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xeojejzl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setStatus("E-mail enviado com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Erro ao enviar e-mail.");
    }
  };

  return (
    <div className={style.contact}>
      <Menu />
      <h1 className={`${style.title} grid-6`}>
        C.
        <hr className={style.line} />
      </h1>
      <img
        src={ContactPhone}
        className={`${style.imgPhone} grid-4`}
        alt="telefone pendurado"
        loading="lazy"
      />
      <div className={`${style.form1} `}></div>
      <div className={`${style.form2} `}></div>
      <div className={`${style.form3}`}></div>

      <div className={`${style.social} grid-6`}>
        <ul>
          <li>
            <a
              href="https://github.com/TMendesO"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="Ícone do Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thiago-mendes-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="Ícone do Linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tmendesof/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstaIcon} alt="Ícone do Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className={`${style.contactForm}`}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nome:"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail:"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Mensagem:"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
