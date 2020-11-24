import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import Modal from '../Modal/Modal';
import useModal from '../../Hooks/useModal';

function Nav(props) {

  const {isShowing, toggle} = useModal();
  return (
    <div className="navbar-wrapper">
      <Link to={`/`} className="logoLink">
        <img src={logo} alt="logo"></img>
      </Link>
      <div className="nav">
        <ul>
          <a href="https://brainster.co/" target="_blank" rel="noopener noreferrer" >
            <li>Академии</li>
          </a>
          <a href="https://brainster.co/" target="_blank" rel="noopener noreferrer" >
            <li>Вебинари</li>
          </a>
          <a href="https://brainster.co/" target="_blank" rel="noopener noreferrer" >
            <li>Тест за кариера</li>
          </a>
          <a href="https://brainster.co/" target="_blank" rel="noopener noreferrer" >
            <li>Блог</li>
          </a>
        </ul>
        <button onClick={toggle}>Пријави се</button>
        <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      </div>
    </div>
  );
}

export default Nav;
