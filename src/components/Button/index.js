import React from "react";

const button = (props) => {
  const { disabled, clicked, children } = props;

  return (
    <button
      disabled={disabled}
      className="button button--primary"
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default button;
