import React from "react";

import "./styles/FormEmail.css";

class FormEmail extends React.Component {
  render() {
    return (
      <div className="Home-container__formulario">
        <input className="Home-input" type="email" placeholder="Email"></input>
        <button className="Home-button">COMIENZA YA ></button>
      </div>
    );
  }
}

export default FormEmail;
