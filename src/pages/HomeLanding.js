//en esta pagina va el
//navbar con el logo de netflix y un boton de iniciar sesion
//Hero con caja para poner email y comenzar ya
//preguntas frecuentes
//footer
import React from "react";
import "./styles/HomeLanding.css";

import Navbar from "../components/Navbar";
import HomeCenter from "../components/HomeCenter";
import FormEmail from "../components/FormEmail";
import HomeSection from "../components/HomeSection";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import Footer from "../components/Footer";

class HomeLanding extends React.Component {
  render() {
    return (
      <section className="bg-black hero">
        <Navbar />
        <HomeCenter />
        <FormEmail />
        <HomeSection />
        <HomeSection2 />
        <HomeSection3 />
        <FormEmail />
        <Footer />
      </section>
    );
  }
}

export default HomeLanding;
