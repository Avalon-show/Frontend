//Home despues del login
import React from "react";
// import "./styles/HomeLanding.css";

import NavbarMain from "../components/NavbarMain";
import HeaderVideo from "../components/HeaderVideo";
import Footer from "../components/Footer";

class HomeMain extends React.Component {
  render() {
    return (
      <section className="bg-red-900">
        <NavbarMain />
        <HeaderVideo />
        <Footer />
      </section>
    );
  }
}

export default HomeMain;
