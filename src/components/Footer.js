import React from "react";

import "./styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <section className="Footer-container">
          <div>
            <p>¿Preguntas? Llama al 01 800 917 1564</p>
          </div>
          <div className="Footer-container1">
            <p>Preguntas frecuentes</p>
            <p>Preferencias de cookies</p>
          </div>
          <div className="Footer-container2">
            <p>Centro de ayuda</p>
            <p>Información corporativa</p>
          </div>
          <div className="Footer-container3">
            <p>Términos de uso</p>
          </div>
          <div className="Footer-container4">
            <p>Privacidad</p>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
