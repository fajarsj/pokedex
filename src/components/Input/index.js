import React from "react";

const Input = (props) => {
  const { value, changed, ...elementConfig } = props;

  return (
    <div className="input">
      <input
        className="input__text"
        value={value}
        onChange={changed}
        {...elementConfig}
      />
    </div>
  );
};

export default Input;
