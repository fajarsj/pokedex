import React from "react";

const CardList = (props) => {
  const { children } = props;
  return <div className="cards">{children}</div>;
};

export default CardList;
