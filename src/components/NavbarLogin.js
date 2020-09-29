import React from "react";
import logo from "../images/logo.png";
import "./styles/Navbar.css";

class NavbarLogin extends React.Component {
  render() {
    return (
      <section className="Navbar">
        <div className="container">
          <img className="image" src={logo} alt="Logo"></img>
        </div>
      </section>
    );
  }
}
export default NavbarLogin;
