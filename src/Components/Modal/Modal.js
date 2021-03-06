import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form className="modal-form">
                <label htmlFor="email">Запишете го вашиот е-маил:</label>
                <input type="email" id="email" name="email" placeholder="Е-маил"></input>
                <button>Испрати</button>
              </form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
