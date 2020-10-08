//acá vamos a ir llamando a las páginas para imprimirlas en pantalla

import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./assets/main.css";
import App from "./components/App";
// import "bootswatch/dist/lux/bootstrap.min.css";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
