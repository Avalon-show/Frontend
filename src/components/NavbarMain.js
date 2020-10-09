import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import video from "../images/trailer.mp4";
import "./styles/NavbarMain.css";

class NavbarMain extends React.Component {
  render() {
    return (
      <section>
        <div className="NavbarMain1">
          <div className="NavbarMain-container">
            <Link to="/Main">
              <img className="NavbarMain-image" src={logo} alt="Logo"></img>
            </Link>
            <ol className="Navbar-lista">
              <li>Inicio</li>
              <li>Peliculas</li>
            </ol>
          </div>
        </div>
        <div>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    );
  }
}
export default NavbarMain;
