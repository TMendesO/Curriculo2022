import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Presentetion from "./components/presentetion/Presentetion";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Publication from "./components/publication/Publication";
import Contact from "./components/contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentetion />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/publicacao" element={<Publication />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
