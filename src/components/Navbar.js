import React from "react";
import logo from "../images/logo.png";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <section className="Navbar">
        <div className="container">
          <img className="image" src={logo} alt="Logo"></img>
          <button className="button">Iniciar Sesión</button>
        </div>
      </section>
    );
  }
}

export default Navbar;
