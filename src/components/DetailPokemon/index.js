import React from "react";
import { tagNumber } from "../../shared/Utillity";

const DetailPokemon = (props) => {
  const { name, id, types, weight, height } = props.data;

  const listTypes = [];

  types.forEach((item, index) => {
    const typeName =
      item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1);
    if (index === types.length - 1) {
      listTypes.push(`${typeName}`);
    } else {
      listTypes.push(`${typeName} / `);
    }
  });

  return (
    <div className="pokemon">
      <div className="pokemon__thumbnail">
        <img
          className="pokemon__thumbnail__image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={`${name} picture`}
        />
      </div>
      <h5 className="pokemon__name">{name}</h5>
      <center>
        <span className="pokemon__badge">{`#${tagNumber(id)}`}</span>
      </center>
      <center>
        <div className="pokemon__stats">
          <div className="pokemon__stats__item">
            <h6 className="pokemon__stats__item__title">Type</h6>
            <p className="pokemon__stats__item__description">
              {listTypes.join("")}
            </p>
          </div>
          <div className="pokemon__stats__item">
            <h6 className="pokemon__stats__item__title">Weight</h6>
            <p className="pokemon__stats__item__description">{`${
              weight / 10
            } Kg`}</p>
          </div>
          <div className="pokemon__stats__item">
            <h6 className="pokemon__stats__item__title">Height</h6>
            <p className="pokemon__stats__item__description">{`${
              height / 10
            } M`}</p>
          </div>
        </div>
      </center>
    </div>
  );
};

export default DetailPokemon;
