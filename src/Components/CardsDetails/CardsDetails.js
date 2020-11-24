import React, { useContext } from "react";
import { UsersContext } from "../../Context/userContext";
import "./CardsDetails.css";

function CardsDetails(props) {
  const { imgs } = useContext(UsersContext);
  const currentCard = imgs[props.match.params.id - 1];

  return (
    <div className="CardDetails-wrapper">
      <div className="CardDetails-Cards">
        {currentCard.lectures.map((lecture, i) => (
          <a href="/" key={i}>
            <div className="cardDetails-Card">
              <div className="cardDetails-heading">
                <i>{lecture.number}</i>
                <h4>{lecture.heading}</h4>
                <img src={lecture.emoji} alt="emoji"></img>
                <p>{lecture.date}</p>
              </div>
              <span className="cardDetails-p">
                <p>{lecture.p}</p>
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="Banner">
        <h3>Банер наслов</h3>
        <h5>Банер текст</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nobis
          voluptatem earum hic incidunt ullam commodi quasi ipsam dignissimos
          suscipit. Ipsam, velit assumenda? Adipisci corporis, iste neque
          excepturi vel nesciunt.
        </p>
        <button>Повеќе
          <img src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-right-arrow-icon-png-image_956430.jpg" alt="arrow"></img>
        </button>
      </div>
    </div>
  );
}

export default CardsDetails;
