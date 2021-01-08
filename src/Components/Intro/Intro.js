import React from "react";
import "./Intro.css";

function Intro(props) {
  return (
    <div className="Intro-wrapper">
      <div className="App Intro">
        <h2>Приклучи се на 1350 ентузијасти и учи дигитални вештини. </h2>
        <h2>Бесплатно.</h2>
      </div>
      <form className="intro-form">
        <input text="email" placeholder="Email adress" />
        <button>Пријави се</button>
        <h5>Можеш да се исклучиш од листата во секое време!</h5>
      </form>
    </div>
  );
}

export default Intro;
