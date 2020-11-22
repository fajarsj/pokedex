import React from "react";
import { lastURLsegment, tagNumber } from "../../shared/Utillity";

const Card = (props) => {
  const { clicked, title, url } = props;
  const pokemonId = lastURLsegment(url);

  return (
    <div className="card card--pokemon" onClick={clicked}>
      <div className="card__header">
        <h5 className="card__title">{title}</h5>
        <span className="card__subtitle">{`#${tagNumber(pokemonId)}`}</span>
      </div>
      <div className="card__body">
        <div className="card__pokemon">
          <img
            className="card__pokemon__image"
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
            alt="Pokemon"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
