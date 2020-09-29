import React from "react";
import "./styles/LoginComponent.css";

class LoginComponent extends React.Component {
  render() {
    return (
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
        </div>
      </form>
    )
  }
}

export default LoginComponent;
