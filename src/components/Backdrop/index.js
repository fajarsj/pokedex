import React from "react";

const Backdrop = (props) => {
  const { show, clicked } = props;

  return show ? <div className="backdrop" onClick={clicked}></div> : null;
};

export default Backdrop;
