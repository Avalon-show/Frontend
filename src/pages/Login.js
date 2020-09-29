import React from "react";
import "./styles/HomeLanding.css";

import NavbarLogin from "../components/NavbarLogin";
import LoginComponent from "../components/LoginComponent";
import Footer from "../components/Footer";

class Login extends React.Component {
  render() {
    return (
      <section className="bg-black hero">
        <NavbarLogin />
        <LoginComponent />
        <Footer />
      </section>
    );
  }
}

export default Login;
