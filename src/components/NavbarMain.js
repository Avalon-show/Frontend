import React from "react";
import logo from "../images/logo.png";
import "./styles/NavbarMain.css";

class NavbarMain extends React.Component {
  render() {
    return (
      <section className="NavbarMain">
        <div className="NavbarMain-container">
          <img className="NavbarMain-image" src={logo} alt="Logo"></img>
          <ol className="Navbar-lista">
            <li>Inicio</li>
            <li>Peliculas</li>
          </ol>
        </div>
      </section>
    );
  }
}
export default NavbarMain;
