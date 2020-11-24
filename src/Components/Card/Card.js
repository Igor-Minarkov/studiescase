import React, { useContext } from "react";
import { UsersContext } from "../../Context/userContext";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ img, id }) {
  const { SwitchOn } = useContext(UsersContext);

  return (
    <div className="CardSingle">
      {!SwitchOn ? (
        <Link to={`/Details/${id}`}>
          <figure>
            <img src={img.src} alt={img.author} />
            <figcaption>
              <h6>{img.tag} </h6>
              <p>{img.desc}</p>
              <span>
                {img.lectures.length > 1 ? (
                  <p>{img.lectures.length} лекции</p>
                ) : (
                  <p>{img.lectures.length} лекција</p>
                )}
              </span>
            </figcaption>
          </figure>
        </Link>
      ) : (
        <Link to={`/Details/${id}`}>
          <div className="horizontal-cards">
            <div className="horizontal-card">
              {img.lectures.length > 1 ? (
                <h5>{img.lectures.length} лекции</h5>
              ) : (
                <h5>{img.lectures.length} лекција</h5>
              )}
              <h4>{img.tag} </h4>
              <p>{img.desc}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Card;
