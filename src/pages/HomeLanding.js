//en esta pagina va el
//navbar con el logo de netflix y un boton de iniciar sesion
//Hero con caja para poner email y comenzar ya
//preguntas frecuentes
//footer
import React from "react";
import "./styles/HomeLanding.css";

import Navbar from "../components/Navbar";
import HomeCenter from "../components/HomeCenter";
import Footer from "../components/Footer";

class HomeLanding extends React.Component {
  render() {
    return (
      <section className="hero">
        <Navbar />
        <HomeCenter />
        <Footer />
      </section>
    );
  }
}

export default HomeLanding;
