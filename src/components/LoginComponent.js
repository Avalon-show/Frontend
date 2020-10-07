import React from "react";
import { Link } from "react-router-dom";
import "./styles/LoginComponent.css";

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="justify-center contenedor px-12">
        <div className="flex flex-col items-center contenedor-caja">
          <h1 className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-white text-4xl m-10 text-center">
            Iniciar Sesión
          </h1>
          <input
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white focus:outline-none focus:shadow-outline"
            type="Email"
            placeholder="Email"
          ></input>
          <input
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 formulario placeholder-black hover:bg-white  focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Contraseña"
          ></input>
          <Link
            to="/Cuenta"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 button-login items-center mt-10"
          >
            Iniciar Sesión
          </Link>

          <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 justify-between">
            <h6 className=" text-white text-sm text-left mt-2 mb-8">
              Recuerdame
            </h6>
            <h6 className=" text-white text-sm text-right mt-2 mb-8">
              ¿Necesitas ayuda?
            </h6>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mt-2 mb-10">
            <h3 className=" text-white text-base mt-2 mb-2 ">
              ¿Primera vez en Netflix? Suscríbete ya.
            </h3>
            <h3 className="text-white text-sm mt-2 mb-2">
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot. Más info.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
