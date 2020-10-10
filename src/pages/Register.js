import React from "react";
import "./styles/HomeLanding.css";
import NavbarLogin from "../components/NavbarLogin";
import RegisterComponent from "../components/RegisterComponent";
import Footer from "../components/Footer";

class Register extends React.Component {
  render() {
    return (
      <section className="bg-black hero">
        <NavbarLogin />
        <RegisterComponent />
        <Footer />
      </section>
    );
  }
}

export default Register;
