import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header-wrapper">
      <div className="App Header">
        <h2>Приклучи се на 1350 ентузијасти и учи дигитални вештини. </h2>
        <h2>Бесплатно.</h2>
      </div>
      <form className="header-form">
        <input text="email" placeholder="Email adress" />
        <button>Пријави се</button>
        <h5>Можеш да се исклучиш од листата во секое време!</h5>
      </form>
    </div>
  );
}

export default Header;
