import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

function Cards({ imgs }) {
  return (
    <div className="Cards-wrapper">
      <ul className="Cards">
        {imgs.map((img, i) => (
          <li key={i}>
            <Card img={img} id={img.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
