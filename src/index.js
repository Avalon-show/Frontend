//acá vamos a ir llamando a las páginas para imprimirlas en pantalla

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeLanding from "./pages/HomeLanding";

const container = document.getElementById("app");

ReactDOM.render(<HomeLanding />, container);
