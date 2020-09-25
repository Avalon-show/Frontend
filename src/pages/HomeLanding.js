//en esta pagina va el
//navbar con el logo de netflix y un boton de iniciar sesion
//Hero con caja para poner email y comenzar ya
//preguntas frecuentes
//footer
import React from "react";
import "./styles/HomeLanding.css";

import Navbar from "../components/Navbar";
// import CardQuestionButton from "../components/CardFAQ";
import ListFAQ from "../components/ListFAQ";

class HomeLanding extends React.Component {
  render() {
    return (
      <section>
        <Navbar />
        <main className="hero">
          <h1>Hero</h1>
        </main>
        <ListFAQ />
      </section>
    );
  }
}

export default HomeLanding;
