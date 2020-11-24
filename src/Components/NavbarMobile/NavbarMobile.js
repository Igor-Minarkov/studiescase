import React from "react";
import "./NavbarMobile.css";
import Modal from "../Modal/Modal";
import useModal from "../../Hooks/useModal";

function NavbarMobile(props) {
  const { isShowing, toggle } = useModal();
  return (
    <div className="navMobile-wrapper">
      <ul>
        <a
          href="https://brainster.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Академии</li>
        </a>
        <a
          href="https://brainster.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Вебинари</li>
        </a>
        <a
          href="https://brainster.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Тест за кариера</li>
        </a>
        <a
          href="https://brainster.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Блог</li>
        </a>
      </ul>
      <button onClick={toggle}>Пријави се</button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}

export default NavbarMobile;
