import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <section className="Navbar">
        <div className="container">
          <img className="image" src={logo} alt="Logo"></img>
          <Link to="/Home/Login" className="button">
            Iniciar Sesión
          </Link>
        </div>
      </section>
    );
  }
}
export default Navbar;
