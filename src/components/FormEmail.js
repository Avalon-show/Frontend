import React from "react";

import "./styles/FormEmail.css";

class FormEmail extends React.Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default FormEmail;
