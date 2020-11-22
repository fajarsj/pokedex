import React from "react";

const button = (props) => {
  const { disabled, clicked, children, variant } = props;

  return (
    <button
      disabled={disabled}
      className={`button button--${variant}`}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default button;
