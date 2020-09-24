import React from "react";
import "./styles/HomeCenter.css";

class HomeCenter extends React.Component {
  render() {
    return (
      <section className="Home-container">
        <h1>Películas y series ilimitadas y mucho más</h1>
        <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
        <h4>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </h4>
        <div className="Home-container__formulario">
          <input
            className="Home-input"
            type="email"
            placeholder="Email"
          ></input>
          <button className="Home-button">COMIENZA YA ></button>
        </div>
      </section>
    );
  }
}

export default HomeCenter;
